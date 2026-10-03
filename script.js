// ===== Configuração de contato =====
// Número do WhatsApp Business (DDI + DDD + número, só dígitos)
const WHATSAPP = "556592295010";
const WA_MSG = "Olá, Eletrocar! Gostaria de agendar um serviço.";

// Cada link pode ter sua mensagem própria em data-msg (ex.: botão da seção de ar-condicionado)
document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(a.dataset.msg || WA_MSG)}`;
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();

// ===== Header: fundo ao sair do hero (IntersectionObserver, sem listener de scroll) =====
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
if (nav && hero) {
  new IntersectionObserver(
    ([entry]) => nav.classList.toggle("is-scrolled", !entry.isIntersecting),
    { rootMargin: "-80px 0px 0px 0px" }
  ).observe(hero);
}

// ===== Menu mobile =====
const toggle = document.querySelector(".nav__toggle");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
document.querySelectorAll(".nav__mobile a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// ===== Animações de entrada =====
const reveals = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const siblings = [...e.target.parentElement.children].filter((c) => c.classList.contains("reveal"));
        e.target.style.transitionDelay = `${Math.min(siblings.indexOf(e.target), 5) * 70}ms`;
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

// ===== Carrossel de depoimentos =====
const track = document.querySelector(".reviews__track");
document.querySelectorAll("[data-scroll]").forEach((btn) =>
  btn.addEventListener("click", () => {
    const card = track.querySelector(".quote");
    const step = card ? card.getBoundingClientRect().width + 14 : 400;
    track.scrollBy({ left: step * Number(btn.dataset.scroll), behavior: "smooth" });
  })
);

// ===== FAQ: abre um por vez =====
const items = document.querySelectorAll(".faq__list details");
items.forEach((d) =>
  d.addEventListener("toggle", () => {
    if (d.open) items.forEach((o) => o !== d && (o.open = false));
  })
);
