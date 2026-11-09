import { MessageCircle, ArrowUpRight } from "lucide-react";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const PHONE = "5521993218078";

const WHATSAPP_URL =
  `https://wa.me/${PHONE}?text=` +
  encodeURIComponent(
    "Olá, Mazinho! Conheci seu portfólio e gostaria de solicitar um orçamento.",
  );

const INSTAGRAM_URL = "https://www.instagram.com/mazinhooliverfotografia/";

export default function ContactSection() {
  return (
    <section id="contato" className="bg-[#191919] py-24 text-white md:py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Introdução */}
        <p className="mb-6 text-xs font-semibold tracking-[0.3em] text-[#b9825b]">
          VAMOS CONVERSAR?
        </p>

        <h2 className="font-editorial text-4xl leading-tight md:text-6xl">
          Sua história merece
          <br />
          <span className="italic text-[#b9825b]">ser eternizada.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#bdb7b1] md:text-base">
          Cada momento é único. Vamos conversar sobre como transformar suas
          lembranças em fotografias que atravessam o tempo.
        </p>

        {/* Botões de contato */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 bg-[#b9825b] px-8 py-5 text-xs font-semibold tracking-wider text-white transition hover:bg-[#a36d49] sm:w-auto sm:min-w-64"
          >
            <MessageCircle size={19} />
            SOLICITAR ORÇAMENTO
            <ArrowUpRight size={17} />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 border border-[#6e625a] px-8 py-5 text-xs font-semibold tracking-wider transition hover:border-[#b9825b] hover:text-[#b9825b] sm:w-auto sm:min-w-64"
          >
            <FaInstagram size={19} />
            ACOMPANHAR NO INSTAGRAM
          </a>
        </div>

        {/* Telefone */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <FaWhatsapp size={20} className="text-[#25D366]" />
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#d6d0cb] transition hover:text-[#b9825b]"
          >
            (21) 99321-8078
          </a>
        </div>

        {/* Assinatura */}
        <div className="mx-auto mt-20 max-w-lg border-t border-[#39332f] pt-10">
          <p className="font-editorial text-2xl tracking-wide">
            Mazinho Oliver
          </p>

          <p className="mt-2 text-xs tracking-[0.3em] text-[#b9825b]">
            FOTOGRAFIA
          </p>

          <p className="mt-6 text-sm text-[#aaa39d]">
            Momentos que merecem ser lembrados para sempre.
          </p>
        </div>
      </div>
    </section>
  );
}
