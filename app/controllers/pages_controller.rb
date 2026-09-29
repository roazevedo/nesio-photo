class PagesController < ApplicationController
  def home
    @lead = Lead.new
    @rolls = ROLLS
  end

  # Os três "rolos de filme" — as três verticais do Nésio.
  # Dados de apresentação (fotos são placeholders, trocáveis depois).
  ROLLS = [
    {
      key: "15anos", n: "01", tipo: "15anos",
      titulo: "15 Anos", titulo_alt: "Quinze",
      iso: "ISO 400", cor: "magenta",
      handle: "@nesiophoto", followers: "31,6 mil", posts: "441",
      lead: "O ano em que a menina decide quem vai ser.",
      corpo: "Do ensaio ao último giro da valsa — a festa inteira revelada com a luz " \
             "e o tempo certos. Especialista em 15 anos há mais de uma década.",
      frames: [
        { img: "fotos/15anos/quinze-01.jpg", n: "07", momento: "A luz antes da entrada", pick: true },
        { img: "fotos/15anos/quinze-02.jpg", n: "12", momento: "O ensaio" },
        { img: "fotos/15anos/quinze-03.jpg", n: "18", momento: "A gargalhada da noite" },
        { img: "fotos/15anos/quinze-04.jpg", n: "24", momento: "O vestido" },
        { img: "fotos/15anos/quinze-05.jpg", n: "31", momento: "O retrato" }
      ]
    },
    {
      key: "casamentos", n: "02", tipo: "casamento",
      titulo: "Casamento", titulo_alt: "Wedding",
      iso: "ISO 200", cor: "ambar",
      handle: "@nesiophotowedding", followers: "1.051", posts: "50",
      lead: "Um dia. A vida inteira para lembrar dele.",
      corpo: "Do olhar no altar ao último abraço na pista. Fotografia e videografia de " \
             "casamento que guardam a história do jeito que ela aconteceu.",
      frames: [
        { img: "fotos/casamentos/casamento-01.jpg", n: "03", momento: "O sim", pick: true },
        { img: "fotos/casamentos/casamento-02.jpg", n: "09", momento: "O primeiro abraço" },
        { img: "fotos/casamentos/casamento-03.jpg", n: "15", momento: "A chegada" },
        { img: "fotos/casamentos/casamento-04.jpg", n: "21", momento: "A caminhada" },
        { img: "fotos/casamentos/casamento-05.jpg", n: "27", momento: "Os padrinhos" },
        { img: "fotos/casamentos/casamento-06.jpg", n: "33", momento: "As alianças" }
      ]
    },
    {
      key: "kids", n: "03", tipo: "kids",
      titulo: "Kids", titulo_alt: "Festas Infantis",
      iso: "ISO 800", cor: "prisma",
      handle: "@nesiophotokids", followers: "3.134", posts: "197",
      lead: "A idade em que tudo é enorme e nada dura.",
      corpo: "Balões, bolo, correria e aquele instante que ninguém programou. " \
             "Festa infantil capturada na altura dos olhos de quem é o dono do dia.",
      frames: [
        { img: "fotos/kids/kids-01.jpg", n: "02", momento: "Os balões", pick: true },
        { img: "fotos/kids/kids-02.jpg", n: "08", momento: "As velas" },
        { img: "fotos/kids/kids-03.jpg", n: "14", momento: "Os presentes" },
        { img: "fotos/kids/kids-04.jpg", n: "19", momento: "O retrato do aniversariante" },
        { img: "fotos/kids/kids-05.jpg", n: "25", momento: "O brinde" }
      ]
    }
  ].freeze
end
