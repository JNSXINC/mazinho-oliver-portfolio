import { Camera, ArrowUpRight, Video, Check } from "lucide-react";

import { services } from "../data/services";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(price);

export default function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#f1ece5] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Apresentação */}
        <div className="mb-14 text-center">
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#b9825b]">
            SERVIÇOS E INVESTIMENTO
          </p>

          <h2 className="font-editorial text-4xl text-[#242424] md:text-6xl">
            Momentos <span className="italic">eternos.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-7 text-[#77716c]">
            Cada história merece ser registrada com sensibilidade e atenção aos
            detalhes. Conheça nossos serviços e escolha a cobertura ideal para
            seu momento.
          </p>
        </div>

        {/* Serviços */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const hasDrone = service.id === "cha-completo";

            const message = [
              "Olá, Mazinho! Tudo bem?",
              "",
              `Tenho interesse no serviço de ${service.title} e gostaria de solicitar um orçamento.`,
              "",
              "Poderia me informar sobre disponibilidade, condições de pagamento e detalhes da cobertura?",
              "",
              "Obrigado!",
            ].join("\n");

            const whatsappUrl =
              "https://wa.me/5521993218078?text=" + encodeURIComponent(message);

            return (
              <article
                key={service.id}
                className={`relative flex flex-col border bg-[#f8f6f2] p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  hasDrone ? "border-[#b9825b]" : "border-[#e5ded5]"
                }`}
              >
                {/* Destaque do pacote com drone */}
                {hasDrone && (
                  <span className="absolute right-0 top-0 bg-[#b9825b] px-4 py-2 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Inclui drone
                  </span>
                )}

                {hasDrone ? (
                  <Video
                    size={28}
                    strokeWidth={1.3}
                    className="mb-8 text-[#b9825b]"
                  />
                ) : (
                  <Camera
                    size={28}
                    strokeWidth={1.3}
                    className="mb-8 text-[#b9825b]"
                  />
                )}

                <h3 className="font-editorial min-h-16 text-2xl text-[#242424]">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-20 text-sm leading-7 text-[#77716c]">
                  {service.description}
                </p>

                {hasDrone && (
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-[#a36d49]">
                    <Check size={16} />
                    Captação aérea incluída no pacote
                  </div>
                )}

                {/* Preço e orçamento */}
                <div className="mt-auto pt-8">
                  <div className="mb-6 h-px bg-[#e5ded5]" />

                  <p className="mb-2 text-xs uppercase tracking-widest text-[#77716c]">
                    Investimento
                  </p>

                  <p className="font-editorial text-3xl text-[#242424]">
                    {formatPrice(service.price)}
                  </p>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex items-center justify-between bg-[#b9825b] px-5 py-4 text-xs font-semibold tracking-wider text-white transition hover:bg-[#a36d49]"
                  >
                    SOLICITAR ORÇAMENTO
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Informações importantes */}
        <div className="mx-auto mt-12 max-w-3xl border-t border-[#d8cfc5] pt-8 text-center">
          <p className="text-sm leading-7 text-[#77716c]">
            Os valores apresentados são referências dos pacotes disponíveis.
            Deslocamentos para locais mais distantes podem ter custos
            adicionais. Consulte disponibilidade e condições antes da
            contratação.
          </p>
        </div>
      </div>
    </section>
  );
}
