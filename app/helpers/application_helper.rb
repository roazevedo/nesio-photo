module ApplicationHelper
  # Número real do Nésio (linha do @nesiophotowedding). Trocável por vertical depois.
  WHATSAPP = "5521969738727".freeze

  def whatsapp_url(texto = nil)
    base = "https://wa.me/#{WHATSAPP}"
    texto.present? ? "#{base}?text=#{ERB::Util.url_encode(texto)}" : base
  end

  def instagram_url(handle)
    "https://instagram.com/#{handle.delete('@')}"
  end
end
