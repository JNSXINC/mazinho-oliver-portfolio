export type Service = {
  id: string;
  title: string;
  price: number;
  description: string;
};

export const services: Service[] = [
  {
    id: "casamento-completo",
    title: "Casamento Completo",
    price: 2500,
    description:
      "4 horas de cobertura, 2 fotógrafos, Story Maker e pré-wedding.",
  },
  {
    id: "casamento-intimista",
    title: "Casamento Intimista",
    price: 1400,
    description:
      "4 horas de cobertura, 1 fotógrafo e mini pré-wedding de 10 fotos.",
  },
  {
    id: "casamento-civil",
    title: "Casamento Civil",
    price: 550,
    description: "Cobertura fotográfica em cartório.",
  },
  {
    id: "bodas",
    title: "Bodas de Casamento",
    price: 900,
    description: "4 horas de cobertura, 1 fotógrafo, cerimônia e comemoração.",
  },
  {
    id: "15-anos",
    title: "Aniversário de 15 Anos",
    price: 1800,
    description: "4 horas de cobertura, 2 fotógrafos e ensaio com 10 fotos.",
  },
  {
    id: "aniversario-infantil",
    title: "Aniversário Infantil",
    price: 400,
    description: "4 horas de cobertura com 1 fotógrafo.",
  },
  {
    id: "ensaio",
    title: "Ensaio Fotográfico",
    price: 350,
    description: "Retratos individuais e de família.",
  },
  {
    id: "gestante",
    title: "Ensaio Gestante",
    price: 550,
    description: "Ensaio gestante. Deslocamentos distantes sob consulta.",
  },
  {
    id: "bebe",
    title: "Primeiros Momentos",
    price: 450,
    description: "Ensaio de bebê com fotos digitais tratadas.",
  },
  {
    id: "cha-fotografia",
    title: "Chá Revelação — Fotografia",
    price: 750,
    description: "4 horas de cobertura, 1 fotógrafo e fotos digitais tratadas.",
  },
  {
    id: "cha-completo",
    title: "Chá Revelação — Completo",
    price: 1450,
    description: "Fotografia, vídeo compacto e filmagem com drone.",
  },
];
