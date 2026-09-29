class CreateLeads < ActiveRecord::Migration[7.2]
  def change
    create_table :leads do |t|
      t.string :nome, null: false
      t.string :telefone, null: false
      t.string :tipo_evento, null: false
      t.string :data_evento
      t.text :mensagem
      t.string :origem # de qual seção veio o contato (15anos/casamentos/kids/geral)

      t.timestamps
    end
  end
end
