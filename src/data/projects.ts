export type MediaType = "photos" | "videos" | "mixed";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  mediaType: MediaType;
  photos: string[];
  videos: string[];
};

export const projects: Project[] = [
  {
    id: "casamento-civil",
    title: "O Início de Uma Nova História",
    category: "Casamento Civil",
    description: "A emoção de um sim, registrada em cada detalhe.",
    mediaType: "photos",
    photos: [
      "/images/casamento-civil/pagina_04_imagem_01.png",
      "/images/casamento-civil/pagina_04_imagem_02.png",
      "/images/casamento-civil/pagina_04_imagem_03.png",
      "/images/casamento-civil/pagina_05_imagem_01.webp",
      "/images/casamento-civil/pagina_06_imagem_01.png",
      "/images/casamento-civil/pagina_06_imagem_02.png",
      "/images/casamento-civil/pagina_06_imagem_03.png",
      "/images/casamento-civil/pagina_07_imagem_01.png",
      "/images/casamento-civil/pagina_08_imagem_01.jpeg",
      "/images/casamento-civil/pagina_08_imagem_02.jpeg",
      "/images/casamento-civil/pagina_09_imagem_02.jpeg",
    ],
    videos: [],
  },
  {
    id: "casamentos",
    title: "Histórias de Amor",
    category: "Casamentos",
    description:
      "Cada olhar, cada abraço e cada promessa merecem ser lembrados.",
    mediaType: "mixed",
    photos: [
      "/images/casamentos/pagina_01_imagem_01.jpeg",
      "/images/casamentos/pagina_03_imagem_01.jpeg",
      "/images/casamentos/pagina_03_imagem_02.jpeg",
      "/images/casamentos/pagina_10_imagem_01.jpeg",
      "/images/casamentos/pagina_10_imagem_02.jpeg",
      "/images/casamentos/pagina_10_imagem_03.jpeg",
    ],
    videos: [],
  },
  {
    id: "aniversarios",
    title: "Celebrações Especiais",
    category: "Aniversários",
    description: "Momentos de alegria que se transformam em lembranças.",
    mediaType: "photos",
    photos: [
      "/images/aniversarios/pagina_12_imagem_01.jpeg",
      "/images/aniversarios/pagina_12_imagem_02.jpeg",
      "/images/aniversarios/pagina_13_imagem_01.jpeg",
      "/images/aniversarios/pagina_13_imagem_02.jpeg",
      "/images/aniversarios/pagina_13_imagem_03.jpeg",
      "/images/aniversarios/pagina_13_imagem_04.jpeg",
    ],
    videos: [],
  },
  {
    id: "ensaios",
    title: "Sua Essência em Imagens",
    category: "Ensaios",
    description: "Retratos que valorizam cada expressão, detalhe e olhar.",
    mediaType: "photos",
    photos: [
      "/images/ensaios/pagina_14_imagem_01.jpeg",
      "/images/ensaios/pagina_14_imagem_02.jpeg",
      "/images/ensaios/pagina_14_imagem_03.jpeg",
      "/images/ensaios/pagina_15_imagem_01.jpeg",
      "/images/ensaios/pagina_15_imagem_02.jpeg",
      "/images/ensaios/pagina_15_imagem_03.jpeg",
    ],
    videos: [],
  },
  {
    id: "familia",
    title: "Laços que Permanecem",
    category: "Família",
    description: "Os instantes mais simples se tornam memórias preciosas.",
    mediaType: "photos",
    photos: ["/images/familia/pagina_16_imagem_01.jpeg"],
    videos: [],
  },
  {
    id: "gestante",
    title: "Um Amor que Cresce",
    category: "Gestante",
    description: "A doce espera de um novo capítulo.",
    mediaType: "photos",
    photos: [
      "/images/gestante/pagina_17_imagem_01.jpeg",
      "/images/gestante/pagina_18_imagem_01.jpeg",
      "/images/gestante/pagina_18_imagem_02.jpeg",
      "/images/gestante/pagina_19_imagem_01.jpeg",
      "/images/gestante/pagina_19_imagem_02.jpeg",
      "/images/gestante/pagina_20_imagem_01.jpeg",
    ],
    videos: [],
  },
  {
    id: "eventos",
    title: "Momentos Inesquecíveis",
    category: "Eventos",
    description: "Fotografia e vídeo para registrar celebrações especiais.",
    mediaType: "mixed",
    photos: [],
    videos: [],
  },
];
