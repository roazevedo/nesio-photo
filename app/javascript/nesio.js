// Nésio Photo — "Câmara Escura"
// Movimento como material: scroll inercial (Lenis), revelação (develop),
// parallax e crossfade do hero. Tudo visível por padrão; só enriquece.
import Lenis from "lenis"

const root = document.documentElement
const clamp = (min, v, max) => Math.max(min, Math.min(v, max))
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

function init() {
  root.classList.add("js")

  bootReveals()
  bootHeroCrossfade()
  bootNav()
  bootScrollTo()

  if (reduce) {
    // Sem animação de scroll: tudo revelado, nada de parallax.
    document.querySelectorAll(".develop").forEach((el) => el.style.setProperty("--dev", "1"))
    // Pula intro e revela hero diretamente
    skipIntro()
    return
  }

  bootCinematicIntro()
  bootScroll()
  boot3DTilt()
  bootHero3D()
  bootHorizontalGallery()
  bootScrollVideo()
}

// ---- Intro cinematográfico (cortina + revelação) ----
function bootCinematicIntro() {
  const curtain = document.querySelector(".intro-curtain")
  const hero = document.querySelector(".hero")
  if (!curtain || !hero) {
    hero?.classList.add("revealed")
    return
  }

  // Timeline cinematográfica:
  // 0ms      - Logo aparece (CSS animation)
  // 900ms    - Círculo laranja aparece e pulsa
  // 1800ms   - Flash dispara + círculo expande
  // 1950ms   - Cortina começa a abrir
  // 2100ms   - Hero começa a revelar
  // 3200ms   - Cortina some completamente

  setTimeout(() => {
    curtain.classList.add("ring")
  }, 900)

  setTimeout(() => {
    curtain.classList.add("flash")
  }, 1800)

  setTimeout(() => {
    curtain.classList.add("open")
  }, 1950)

  setTimeout(() => {
    hero.classList.add("revealed")
  }, 2100)

  setTimeout(() => {
    curtain.classList.add("done")
  }, 3200)
}

function skipIntro() {
  const curtain = document.querySelector(".intro-curtain")
  const hero = document.querySelector(".hero")
  if (curtain) curtain.classList.add("done")
  if (hero) hero.classList.add("revealed")
}

// ---- Revelação de blocos (fade + rise) ----
function bootReveals() {
  const items = document.querySelectorAll("[data-reveal]")
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"))
    return
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return
        const el = e.target
        if (el.hasAttribute("data-stagger")) {
          ;[...el.children].forEach((c, i) => c.style.setProperty("--i", i))
        }
        el.classList.add("in")
        io.unobserve(el)
      })
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  )
  items.forEach((el) => io.observe(el))
}

// ---- Crossfade do hero (um capítulo por vez) ----
function bootHeroCrossfade() {
  const frames = [...document.querySelectorAll("[data-hero-frame]")]
  if (frames.length < 2 || reduce) return
  let i = 0
  setInterval(() => {
    frames[i].classList.remove("is-live")
    i = (i + 1) % frames.length
    frames[i].classList.add("is-live")
  }, 4600)
}

// ---- Nav grudenta ----
function bootNav() {
  const nav = document.querySelector("[data-nav]")
  if (!nav) return
  const onScroll = () => nav.classList.toggle("is-stuck", window.scrollY > 40)
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
}

// ---- Scroll suave para âncoras ----
let lenis = null
function bootScrollTo() {
  const go = (target) => {
    const el = typeof target === "string" ? document.querySelector(target) : target
    if (!el) return
    if (lenis) lenis.scrollTo(el, { offset: -10, duration: 1.2 })
    else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" })
  }
  document.querySelectorAll('[data-scroll-to]').forEach((btn) => {
    btn.addEventListener("click", () => go(btn.getAttribute("data-scroll-to")))
  })
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href")
      if (id.length < 2) return
      const el = document.querySelector(id)
      if (!el) return
      e.preventDefault()
      go(el)
      history.replaceState(null, "", id)
    })
  })
}

// ---- Scroll inercial + revelação fotográfica + parallax + cinema ----
function bootScroll() {
  lenis = new Lenis({ duration: 1.1, lerp: 0.09, wheelMultiplier: 1, smoothWheel: true })

  const develops = [...document.querySelectorAll(".develop")]
  const parallax = [...document.querySelectorAll("[data-parallax]")]
  const hero = document.querySelector(".hero")
  const heroStage = document.querySelector(".hero__stage")
  const heroContent = document.querySelector(".hero__content")

  // Hook de captura: congela tudo revelado (usado só em screenshots/QA).
  let frozen = false
  window.__nesioFreeze = () => {
    frozen = true
    develops.forEach((el) => el.style.setProperty("--dev", "1"))
    parallax.forEach((el) => (el.style.transform = "scale(1.08)"))
  }

  const update = () => {
    if (frozen) return
    const vh = window.innerHeight
    const scrollY = window.scrollY

    // Efeito cinematográfico no hero: zoom out + fade ao rolar
    if (hero && heroStage) {
      const heroH = hero.offsetHeight
      const scrollRatio = clamp(0, scrollY / (heroH * 0.7), 1)

      // Stage: zoom out + escurece
      const stageScale = 1 - scrollRatio * 0.15
      const stageBrightness = 1 - scrollRatio * 0.6
      heroStage.style.transform = `scale(${stageScale.toFixed(3)})`
      heroStage.style.filter = `brightness(${stageBrightness.toFixed(2)})`

      // Content: sobe + desvanece
      if (heroContent) {
        const contentY = scrollRatio * -80
        const contentOpacity = 1 - scrollRatio * 1.2
        heroContent.style.transform = `translate3d(0, ${contentY.toFixed(1)}px, 0)`
        heroContent.style.opacity = clamp(0, contentOpacity, 1).toFixed(2)
      }
    }

    for (const el of develops) {
      const r = el.getBoundingClientRect()
      const start = vh * 0.96
      const end = vh * 0.42
      const p = clamp(0, (start - r.top) / (start - end), 1)
      el.style.setProperty("--dev", p.toFixed(3))
    }

    for (const el of parallax) {
      const speed = parseFloat(el.getAttribute("data-parallax")) || 0.06
      const r = el.getBoundingClientRect()
      const center = r.top + r.height / 2
      const delta = center - vh / 2
      const cap = r.height * 0.06
      const ty = clamp(-cap, -delta * speed, cap)
      el.style.transform = `translate3d(0, ${ty.toFixed(1)}px, 0) scale(1.08)`
    }
  }

  lenis.on("scroll", update)
  const raf = (t) => {
    lenis.raf(t)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  update()
  window.addEventListener("resize", update, { passive: true })
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init)
} else {
  init()
}

// ---- 3D Tilt effect (frames + canisters) ----
function boot3DTilt() {
  const els = [...document.querySelectorAll(".frame, .canister")]
  if (!els.length) return

  const maxAngle = 12 // graus máximos de inclinação

  els.forEach((el) => {
    el.setAttribute("data-tilt", "")

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width  // 0 → 1
      const y = (e.clientY - rect.top) / rect.height  // 0 → 1

      // Rotação: centro = 0, bordas = ±maxAngle
      const ry = (x - 0.5) * maxAngle * 2
      const rx = (0.5 - y) * maxAngle * 2

      el.style.setProperty("--rx", `${rx.toFixed(1)}deg`)
      el.style.setProperty("--ry", `${ry.toFixed(1)}deg`)
      el.style.setProperty("--glow", "1")
    })

    el.addEventListener("mouseleave", () => {
      el.style.setProperty("--rx", "0deg")
      el.style.setProperty("--ry", "0deg")
      el.style.setProperty("--glow", "0")
    })
  })
}

// ---- Scroll Video (vídeo 3D controlado por scroll - Google Flow) ----
function bootScrollVideo() {
  const section = document.querySelector("[data-scroll-video]")
  const video = document.querySelector("[data-scroll-video-player]")
  if (!section || !video) return

  const texts = document.querySelectorAll("[data-scroll-text]")
  let videoReady = false
  let videoDuration = 0
  let targetProgress = 0
  let currentProgress = 0
  let rafId = null

  // Garante que o vídeo está pausado (vamos controlar manualmente)
  video.pause()

  // Aguarda o vídeo carregar COMPLETAMENTE
  video.setAttribute("data-loading", "true")

  const onVideoReady = () => {
    videoDuration = video.duration
    videoReady = true
    video.removeAttribute("data-loading")
    video.currentTime = 0
    // Inicia o loop de animação
    startAnimationLoop()
  }

  // canplaythrough = vídeo carregou o suficiente para tocar sem parar
  if (video.readyState >= 3) {
    onVideoReady()
  } else {
    video.addEventListener("canplaythrough", onVideoReady, { once: true })
  }

  video.addEventListener("error", () => {
    console.warn("Scroll video: erro ao carregar vídeo")
    video.removeAttribute("data-loading")
  })

  // Loop de animação suave (lerp)
  const startAnimationLoop = () => {
    const animate = () => {
      // Interpola suavemente entre currentProgress e targetProgress
      currentProgress += (targetProgress - currentProgress) * 0.12

      // Atualiza o vídeo
      if (videoReady && videoDuration > 0) {
        const targetTime = currentProgress * videoDuration
        // Só atualiza se a diferença for perceptível
        if (Math.abs(video.currentTime - targetTime) > 0.016) {
          video.currentTime = targetTime
        }
      }

      // Atualiza textos baseado no progresso atual (não no target)
      updateTexts(currentProgress)

      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)
  }

  const updateTexts = (progress) => {
    texts.forEach((text) => {
      const textNum = parseInt(text.getAttribute("data-scroll-text"))
      const showStart = (textNum - 1) * 0.28 + 0.08
      const showEnd = showStart + 0.32

      if (progress >= showStart && progress <= showEnd) {
        text.classList.add("visible")
      } else {
        text.classList.remove("visible")
      }
    })
  }

  const updateScroll = () => {
    const rect = section.getBoundingClientRect()
    const sectionHeight = section.offsetHeight
    const viewportHeight = window.innerHeight
    const scrollRange = sectionHeight - viewportHeight

    if (scrollRange <= 0) return

    // Atualiza o target (o loop de animação vai interpolar)
    targetProgress = clamp(0, -rect.top / scrollRange, 1)

    // Marca a seção como "playing"
    if (targetProgress > 0.02) {
      section.classList.add("is-playing")
    } else {
      section.classList.remove("is-playing")
    }
  }

  // Integra com Lenis se disponível
  if (lenis) {
    lenis.on("scroll", updateScroll)
  } else {
    window.addEventListener("scroll", updateScroll, { passive: true })
  }
  updateScroll()
  window.addEventListener("resize", updateScroll, { passive: true })
}

// ---- Horizontal Gallery (scroll hijacking cinematográfico) ----
function bootHorizontalGallery() {
  const section = document.querySelector("[data-hgallery]")
  const track = document.querySelector("[data-hgallery-track]")
  const progressBar = document.querySelector("[data-hgallery-progress]")
  if (!section || !track) return

  const update = () => {
    const rect = section.getBoundingClientRect()
    const sectionHeight = section.offsetHeight
    const viewportHeight = window.innerHeight

    // Calcula o progresso do scroll dentro da seção (0 a 1)
    const scrollStart = rect.top
    const scrollEnd = rect.bottom - viewportHeight
    const scrollRange = sectionHeight - viewportHeight

    if (scrollRange <= 0) return

    const progress = clamp(0, -scrollStart / scrollRange, 1)

    // Move o track horizontalmente baseado no progresso
    const trackWidth = track.scrollWidth
    const viewportWidth = window.innerWidth
    const maxTranslate = trackWidth - viewportWidth + 200 // padding extra

    const translateX = -progress * maxTranslate
    track.style.transform = `translate3d(${translateX}px, 0, 0)`

    // Atualiza barra de progresso
    if (progressBar) {
      progressBar.style.width = `${progress * 100}%`
    }

    // Parallax sutil nas imagens
    const items = track.querySelectorAll(".hgallery__item")
    items.forEach((item, i) => {
      const itemProgress = clamp(0, (progress * items.length) - i + 1, 2)
      const scale = 0.92 + itemProgress * 0.04
      const opacity = 0.5 + itemProgress * 0.25
      item.style.transform = `scale(${scale})`
      item.style.opacity = clamp(0.6, opacity, 1)
    })
  }

  // Integra com Lenis se disponível, senão usa scroll nativo
  if (lenis) {
    lenis.on("scroll", update)
  } else {
    window.addEventListener("scroll", update, { passive: true })
  }
  update()
  window.addEventListener("resize", update, { passive: true })
}

// ---- Hero 3D parallax (mouse-follow depth) ----
// Nota: O efeito de scroll (zoom out + fade) agora é controlado em bootScroll()
// Este efeito adiciona um sutil movimento de perspectiva baseado no mouse
function bootHero3D() {
  const hero = document.querySelector(".hero")
  const heroStage = document.querySelector(".hero__stage")
  if (!hero || !heroStage) return

  let targetX = 0.5, targetY = 0.5
  let currentX = 0.5, currentY = 0.5
  let rafId = null

  const lerp = (a, b, t) => a + (b - a) * t

  const update = () => {
    // Só aplica efeito 3D se o scroll estiver no topo
    const scrollRatio = clamp(0, window.scrollY / (hero.offsetHeight * 0.3), 1)
    const intensity = 1 - scrollRatio // Diminui conforme rola

    currentX = lerp(currentX, targetX, 0.06)
    currentY = lerp(currentY, targetY, 0.06)

    // Aplica parallax sutil nas imagens do hero (direção oposta ao mouse)
    const frames = hero.querySelectorAll(".hero__frame img")
    frames.forEach((img) => {
      const tx = (currentX - 0.5) * -30 * intensity
      const ty = (currentY - 0.5) * -20 * intensity
      img.style.transform = `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) scale(1.08)`
    })

    // Continue animando se ainda não convergiu
    if (Math.abs(currentX - targetX) > 0.001 || Math.abs(currentY - targetY) > 0.001) {
      rafId = requestAnimationFrame(update)
    } else {
      rafId = null
    }
  }

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect()
    targetX = clamp(0, (e.clientX - rect.left) / rect.width, 1)
    targetY = clamp(0, (e.clientY - rect.top) / rect.height, 1)

    if (!rafId) rafId = requestAnimationFrame(update)
  })

  hero.addEventListener("mouseleave", () => {
    targetX = 0.5
    targetY = 0.5
    if (!rafId) rafId = requestAnimationFrame(update)
  })
}

// Turbo: reinicia leves handlers em navegação (a landing é single-page, mas por segurança)
document.addEventListener("turbo:load", () => {
  if (!root.classList.contains("js")) init()
})
