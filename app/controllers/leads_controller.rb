class LeadsController < ApplicationController
  # Contato tratado inteiramente no servidor: CSRF (herdado do ApplicationController),
  # honeypot anti-spam, validação e persistência.
  def create
    # Honeypot: bots preenchem o campo escondido. Fingimos sucesso e não gravamos.
    if params.dig(:lead, :apelido).present?
      return render_sucesso(Lead.new(nome: "amigo"))
    end

    @lead = Lead.new(lead_params)

    if @lead.save
      render_sucesso(@lead)
    else
      respond_to do |format|
        format.turbo_stream do
          render turbo_stream: turbo_stream.update(
            "form-contato", partial: "leads/form", locals: { lead: @lead }
          ), status: :unprocessable_entity
        end
        format.html { redirect_to root_path(anchor: "contato"), alert: "Confira os campos destacados." }
      end
    end
  end

  private

  def render_sucesso(lead)
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.update(
          "form-contato", partial: "leads/sucesso", locals: { lead: lead }
        )
      end
      format.html { redirect_to root_path(anchor: "contato"), notice: "Recebido! Em breve o Nésio te responde." }
    end
  end

  def lead_params
    params.require(:lead).permit(:nome, :telefone, :tipo_evento, :data_evento, :mensagem, :origem)
  end
end
