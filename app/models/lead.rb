class Lead < ApplicationRecord
  TIPOS = %w[15anos casamento kids outro].freeze

  # Toda a lógica/validação vive no servidor.
  validates :nome, presence: true, length: { maximum: 120 }
  validates :telefone, presence: true, length: { maximum: 40 }
  validates :tipo_evento, presence: true, inclusion: { in: TIPOS }
  validates :mensagem, length: { maximum: 2000 }
  validates :data_evento, length: { maximum: 40 }

  # Normaliza a entrada antes de validar.
  before_validation :normalizar

  private

  def normalizar
    self.nome = nome.to_s.strip.gsub(/\s+/, " ")
    self.telefone = telefone.to_s.strip
    self.tipo_evento = tipo_evento.to_s.strip
    self.mensagem = mensagem.to_s.strip.presence
  end
end
