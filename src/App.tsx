import { useState } from "react";
import { Menu, X, ArrowDown } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import ContactSection from "./sections/ContactSection";

const WHATSAPP_URL =
  "https://wa.me/5521993218078?text=Ol%C3%A1%2C%20Mazinho!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";

const INSTAGRAM_URL = "https://www.instagram.com/mazinhooliverfotografia/";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f6f2] text-[#242424]">
      {/* CABEÇALHO */}
      <header className="relative z-40 border-b border-[#e5ded5] bg-[#f8f6f2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-6 py-5">
          <a
            href="#inicio"
            onClick={() => setMenuOpen(false)}
            className="flex flex-col"
          >
            <span className="font-editorial text-xl font-semibold tracking-wide sm:text-2xl">
              MAZINHO OLIVER
            </span>

            <span className="text-[9px] tracking-[0.45em]">FOTOGRAFIA</span>
          </a>

          {/* Menu desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 text-sm lg:flex"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[#b9825b]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-[#b9825b] px-5 py-3 text-xs font-semibold tracking-wider text-white transition hover:bg-[#a36d49] sm:inline-block"
          >
            AGENDE PELO WHATSAPP
          </a>

          {/* Botão mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="rounded p-2 text-[#242424] lg:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navegação para dispositivos móveis"
            className="absolute left-0 right-0 top-full border-t border-[#e5ded5] bg-[#f8f6f2] px-6 py-6 shadow-xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm transition hover:text-[#b9825b]"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="bg-[#b9825b] px-5 py-4 text-center text-xs font-semibold tracking-wider text-white sm:hidden"
              >
                SOLICITAR ORÇAMENTO
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="inicio">
        {/* FOTOGRAFIA PRINCIPAL */}
        <section
          aria-label="Fotografia de destaque"
          className="relative min-h-[480px] overflow-hidden bg-[#191919] sm:min-h-[580px] lg:min-h-[680px]"
        >
          <img
            src="/images/casamentos/pagina_01_imagem_01.jpeg"
            alt="Registro fotográfico de casamento"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

          <div className="relative mx-auto flex min-h-[480px] max-w-7xl flex-col justify-end px-6 pb-16 pt-20 text-white sm:min-h-[580px] lg:min-h-[680px] lg:pb-20">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-[#e6c1a5]">
              Mazinho Oliver Fotografia
            </p>

            <h1 className="font-editorial max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-7xl">
              Histórias reais.
              <br />
              <span className="italic">Memórias para sempre.</span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Cada momento tem uma história única. A fotografia permite que ela
              continue viva.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projetos"
                className="bg-[#b9825b] px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#a36d49]"
              >
                Conheça meu trabalho
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center gap-2 border border-white/60 px-7 py-4 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-white/15"
              >
                Saiba mais
                <ArrowDown size={15} />
              </a>
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO */}
        <section className="bg-[#191919] text-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.35em] text-[#b9825b]">
                Fotografia com propósito
              </p>
            </div>

            <div className="mb-10 h-px w-full bg-[#b9825b]/50" />

            <h2 className="font-editorial max-w-4xl text-4xl leading-tight md:text-6xl">
              Momentos que merecem
              <br />
              <span className="italic">ser lembrados para sempre.</span>
            </h2>

            <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] tracking-[0.3em] text-[#c9c9c9]">
                  MAZINHO OLIVER FOTOGRAFIA
                </p>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[#c9c9c9] transition hover:text-[#b9825b]"
                >
                  <FaInstagram size={17} />
                  @mazinhooliverfotografia
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#b9825b] px-6 py-4 text-xs font-semibold tracking-wider text-[#b9825b] transition hover:bg-[#b9825b] hover:text-white"
                >
                  VER INSTAGRAM
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#b9825b] px-7 py-4 text-xs font-semibold tracking-wider text-white transition hover:bg-[#a36d49]"
                >
                  SOLICITAR ORÇAMENTO
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE O FOTÓGRAFO */}
        <section id="sobre" className="bg-[#f8f6f2] py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-8 text-xs font-semibold tracking-[0.3em] text-[#b9825b]">
                CONHEÇA O FOTÓGRAFO
              </p>

              <h2 className="font-editorial text-5xl leading-tight text-[#242424] md:text-6xl">
                Prazer, sou
                <br />
                Mazinho
                <br />
                <span className="italic">Oliver.</span>
              </h2>

              <div className="my-8 h-px w-32 bg-[#b9825b]" />

              <p className="max-w-md text-lg leading-8 text-[#77716c]">
                Meu trabalho é transformar momentos importantes em fotografias
                que guardam sentimentos e histórias.
              </p>

              <p className="mt-8 max-w-md text-lg leading-8 text-[#77716c]">
                Casamentos, festas e ensaios têm algo em comum: cada sorriso
                merece ser lembrado.
              </p>

              <div className="mt-12 border-l-2 border-[#b9825b] bg-white px-6 py-5">
                <p className="text-sm font-semibold tracking-[0.2em]">
                  MAZINHO OLIVER
                </p>

                <p className="mt-2 text-xs tracking-[0.3em] text-[#b9825b]">
                  FOTOGRAFIA
                </p>
              </div>
            </div>

            {/* Retrato do fotógrafo */}
            <div className="relative">
              <div className="absolute -bottom-2 -right-2 hidden h-full w-full border border-[#b9825b]/60 md:block" />

              <img
                src="/images/institucional/pagina_02_imagem_01.jpeg"
                alt="Retrato de Mazinho Oliver"
                loading="lazy"
                className="relative aspect-[4/5] w-full bg-[#eee8df] object-cover"
              />
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <ProjectsSection />

        {/* SERVIÇOS */}
        <ServicesSection />

        {/* CONTATO */}
        <ContactSection />
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-[#e5ded5] bg-[#f8f6f2] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="font-editorial text-lg font-semibold">
              MAZINHO OLIVER
            </p>
            <p className="mt-1 text-[10px] tracking-[0.35em] text-[#77716c]">
              FOTOGRAFIA
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs text-[#77716c]">
              © {new Date().getFullYear()} Mazinho Oliver Fotografia. Todos os
              direitos reservados.
            </p>

            <a
              href="https://jhonata-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-xs text-[#77716c] transition hover:text-[#b9825b]"
            >
              Desenvolvido por{" "}
              <span className="font-semibold text-[#b9825b]">Jhonataaz ↗</span>
            </a>
          </div>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Mazinho Oliver Fotografia"
            className="text-[#77716c] transition hover:text-[#b9825b]"
          >
            <FaInstagram size={21} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
