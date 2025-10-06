export const proyectosData = {
  tipos: [
    {
      id: "2pisos",
      titulo: "Casa de 2 pisos",
      areaConstruida: "81.8 m²",
      areaTerreno: "80 m²",
      precioContado: "S/ 232,200",
      cuotaDesde: "S/ 1,489 (30% inicial)",
      separacion: "S/ 300",
      imagenes: [
        {
          src: "https://placehold.co/600x400?text=Fachada+2+pisos",
          title: "Fachada principal",
        },
        {
          src: "https://placehold.co/600x400?text=Sala+2+pisos",
          title: "Sala comedor",
        },
        {
          src: "https://placehold.co/600x400?text=Cocina+2+pisos",
          title: "Cocina equipada",
        },
      ],
      caracteristicas: [
        {
          titulo: "General",
          descripcion: "Casa moderna de 2 pisos con buena iluminación natural.",
        },
        {
          titulo: "Sala, comedor y cocina",
          descripcion: "Ambiente integrado con cocina tipo americana.",
        },
        {
          titulo: "Baños",
          descripcion: "Baño en primer piso y compartido en segundo.",
        },
        {
          titulo: "Lavandería",
          descripcion: "Lavandería techada con conexión para lavadora.",
        },
        {
          titulo: "No incluye",
          descripcion: "Closets y cocina equipada son opcionales.",
        },
      ],
    },
    {
      id: "1piso",
      subtipo: [
        {
          id: "tipoA",
          titulo: "Casa de 1 piso - Tipo A",
          areaConstruida: "65 m²",
          areaTerreno: "80 m²",
          precioContado: "S/ 189,500",
          cuotaDesde: "S/ 1,200 (30% inicial)",
          separacion: "S/ 300",
          imagenes: [
            {
              src: "https://placehold.co/600x400?text=Fachada+1+piso+A",
              title: "Fachada Tipo A",
            },
            {
              src: "https://placehold.co/600x400?text=Sala+1+piso+A",
              title: "Sala comedor Tipo A",
            },
            {
              src: "https://placehold.co/600x400?text=Dormitorio+1+piso+A",
              title: "Dormitorio Tipo A",
            },
          ],
          caracteristicas: [
            {
              titulo: "General",
              descripcion:
                "Casa funcional Tipo A ideal para familias pequeñas.",
            },
            {
              titulo: "Sala comedor",
              descripcion: "Ambiente integrado para sala y comedor.",
            },
            {
              titulo: "Cocina",
              descripcion: "Cocina cerrada con conexión para gas.",
            },
            { titulo: "Baño", descripcion: "Baño completo bien distribuido." },
            {
              titulo: "Lavandería",
              descripcion: "Lavandería posterior con área techada.",
            },
          ],
        },
        {
          id: "tipoB",
          titulo: "Casa de 1 piso - Tipo B",
          areaConstruida: "65 m²",
          areaTerreno: "80 m²",
          precioContado: "S/ 199,000",
          cuotaDesde: "S/ 1,280 (30% inicial)",
          separacion: "S/ 300",
          imagenes: [
            {
              src: "https://placehold.co/600x400?text=Fachada+1+piso+B",
              title: "Fachada Tipo B",
            },
            {
              src: "https://placehold.co/600x400?text=Sala+1+piso+B",
              title: "Sala comedor Tipo B",
            },
            {
              src: "https://placehold.co/600x400?text=Dormitorio+1+piso+B",
              title: "Dormitorio Tipo B",
            },
          ],
          caracteristicas: [
            {
              titulo: "General",
              descripcion: "Casa funcional Tipo B con mayor área social.",
            },
            {
              titulo: "Sala comedor",
              descripcion: "Sala y comedor amplios, con mejor ventilación.",
            },
            {
              titulo: "Cocina",
              descripcion: "Cocina abierta estilo americano.",
            },
            {
              titulo: "Baño",
              descripcion: "Baño completo, ideal para familias medianas.",
            },
            {
              titulo: "Lavandería",
              descripcion: "Lavandería posterior techada y patio pequeño.",
            },
          ],
        },
      ],
    },
  ],
};
