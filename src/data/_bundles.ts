import type { Bundle } from "./_types";

const BUNDLES: Bundle[] = [
  {
    id: "Spring_Foraging_Bundle",
    name: {
      en: "Spring Foraging Bundle",
      es: "Lote Recolección Primaveral",
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Green.png",
    required: 4,
    items: [
      {
        id: "Wild_Horseradish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Foraging",
          es: "Recolección Primavera",
        },
      },
      {
        id: "Daffodil",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Foraging, buy from Pierre at Flower Dance",
          es: "Recolección en Primavera, adquirido de Pierre durante la Danza floral",
        },
      },
      {
        id: "Leek",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Foraging",
          es: "Recolección en Primavera",
        },
      },
      {
        id: "Dandelion",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Foraging, buy from Pierre at Flower Dance",
          es: "Recolección en Primavera, adquirido de Pierre durante la Danza floral",
        },
      },
    ],
    reward: {
      id: "Spring_Seeds",
      quantity: 30,
      quality: "normal",
    },
  },
  {
    id: "Summer_Foraging_Bundle",
    name: {
      en: "Summer Foraging Bundle",
      es: "Lote Recolección Veraniega",
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Yellow.png",
    required: 3,
    items: [
      {
        id: "Grape",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Foraging, Fall Farming",
          es: "Recolección en Verano, Cultivo de Otoño",
        },
      },
      {
        id: "Spice_Berry",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Foraging, The Cave (fruit bat option)",
          es: "Recolección en Verano, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
      {
        id: "Sweet_Pea",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Foraging",
          es: "Recolección en Verano",
        },
      },
    ],
    reward: {
      id: "Summer_Seeds",
      quantity: 30,
      quality: "normal",
    },
  },
  {
    id: "Fall_Foraging_Bundle",
    name: {
      en: "Fall Foraging Bundle",
      es: "Lote Recolección Otoñal",
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Orange.png",
    required: 4,
    items: [
      {
        id: "Common_Mushroom",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Foraging, Spring & Fall Foraging in the Secret Woods, The Cave (mushroom option), Tapper a Mushroom Tree",
          es: "Recolección en Otoño, Recolección en Primavera y Otoño en el Bosque Secreto, La Cueva de Granja (Opción de Setas), Resinera en un Árbol seta",
        },
      },
      {
        id: "Wild_Plum",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Foraging, The Cave (fruit bat option)",
          es: "Recolección en Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
      {
        id: "Hazelnut",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Foraging",
          es: "Recolección en Otoño",
        },
      },
      {
        id: "Blackberry",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Foraging, The Cave (fruit bat option)",
          es: "Recolección en Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
    ],
    reward: {
      id: "Fall_Seeds",
      quantity: 30,
      quality: "normal",
    },
  },
  {
    id: "Winter_Foraging_Bundle",
    name: {
      en: "Winter Foraging Bundle",
      es: "Lote Recolección Invernal",
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Teal.png",
    required: 4,
    items: [
      {
        id: "Winter_Root",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Hoes soil or Artifact Spot in Winter, dropped by Blue Slimes on floors 41-79 of The Mines",
          es: "Arando tierra o Lugares de Artefactos en Invierno, botín de Babas Azules en los pisos 41-79 de Las minas",
        },
      },
      {
        id: "Crystal_Fruit",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Winter Foraging, dropped by Dust Sprite on floors 41-79 of The Mines",
          es: "Recolección en Invierno, botín de Duendes del polvo en los pisos 41-79 de Las minas",
        },
      },
      {
        id: "Snow_Yam",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Hoes soil or Artifact Spot in Winter",
          es: "Arando tierra o Lugares de Artefactos en Invierno",
        },
      },
      {
        id: "Crocus",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Winter Foraging",
          es: "Recolección en Invierno",
        },
      },
    ],
    reward: {
      id: "Winter_Seeds",
      quantity: 30,
      quality: "normal",
    },
  },
  {
    id: "Construction_Bundle",
    name: {
      en: "Construction Bundle",
      es: "Lote Construcción",
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Red.png",
    required: 4,
    items: [
      {
        id: "Wood",
        quantity: 99,
        quality: "normal",
        source: {
          en: "Chopping Trees or branches with an Axes, Carpenter's Shop",
          es: "Talando Árboles o ramas con un Hacha, Carpintería",
        },
      },
      {
        id: "Wood",
        quantity: 99,
        quality: "normal",
        source: {
          en: "Chopping Trees or branches with an Axes, Carpenter's Shop",
          es: "Talando Árboles o ramas con un Hacha, Carpintería",
        },
      },
      {
        id: "Stone",
        quantity: 99,
        quality: "normal",
        source: {
          en: "Smashing stones with a Pickaxes, Carpenter's Shop",
          es: "Picando rocas con un Pico, Carpintería",
        },
      },
      {
        id: "Hardwood",
        quantity: 10,
        quality: "normal",
        source: {
          en: "Chopping Large Stump or Large Log with an upgraded Axes, smashing crates in The Mines, chopping Mahogany Tree",
          es: "Talando Tocones grandes o Troncos grandes con un Hacha mejorada, rompiendo cajas en Las Minas",
        },
      },
    ],
    reward: {
      id: "Charcoal_Kiln",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Exotic_Foraging_Bundle",
    name: {
      en: "Exotic Foraging Bundle",
      es: "Lote Recolección exótica",
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Purple.png",
    required: 5,
    items: [
      {
        id: "Coconut",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Desert Foraging, Oasis, shaking a Palm Tree in The Desert and on Ginger Island",
          es: "Recolección en El Desierto, Oasis",
        },
      },
      {
        id: "Cactus_Fruit",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Desert Foraging, Oasis",
          es: "Recolección en El Desierto, Oasis",
        },
      },
      {
        id: "Cave_Carrot",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Mines, either smashing boxes or Hoes soil",
          es: "Las Minas, ya sea rompiendo cajas o arando tierra blanda",
        },
      },
      {
        id: "Red_Mushroom",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Cave (mushroom option), Tapper a Mushroom Tree, Farm Maps in Fall.",
          es: "Recolección en Las minas, Recolección en Verano u Otoño en el Bosque Secreto, La Cueva de Granja (Opción de Setas), Resinera en un Árbol seta, Granja Forestal en Otoño",
        },
      },
      {
        id: "Purple_Mushroom",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Mines, The Cave (mushroom option), Farm Maps Foraging in Fall",
          es: "Las Minas, La Cueva de Granja (Opción de Setas), Recolectando en la Granja Forestal en Otoño",
        },
      },
      {
        id: "Maple_Syrup",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Tapper Maple Tree",
          es: "Resinera en un Arce",
        },
      },
      {
        id: "Oak_Resin",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Tapper Oak Tree, Haunted Skull",
          es: "Resinera en un Roble",
        },
      },
      {
        id: "Pine_Tar",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Tapper Pine Tree",
          es: "Resinera en un Pino",
        },
      },
      {
        id: "Morel",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Foraging in the Secret Woods or Farm Maps in Spring, The Cave (mushroom option)",
          es: "Recolección en el Bosque secreto o la Granja Forestal en Primavera, La Cueva de Granja (Opción de Setas)",
        },
      },
    ],
    reward: {
      id: "Autumn's_Bounty",
      quantity: 5,
      quality: "normal",
    },
  },
  {
    id: "Spring_Crops_Bundle",
    name: {
      en: "Spring Crops Bundle",
      es: "Lote Cultivos de Primavera",
    },
    location: "Pantry",
    icon: "/img/Bundle_Green.png",
    required: 4,
    items: [
      {
        id: "Parsnip",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Crops",
          es: "Cultivo de Primavera",
        },
      },
      {
        id: "Green_Bean",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Crops",
          es: "Cultivo de Primavera",
        },
      },
      {
        id: "Cauliflower",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Crops",
          es: "Cultivo de Primavera",
        },
      },
      {
        id: "Potato",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Crops",
          es: "Cultivo de Primavera",
        },
      },
    ],
    reward: {
      id: "Speed_Gro",
      quantity: 20,
      quality: "normal",
    },
  },
  {
    id: "Summer_Crops_Bundle",
    name: {
      en: "Summer Crops Bundle",
      es: "Lote Cultivos de Verano",
    },
    location: "Pantry",
    icon: "/img/Bundle_Yellow.png",
    required: 4,
    items: [
      {
        id: "Tomato",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
          es: "Cultivo de Verano",
        },
      },
      {
        id: "Hot_Pepper",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
          es: "Cultivo de Verano",
        },
      },
      {
        id: "Blueberry",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
          es: "Cultivo de Verano",
        },
      },
      {
        id: "Melon",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
          es: "Cultivo de Verano",
        },
      },
    ],
    reward: {
      id: "Quality_Sprinkler",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Fall_Crops_Bundle",
    name: {
      en: "Fall Crops Bundle",
      es: "Lote Cultivos de Otoño",
    },
    location: "Pantry",
    icon: "/img/Bundle_Orange.png",
    required: 4,
    items: [
      {
        id: "Corn",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer / Fall Crops",
          es: "Cultivo de Verano/Otoño",
        },
      },
      {
        id: "Eggplant",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Crops",
          es: "Cultivo de Otoño",
        },
      },
      {
        id: "Pumpkin",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Crops",
          es: "Cultivo de Otoño",
        },
      },
      {
        id: "Yam",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Crops, dropped by Duggy on floors 6-29 of The Mines (3%)",
          es: "Cultivo de Otoño, botín de Cavadorín en los pisos 6-29 de Las Minas (3%)",
        },
      },
    ],
    reward: {
      id: "Bee_House",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Quality_Crops_Bundle",
    name: {
      en: "Quality Crops Bundle",
      es: "Lote Cultivos de Calidad",
    },
    location: "Pantry",
    icon: "/img/Bundle_Teal.png",
    required: 3,
    items: [
      {
        id: "Parsnip",
        quantity: 1,
        quality: "gold",
        source: {
          en: "Gold quality Spring Crops",
          es: "Cultivo dorado de Primavera",
        },
      },
      {
        id: "Melon",
        quantity: 1,
        quality: "gold",
        source: {
          en: "Gold quality Summer Crops",
          es: "Cultivo dorado de Verano",
        },
      },
      {
        id: "Pumpkin",
        quantity: 1,
        quality: "gold",
        source: {
          en: "Gold quality Fall Crops",
          es: "Cultivo dorado de Otoño",
        },
      },
      {
        id: "Corn",
        quantity: 1,
        quality: "gold",
        source: {
          en: "Gold quality Summer / Fall Crops",
          es: "Cultivo dorado de Verano / Otoño",
        },
      },
    ],
    reward: {
      id: "Preserves_Jar",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Animal_Bundle",
    name: {
      en: "Animal Bundle",
      es: "Lote Origen Animal",
    },
    location: "Pantry",
    icon: "/img/Bundle_Red.png",
    required: 5,
    items: [
      {
        id: "Large_Milk",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cow",
          es: "Vacas",
        },
      },
      {
        id: "Large_Egg",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Brown Chicken",
          es: "Gallina marrón",
        },
        kind: "Brown",
      },
      {
        id: "Large_Egg",
        quantity: 1,
        quality: "normal",
        source: {
          en: "White Chicken",
          es: "Gallina blanca",
        },
      },
      {
        id: "Large_Goat_Milk",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Goat",
          es: "Cabras",
        },
      },
      {
        id: "Wool",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Sheep, Rabbit",
          es: "Oveja, Conejos",
        },
      },
      {
        id: "Duck_Egg",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Duck",
          es: "Patos",
        },
      },
    ],
    reward: {
      id: "Cheese_Press",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Artisan_Bundle",
    name: {
      en: "Artisan Bundle",
      es: "Lote Origen Artesanal",
    },
    location: "Pantry",
    icon: "/img/Bundle_Purple.png",
    required: 6,
    items: [
      {
        id: "Truffle_Oil",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Made from Truffle using an Oil Maker",
          es: "Hecho de Trufas en una Aceitera",
        },
      },
      {
        id: "Cloth",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Loom, Recycling Machine a Soggy Newspaper, Desert Trader, dropped by Mummy in Skull Cavern",
          es: "Telar, recli de un Periódico empapado en una Máquina recicladora, Comerciante del desierto, botín de Momias en la Caverna Calavera",
        },
      },
      {
        id: "Goat_Cheese",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cheese Press",
          es: "Hecho de Leche de cabra en una Prensa de queso",
        },
      },
      {
        id: "Cheese",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cheese Press, Desert Trader",
          es: "Hecho de Leche en una Prensa de queso, Comerciante del desierto",
        },
      },
      {
        id: "Honey",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Bee House, Oasis",
          es: "Colmena, Oasis",
        },
      },
      {
        id: "Jelly",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Preserves Jar",
          es: "Hecha de Frutas en una Envasadora",
        },
      },
      {
        id: "Apple",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Apple Tree during Fall, The Cave (fruit bat option)",
          es: "Manzano durante Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
      {
        id: "Apricot",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Apricot Tree during Spring, The Cave (fruit bat option)",
          es: "Albaricoquero durante Primavera, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
      {
        id: "Orange",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Orange Tree during Summer, The Cave (fruit bat option)",
          es: "Naranjo durante Verano, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
      {
        id: "Peach",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Peach Tree during Summer, The Cave (fruit bat option)",
          es: "Melocotonero durante Verano, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
      {
        id: "Pomegranate",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Pomegranate Tree during Fall, The Cave (fruit bat option)",
          es: "Granado durante Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
      {
        id: "Cherry",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cherry Tree during Spring, The Cave (fruit bat option)",
          es: "Cerezo durante Primavera, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
    ],
    reward: {
      id: "Keg",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "River_Fish_Bundle",
    name: {
      en: "River Fish Bundle",
      es: "Lote Peces Fluviales",
    },
    location: "Fish_Tank",
    help: {
      en: "All River Fish can be found in the Farm Maps, Farm Maps, or Farm Maps.",
      es: "Todos los peces de río se pueden encontrar en la Granja Fluvial, la Granja Minera o la Granja Forestal.",
    },
    icon: "/img/Bundle_Teal.png",
    required: 4,
    items: [
      {
        id: "Sunfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, 6am - 7pm, Spring and Summer during sunny weather.",
          es: "Se encuentra en Ríos, 6:00 AM - 7:00 PM, Primavera, y Verano durante clima soleado",
        },
      },
      {
        id: "Catfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers and Secret Woods, 6am - midnight, Spring and Fall. Only when raining.Can be found in Summer during rain in the Secret Woods and Witch's Swamp, Winter with a Rain Totem.",
          es: "Se encuentra en Ríos y Bosque Secreto, 6:00 AM hasta la media noche, Primavera y Otoño. Solo cuando llueve. Puede ser encontrado en Verano mientras llueve en el Bosque Secreto y el Pantano de la Bruja, Invierno con un Tótem de lluvia.",
        },
      },
      {
        id: "Shad",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, 9am - 2am, Spring, Summer, and Fall. Only when raining.",
          es: "Se encuentra en Ríos, 9:00 AM hasta las 2:00 AM, Primavera, Verano y Otoño. Sólo cuando llueve.",
        },
      },
      {
        id: "Tiger_Trout",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, 6am - 7pm, Fall and Winter. Can be found in any Weather.",
          es: "Se encuentra en Ríos, 6:00 AM – 7:00 PM, Otoño e Invierno. Puede pescarse en cualquier clima.",
        },
      },
    ],
    reward: {
      id: "Deluxe_Bait",
      quantity: 30,
      quality: "normal",
    },
  },
  {
    id: "Lake_Fish_Bundle",
    name: {
      en: "Lake Fish Bundle",
      es: "Lote Peces de Lago",
    },
    location: "Fish_Tank",
    help: {
      en: "All Mountain Lake Fish can be found in any Weather, and in the Farm Maps.",
      es: "Todos los peces de los Lagos de Montaña se pueden encontrar en cualquier clima, y en la Granja Salvaje.",
    },
    icon: "/img/Bundle_Green.png",
    required: 4,
    items: [
      {
        id: "Largemouth_Bass",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Mountain Lake, 6am - 7pm, All Seasons.",
          es: "Se encuentra en el Lago de la Montaña, 6:00 AM – 7:00 PM, Todas las estaciones.",
        },
      },
      {
        id: "Carp",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Mountain Lake, Anytime, during Spring, Summer, or Fall.Found in Secret Woods or The Sewers, Anytime, All Seasons.",
          es: "Se encuentra en el Lago de la Montaña, A cualquier hora, durante Primavera, Verano y Otoño. Se puede pescar en el Bosque Secreto o Las Cloacas, a cualquier hora, en cualquier estación.",
        },
      },
      {
        id: "Bullhead",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Mountain Lake, Anytime, All Seasons.",
          es: "Se encuentra en el Lago de la Montaña. A cualquier hora. Todas las estaciones",
        },
      },
      {
        id: "Sturgeon",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Mountain Lake, 6am - 7pm, Summer and Winter.",
          es: "Se encuentra en el Lago de la Montaña, 6:00 AM – 7:00 PM, Verano e Invierno",
        },
      },
    ],
    reward: {
      id: "Dressed_Spinner",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Ocean_Fish_Bundle",
    name: {
      en: "Ocean Fish Bundle",
      es: "Lote Peces Marinos",
    },
    location: "Fish_Tank",
    icon: "/img/Bundle_Blue.png",
    required: 4,
    items: [
      {
        id: "Sardine",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 6am - 7pm, Spring, Fall, and Winter.",
          es: "Se encuentra en el océano, 6:00 AM - 7:00 PM, Primavera, Otoño e Invierno",
        },
      },
      {
        id: "Tuna",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 6am - 7pm, Summer and Winter.",
          es: "Se encuentra en el océano, 6:00 AM - 7:00 PM, Verano e Invierno",
        },
      },
      {
        id: "Red_Snapper",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 6am - 7pm, Summer and Fall. Only when raining.",
          es: "Se encuentra en el océano, 6:00 AM - 7:00 PM, Verano y Otoño. Sólo cuando llueve",
        },
      },
      {
        id: "Tilapia",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 6am - 2pm, Summer and Fall.",
          es: "Se encuentra en el océano, 6:00 AM - 2:00 PM, Verano y Otoño",
        },
      },
    ],
    reward: {
      id: "Warp_Totem_Beach",
      quantity: 5,
      quality: "normal",
    },
  },
  {
    id: "Night_Fishing_Bundle",
    name: {
      en: "Night Fishing Bundle",
      es: "Lote Peces Nocturnos",
    },
    location: "Fish_Tank",
    icon: "/img/Bundle_Purple.png",
    required: 3,
    items: [
      {
        id: "Walleye",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, the Mountain Lake, and Cindersap Forest Pond, 12pm - 2am, Fall ( Winter with Rain Totem.) Only when raining.",
          es: "Se encuentra en el Río, el Lago de la Montaña, y el estanque del Bosque Tizón, 12:00 PM - 2:00 AM, Otoño, (Invierno con Tótem de lluvia.) Sólo cuando llueve.",
        },
      },
      {
        id: "Bream",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, 6pm - 2am, All Seasons.",
          es: "Se encuentra en Ríos, 6:00 PM - 2:00 AM. Todas las estaciones.",
        },
      },
      {
        id: "Eel",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 4pm - 2am, Spring or Fall. Only when raining.",
          es: "Se encuentra en el océano, 4:00 PM – 2:00 AM, Primavera y Otoño. Sólo cuando llueve.",
        },
      },
    ],
    reward: {
      id: "Glow_Ring",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Crab_Pot_Bundle",
    name: {
      en: "Crab Pot Bundle",
      es: "Lote Trampa para Cangrejos",
    },
    location: "Fish_Tank",
    icon: "/img/Bundle_Purple.png",
    required: 5,
    items: [
      {
        id: "Lobster",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean)",
          es: "Capturado en una Trampa para cangrejos (Océano)",
        },
      },
      {
        id: "Crayfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (freshwater)",
          es: "Capturado en una Trampa para cangrejos (Agua dulce)",
        },
      },
      {
        id: "Crab",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), drops from Rock Crab or Lava Crab in The Mines",
          es: "Capturado en una Trampa para cangrejos (Océano), botín de Cangrejos de roca o Cangrejos de lava en Las minas",
        },
      },
      {
        id: "Cockle",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), The Beach Foraging",
          es: "Capturado en una Trampa para cangrejos (Océano), Recolección en La Playa",
        },
      },
      {
        id: "Mussel",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), The Beach Foraging",
          es: "Capturado en una Trampa para cangrejos (Océano), Recolección en La Playa",
        },
      },
      {
        id: "Shrimp",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean)",
          es: "Capturada en una Trampa para cangrejos (Océano)",
        },
      },
      {
        id: "Snail",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (freshwater)",
          es: "Capturado en una Trampa para cangrejos (Agua dulce)",
        },
      },
      {
        id: "Periwinkle",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (freshwater)",
          es: "Capturado en una Trampa para cangrejos (Agua dulce)",
        },
      },
      {
        id: "Oyster",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), The Beach Foraging",
          es: "Capturada en una Trampa para cangrejos (Océano), Recolección en La Playa",
        },
      },
      {
        id: "Clam",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), The Beach Foraging",
          es: "Capturada en una Trampa para cangrejos (Océano), Recolección en La Playa",
        },
      },
    ],
    reward: {
      id: "Crab_Pot",
      quantity: 3,
      quality: "normal",
    },
  },
  {
    id: "Specialty_Fish_Bundle",
    name: {
      en: "Specialty Fish Bundle",
      es: "Lote Peces Especiales",
    },
    location: "Fish_Tank",
    icon: "/img/Bundle_Red.png",
    required: 4,
    items: [
      {
        id: "Pufferfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 12pm - 4pm, Summer during sunny weather.",
          es: "Se encuentra en el Océano, 12:00 PM – 4:00 PM, Verano durante un día soleado.",
        },
      },
      {
        id: "Ghostfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in ponds in The Mines floors 20 and 60, Anytime, All Seasons. May also be dropped by Ghost.",
          es: "Se encuentra en los estanques de Las minas, piso 20 y 60, A cualquier hora, Todas las estaciones. También es botín de Fantasmas.",
        },
      },
      {
        id: "Sandfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the pond in The Desert, 6am - 8pm, All Seasons.",
          es: "Se encuentra en el estanque del Desierto de Calico, 6:00 AM - 10:00 PM, Todas las estaciones.",
        },
      },
      {
        id: "Woodskip",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Secret Woods and the Farm Maps, Anytime, All Seasons.",
          es: "Se encuentra en el Bosque Secreto y la Granja Forestal, A cualquier hora, Todas las estaciones.",
        },
      },
    ],
    reward: {
      id: "Dish_O'_The_Sea",
      quantity: 5,
      quality: "normal",
    },
  },
  {
    id: "Blacksmiths_Bundle",
    name: {
      en: "Blacksmith's Bundle",
      es: "Lote Herrero",
    },
    location: "Boiler_Room",
    icon: "/img/Bundle_Orange.png",
    required: 3,
    items: [
      {
        id: "Copper_Bar",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Smelting Copper Ore in the Furnace",
          es: "Fundiendo Menas de cobre en un Horno",
        },
      },
      {
        id: "Iron_Bar",
        quantity: 1,
        quality: "normal",
        source: {
          en: 'Smelting Iron Ore in the Furnace, Crafting the "Transmute (Fe)" recipe',
          es: 'Fundiendo Menas de hierro en un Horno, Fabricándolo con la receta "Transmutar (Fe)"',
        },
      },
      {
        id: "Gold_Bar",
        quantity: 1,
        quality: "normal",
        source: {
          en: 'Smelting Gold Ore in the Furnace, Crafting the "Transmute (Au)" recipe',
          es: 'Fundiendo Menas de oro en un Horno, Fabricándolo con la receta "Transmutar (Au)"',
        },
      },
    ],
    reward: {
      id: "Furnace",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Geologists_Bundle",
    name: {
      en: "Geologist's Bundle",
      es: "Lote Geólogo",
    },
    location: "Boiler_Room",
    icon: "/img/Bundle_Purple.png",
    required: 4,
    items: [
      {
        id: "Quartz",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Minerals on all floors of The Mines",
          es: "Recolectándolo en cualquier piso de Las minas.",
        },
      },
      {
        id: "Earth_Crystal",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Minerals on floors 1-39 of The Mines, Geode, Omni Geode, drop from Duggy in the Mines (floors 6-29)",
          es: "Recolectándolo en los pisos 1-39 de Las minas, Geodas, botín de Cavadorines en Las minas. (Pisos 6-29)",
        },
      },
      {
        id: "Frozen_Tear",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Minerals on floors 41-79 of The Mines, Frozen Geode, Omni Geode, drop from Dust Sprite in the Mines (floors 41-79)",
          es: "Reconlectándola en los pisos 41-79 de Las minas, Geodas de hielo, Omnigeodas, botín de Duendes del polvo en Las minas. (Pisos 41-79)",
        },
      },
      {
        id: "Fire_Quartz",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Minerals on floors 81-119 of The Mines, Magma Geode, Omni Geode",
          es: "Recolectándolo en los pisos 81-119 de Las minas, Geodas de magma, Omnigeodas.",
        },
      },
    ],
    reward: {
      id: "Omni_Geode",
      quantity: 5,
      quality: "normal",
    },
  },
  {
    id: "Adventurers_Bundle",
    name: {
      en: "Adventurer's Bundle",
      es: "Lote Aventurero",
    },
    location: "Boiler_Room",
    icon: "/img/Bundle_Purple.png",
    required: 2,
    items: [
      {
        id: "Slime",
        quantity: 99,
        quality: "normal",
        source: {
          en: "Dropped by Slimes",
          es: "Botín de Babas.",
        },
      },
      {
        id: "Bat_Wing",
        quantity: 10,
        quality: "normal",
        source: {
          en: "Dropped by Bats in The Mines or the Skull Cavern",
          es: "Botín de Murciélagos en Las minas o la Caverna Calavera.",
        },
      },
      {
        id: "Solar_Essence",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Dropped by Ghost, Squid Kid, or Metal Head in The Mines, dropped by Mummy or Bats in the Skull Cavern ; produced by Sunfish in Fish Pond ; buy from Krobus",
          es: "Botín de Fantasmas, Niños calamar o Cabezas de metal en Las minas, botín de Momias o Murciélagos de iridio en la Caverna Calavera; producido por Pez sol en el Estanque de peces; comprando a Krobus.",
        },
      },
      {
        id: "Void_Essence",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Dropped by Shadow Brute or Shadow Shaman in The Mines or Serpent in the Skull Cavern ; produced by Void Salmon in Fish Pond ; buy from Krobus",
          es: "Botín de Bestias de las sombras o Chamanes de las sombras en Las minas o Serpientes en la Caverna Calavera; producido por Salmón de vacío en el Estanque de peces; comprando a Krobus.",
        },
      },
    ],
    reward: {
      id: "Small_Magnet_Ring",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Chefs_Bundle",
    name: {
      en: "Chef's Bundle",
      es: "Lote Chef",
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Red.png",
    required: 6,
    items: [
      {
        id: "Maple_Syrup",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Tapper Maple Tree",
          es: "Resinera en un Arce.",
        },
      },
      {
        id: "Fiddlehead_Fern",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Foraging in the Secret Woods, Foraging on Prehistoric Floors at the Skull Cavern, Cutting down Green Rain Trees",
          es: "Recolección en el Bosque secreto en Verano, Recolectando en pisos prehistóricos en la Caverna Calavera.",
        },
      },
      {
        id: "Truffle",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Pig",
          es: "Cerdos.",
        },
      },
      {
        id: "Poppy",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
          es: "Cultivo de Verano.",
        },
      },
      {
        id: "Maki_Roll",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cooking (recipe sources: The Queen of Sauce, The Stardrop Saloon )",
          es: "Cocina (Receta: La reina de la salsa (21 de Verano, Año 1), Salón Fruta Estelar)",
        },
      },
      {
        id: "Fried_Egg",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cooking",
          es: "Cocina",
        },
      },
    ],
    reward: {
      id: "Pink_Cake",
      quantity: 3,
      quality: "normal",
    },
  },
  {
    id: "Dye_Bundle",
    name: {
      en: "Dye Bundle",
      es: "Lote Tinte",
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Teal.png",
    required: 6,
    items: [
      {
        id: "Red_Mushroom",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Cave (mushroom option), Tapper a Mushroom Tree",
          es: "Recolección en Las minas, Recolección en el Bosque secreto en Verano y Otoño, La Cueva de Granja (Opción de Setas), Resinera sobre Árbol seta.",
        },
      },
      {
        id: "Sea_Urchin",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Beach Foraging, after using 300 Wood to fix the bridge to the right side of The Beach or any side of the beach during The Beach ; foraging in the Beach Farm",
          es: "Recolección en La Playa tras usar 300 de madera para arreglar el puente a la derecha de La playa o cualquier lado de la playa durante la temporada de apareamiento del cangrejo; Recolección en la Granja de la playa.",
        },
      },
      {
        id: "Sunflower",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer / Fall Crops",
          es: "Cultivo de Verano/Otoño.",
        },
      },
      {
        id: "Duck_Feather",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Duck",
          es: "Patos",
        },
      },
      {
        id: "Aquamarine",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Mining, boxes in The Mines, Fishing",
          es: "Minería, cajas de Las minas, Pescando cofres del tesoro.",
        },
      },
      {
        id: "Red_Cabbage",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops ( Red Cabbage Seeds are available at Pierre's General Store in year 2+, at the Traveling Cart, or dropped by Serpent, Mummy, and Slimes )",
          es: "Cultivo de Verano (Las Semillas de lombarda están disponibles en la Tienda local Pierre's a partir del año 2, en el Carro Ambulante, o botín de Serpientes, Momias, y Babas púrpuras)",
        },
      },
    ],
    reward: {
      id: "Seed_Maker",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Field_Research_Bundle",
    name: {
      en: "Field Research Bundle",
      es: "Lote Estudio de Campo",
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Blue.png",
    required: 4,
    items: [
      {
        id: "Purple_Mushroom",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Mines, The Cave (mushroom option), Farm Maps Foraging in Fall",
          es: "Recolección en Las minas, La Cueva de Granja (Opción de Setas), Recolección en la Granja Forestal en Otoño",
        },
      },
      {
        id: "Nautilus_Shell",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Winter The Beach Foraging, Farm Maps Foraging during any season, Random gift from Demetrius",
          es: "Recolección en La Playa en Invierno, Recolección en la Granja de la Playa en cualquier estación. Regalo aleatorio de Demetrius (Nota: No confundir con Fósil de nautilo)",
        },
      },
      {
        id: "Chub",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Can be found in the mountain lake and river during all seasons, any time.",
          es: "Se encuentra en Lago de la Montaña y los Ríos en todas las estaciones.",
        },
      },
      {
        id: "Frozen_Geode",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Mines floors 41-79",
          es: "Las minas (Pisos 41-79)",
        },
      },
    ],
    reward: {
      id: "Recycling_Machine",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Fodder_Bundle",
    name: {
      en: "Fodder Bundle",
      es: "Lote Pienso",
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Yellow.png",
    required: 3,
    items: [
      {
        id: "Wheat",
        quantity: 10,
        quality: "normal",
        source: {
          en: "Summer / Fall Crops",
          es: "Cosechándolo en Verano / Otoño",
        },
      },
      {
        id: "Hay",
        quantity: 10,
        quality: "normal",
        source: {
          en: "Purchase at Marnie's Ranch or Desert Trader, or harvest from Grass or Wheat.",
          es: "Comprándolo en el Rancho de Marnie o del Comerciante del desierto, cortando Hierba o Trigo con la Guadaña teniendo un Silo",
        },
      },
      {
        id: "Apple",
        quantity: 3,
        quality: "normal",
        source: {
          en: "Apple Tree during Fall, The Cave (fruit bat option)",
          es: "Manzano en Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
    ],
    reward: {
      id: "Heater",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "Enchanters_Bundle",
    name: {
      en: "Enchanter's Bundle",
      es: "Lote Encantador",
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Purple.png",
    required: 4,
    items: [
      {
        id: "Oak_Resin",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Tapper Oak Tree",
          es: "Resinera en un Roble",
        },
      },
      {
        id: "Wine",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Keg",
          es: "Hecho de Frutas en un Barril",
        },
      },
      {
        id: "Rabbit's_Foot",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Rabbit, Serpent drop in Skull Cavern (0.8%)",
          es: "Conejo, botín de Serpientes en la Caverna Calavera (0.8%)",
        },
      },
      {
        id: "Pomegranate",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Pomegranate Tree during Fall, The Cave (fruit bat option)",
          es: "Granado en Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)",
        },
      },
    ],
    reward: {
      id: "Gold_Bar",
      quantity: 5,
      quality: "normal",
    },
  },
  {
    id: "2500_Bundle",
    name: {
      en: "2,500 Bundle",
      es: "Lote 2,500",
    },
    location: "Vault",
    icon: "/img/Bundle_Red.png",
    required: 1,
    items: [
      {
        id: "Purchase",
        quantity: 2500,
        quality: "normal",
      },
    ],
    reward: {
      id: "Chocolate_Cake",
      quantity: 3,
      quality: "normal",
    },
  },
  {
    id: "5000_Bundle",
    name: {
      en: "5,000 Bundle",
      es: "Lote 5,000",
    },
    location: "Vault",
    icon: "/img/Bundle_Orange.png",
    required: 1,
    items: [
      {
        id: "Purchase",
        quantity: 5000,
        quality: "normal",
      },
    ],
    reward: {
      id: "Quality_Fertilizer",
      quantity: 30,
      quality: "normal",
    },
  },
  {
    id: "10000_Bundle",
    name: {
      en: "10,000 Bundle",
      es: "Lote 10,000",
    },
    location: "Vault",
    icon: "/img/Bundle_Yellow.png",
    required: 1,
    items: [
      {
        id: "Purchase",
        quantity: 10000,
        quality: "normal",
      },
    ],
    reward: {
      id: "Lightning_Rod",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "25000_Bundle",
    name: {
      en: "25,000 Bundle",
      es: "Lote 25,000",
    },
    location: "Vault",
    icon: "/img/Bundle_Purple.png",
    required: 1,
    items: [
      {
        id: "Purchase",
        quantity: 25000,
        quality: "normal",
      },
    ],
    reward: {
      id: "Crystalarium",
      quantity: 1,
      quality: "normal",
    },
  },
  {
    id: "The_Missing_Bundle",
    name: {
      en: "The Missing Bundle",
      es: "Lote Extraviado",
    },
    location: "Abandoned_JojaMart",
    icon: "/img/Bundle_Purple.png",
    required: 5,
    items: [
      {
        id: "Wine",
        quantity: 1,
        quality: ["silver", "gold", "iridium"],
        source: {
          en: "Cask, Ginger Island resort",
          es: "Tonel, El Balneario de la Isla Jengibre",
        },
      },
      {
        id: "Dinosaur_Mayonnaise",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Mayonnaise Machine",
          es: "Mayonesera",
        },
      },
      {
        id: "Prismatic_Shard",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Mining",
          es: "Minería",
        },
      },
      {
        id: "Ancient_Fruit",
        quantity: 1,
        quality: ["gold", "iridium"],
        source: {
          en: "Crops",
          es: "Cultivos",
        },
      },
      {
        id: "Void_Salmon",
        quantity: 1,
        quality: ["gold", "iridium"],
        source: {
          en: "Fishing in the Witch's Swamp",
          es: "Pescando en el Pantano de la Bruja.",
        },
      },
      {
        id: "Caviar",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Preserves Jar product from Sturgeon Roe",
          es: "Envasadora, producto de las huevas del Esturión.",
        },
      },
    ],
  },
];

export default BUNDLES;
