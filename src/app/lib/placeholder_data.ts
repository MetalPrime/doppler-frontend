import { Project } from "./definitions"

export const projects: Project[] = [
    {
        id: "P001",
        status: "Aprobación",
        partners_id: ["PAR001", "PAR002"],
        description: "Implementación de prácticas agrícolas sostenibles para aumentar la productividad del frijol.",
        name: "Prácticas Agrícolas Sostenibles",
        bean_id: "B001"
      },
      {
        id: "P002",
        status: "Ejecución",
        partners_id: ["PAR003", "PAR004"],
        description: "Desarrollo de variedades de frijol resistentes a enfermedades comunes en la región.",
        name: "Variedades Resistentes",
        bean_id: "B002"
      },
      {
        id: "P003",
        status: "Financiamiento",
        partners_id: ["PAR002", "PAR005"],
        description: "Investigación sobre la optimización del uso de fertilizantes para mejorar la calidad del suelo y aumentar el rendimiento.",
        name: "Optimización de Fertilizantes",
        bean_id: "B003"
      },
      {
        id: "P004",
        status: "Planificación",
        partners_id: ["PAR001", "PAR004"],
        description: "Estudio de la influencia del clima en el rendimiento del frijol y desarrollo de estrategias de adaptación.",
        name: "Adaptación al Clima",
        bean_id: "B001"
      },
      {
        id: "P005",
        status: "Aprobación",
        partners_id: ["PAR006", "PAR007"],
        description: "Estudio de microorganismos beneficiosos para promover la salud del suelo y aumentar la resistencia de los frijoles.",
        name: "Microbioma del Suelo",
        bean_id: "B002"
      },
      {
        id: "P006",
        status: "Ejecución",
        partners_id: ["PAR008", "PAR009"],
        description: "Investigación sobre técnicas de riego eficientes para optimizar el uso del agua en el cultivo de frijol.",
        name: "Riego Eficiente",
        bean_id: "B004"
      },
      {
        id: "P007",
        status: "Evaluación",
        partners_id: ["PAR010", "PAR011"],
        description: "Desarrollo de tecnologías de monitoreo remoto para evaluar el estado de los cultivos de frijol y tomar decisiones informadas.",
        name: "Monitoreo Remoto",
        bean_id: "B003"
      },
      {
        id: "P008",
        status: "Informe Intermedio",
        partners_id: ["PAR012", "PAR013"],
        description: "Estudio de la interacción entre diferentes cultivos y su impacto en el rendimiento del frijol en sistemas de cultivo mixto.",
        name: "Cultivos Asociados",
        bean_id: "B002"
      },
      {
        id: "P009",
        status: "Informe Intermedio",
        partners_id: ["PAR014", "PAR015"],
        description: "Investigación sobre prácticas de manejo integrado de plagas para reducir el impacto de insectos y enfermedades en los cultivos de frijol.",
        name: "Manejo Integrado de Plagas",
        bean_id: "B003"
      },
      {
        id: "P010",
        status: "Archivado",
        partners_id: ["PAR016", "PAR017"],
        description: "Desarrollo de estrategias de polinización para mejorar la producción de frijoles mediante el aumento de la polinización.",
        name: "Estrategias de Polinización",
        bean_id: "B001"
      },
      {
        id: "P011",
        status: "Financiamiento",
        partners_id: ["PAR018", "PAR019"],
        description: "Investigación sobre la adaptación de variedades de frijol a diferentes altitudes para promover el cultivo en diversas regiones.",
        name: "Adaptación a la Altitud",
        bean_id: "B001"
      },
      {
        id: "P012",
        status: "Monitoreo",
        partners_id: ["PAR020", "PAR021"],
        description: "Estudio de la influencia de la luz artificial en el crecimiento y rendimiento de los frijoles en invernaderos.",
        name: "Iluminación en Invernaderos",
        bean_id: "B003"
      },
      {
        id: "P013",
        status: "Archivado",
        partners_id: ["PAR022", "PAR023"],
        description: "Desarrollo de técnicas de cosecha mecanizada para aumentar la eficiencia en la recolección de frijoles.",
        name: "Cosecha Mecanizada",
        bean_id: "B004"
      },
      {
        id: "P014",
        status: "Planificación",
        partners_id: ["PAR024", "PAR025"],
        description: "Investigación sobre la mejora genética de los frijoles para incrementar su resistencia a condiciones adversas del suelo.",
        name: "Mejora Genética",
        bean_id: "B005"
      }
]

export const partners = [  {
    type: "JURIDICA",
    name: "AgroIndustrias S.A."
  },
  {
    type: "NATURAL",
    name: "Juan Pérez Agricultor"
  },
  {
    type: "JURIDICA",
    name: "Fundación para la Investigación Agrícola"
  },
  {
    type: "JURIDICA",
    name: "Banco Agrario Internacional"
  },
  {
    type: "NATURAL",
    name: "María Rodríguez Empresaria"
  },
  {
    type: "JURIDICA",
    name: "Cooperativa de Agricultores Unidos"
  },
  {
    type: "NATURAL",
    name: "Carlos Gómez Inversionista"
  },
  {
    type: "JURIDICA",
    name: "Instituto de Desarrollo Rural"
  },
  {
    type: "NATURAL",
    name: "Elena Vargas Financiera"
  },
  {
    type: "JURIDICA",
    name: "Fondo Nacional de Agricultura Sostenible"
  },
  {
    type: "JURIDICA",
    name: "Compañía Agroquímica Innovadora"
  },
  {
    type: "NATURAL",
    name: "Pedro Navarro Inversionista"
  },
  {
    type: "NATURAL",
    name: "Ana López Agricultora"
  },
  {
    type: "JURIDICA",
    name: "Asociación de Empresas Agroalimentarias"
  },
  {
    type: "JURIDICA",
    name: "Fundación para la Investigación Ambiental"
  }]

export const beans = [    {
    id: "1",
    name: "Frijol Negro",
    scientificName: "Phaseolus vulgaris",
    originRegion: "América Latina",
},
{
    id: "2",
    name: "Frijol Pinto",
    scientificName: "Phaseolus vulgaris",
    originRegion: "América Latina",
},
{
    id: "3",
    name: "Frijol Rojo",
    scientificName: "Phaseolus vulgaris",
    originRegion: "América Latina",
},
{
    id: "4",
    name: "Frijol Adzuki",
    scientificName: "Vigna angularis",
    originRegion: "Asia",
},
{
    id: "5",
    name: "Frijol Cannellini",
    scientificName: "Phaseolus vulgaris",
    originRegion: "Italia",
},
{
    id: "6",
    name: "Frijol Lima",
    scientificName: "Phaseolus lunatus",
    originRegion: "América Latina",
},
{
    id: "7",
    name: "Frijol Mungo",
    scientificName: "Vigna radiata",
    originRegion: "Asia",
},
{
    id: "8",
    name: "Frijol Garbanzo",
    scientificName: "Cicer arietinum",
    originRegion: "Oriente Medio",
},
{
    id: "9",
    name: "Frijol Azuki",
    scientificName: "Vigna angularis",
    originRegion: "Asia",
},
{
    id: "10",
    name: "Frijol Canario",
    scientificName: "Phaseolus vulgaris",
    originRegion: "América Latina",
},]