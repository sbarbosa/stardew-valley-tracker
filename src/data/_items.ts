import type { Item, ItemId } from "./_types";

const ITEMS_MAP: Record<ItemId, Item> = {
  "Wild_Horseradish": {
    id: "Wild_Horseradish",
    name: {
      en: "Wild Horseradish",
      es: "Rábano silvestre"
    },
    icon: "/img/36px-Wild_Horseradish.png",
    season: [
      "spring"
    ],
    source: {
      en: "Spring Foraging",
      es: "Recolección Primavera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Spring_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Daffodil": {
    id: "Daffodil",
    name: {
      en: "Daffodil",
      es: "Narciso"
    },
    icon: "/img/36px-Daffodil.png",
    season: [
      "spring"
    ],
    source: {
      en: "Spring Foraging, buy from Pierre at Flower Dance",
      es: "Recolección en Primavera, adquirido de Pierre durante la Danza floral"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Spring_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Leek": {
    id: "Leek",
    name: {
      en: "Leek",
      es: "Puerro"
    },
    icon: "/img/36px-Leek.png",
    season: [
      "spring"
    ],
    source: {
      en: "Spring Foraging",
      es: "Recolección en Primavera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Spring_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Dandelion": {
    id: "Dandelion",
    name: {
      en: "Dandelion",
      es: "Diente de león"
    },
    icon: "/img/36px-Dandelion.png",
    season: [
      "spring"
    ],
    source: {
      en: "Spring Foraging, buy from Pierre at Flower Dance",
      es: "Recolección en Primavera, adquirido de Pierre durante la Danza floral"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Spring_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Spring_Seeds": {
    id: "Spring_Seeds",
    name: {
      en: "Spring Seeds",
      es: "Semillas primaverales"
    },
    icon: "/img/36px-Spring_Seeds.png"
  },
  "Grape": {
    id: "Grape",
    name: {
      en: "Grape",
      es: "Uva"
    },
    icon: "/img/36px-Grape.png",
    season: [
      "summer",
      "fall"
    ],
    source: {
      en: "Summer Foraging, Fall Farming",
      es: "Recolección en Verano, Cultivo de Otoño"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Summer_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Spice_Berry": {
    id: "Spice_Berry",
    name: {
      en: "Spice Berry",
      es: "Baya especiada"
    },
    icon: "/img/36px-Spice_Berry.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Foraging, The Cave (fruit bat option)",
      es: "Recolección en Verano, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Summer_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Sweet_Pea": {
    id: "Sweet_Pea",
    name: {
      en: "Sweet Pea",
      es: "Guisante dulce"
    },
    icon: "/img/36px-Sweet_Pea.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Foraging",
      es: "Recolección en Verano"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Summer_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Summer_Seeds": {
    id: "Summer_Seeds",
    name: {
      en: "Summer Seeds",
      es: "Semillas veraniegas"
    },
    icon: "/img/36px-Summer_Seeds.png"
  },
  "Common_Mushroom": {
    id: "Common_Mushroom",
    name: {
      en: "Common Mushroom",
      es: "Seta común"
    },
    icon: "/img/36px-Common_Mushroom.png",
    season: [
      "fall",
      "spring",
      "fall"
    ],
    source: {
      en: "Fall Foraging, Spring & Fall Foraging in the Secret Woods, The Cave (mushroom option), Tapper a Mushroom Tree",
      es: "Recolección en Otoño, Recolección en Primavera y Otoño en el Bosque Secreto, La Cueva de Granja (Opción de Setas), Resinera en un Árbol seta"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fall_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Wild_Plum": {
    id: "Wild_Plum",
    name: {
      en: "Wild Plum",
      es: "Ciruela salvaje"
    },
    icon: "/img/36px-Wild_Plum.png",
    season: [
      "fall"
    ],
    source: {
      en: "Fall Foraging, The Cave (fruit bat option)",
      es: "Recolección en Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fall_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Hazelnut": {
    id: "Hazelnut",
    name: {
      en: "Hazelnut",
      es: "Avellana"
    },
    icon: "/img/36px-Hazelnut.png",
    season: [
      "fall"
    ],
    source: {
      en: "Fall Foraging",
      es: "Recolección en Otoño"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fall_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Blackberry": {
    id: "Blackberry",
    name: {
      en: "Blackberry",
      es: "Mora"
    },
    icon: "/img/36px-Blackberry.png",
    season: [
      "fall"
    ],
    source: {
      en: "Fall Foraging, The Cave (fruit bat option)",
      es: "Recolección en Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fall_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Fall_Seeds": {
    id: "Fall_Seeds",
    name: {
      en: "Fall Seeds",
      es: "Semillas otoñales"
    },
    icon: "/img/36px-Fall_Seeds.png"
  },
  "Winter_Root": {
    id: "Winter_Root",
    name: {
      en: "Winter Root",
      es: "Raíz invernal"
    },
    icon: "/img/36px-Winter_Root.png",
    season: [
      "winter"
    ],
    source: {
      en: "Hoes soil or Artifact Spot in Winter, dropped by Blue Slimes on floors 41-79 of The Mines",
      es: "Arando tierra o Lugares de Artefactos en Invierno, botín de Babas Azules en los pisos 41-79 de Las minas"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Winter_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Crystal_Fruit": {
    id: "Crystal_Fruit",
    name: {
      en: "Crystal Fruit",
      es: "Fruta de cristal"
    },
    icon: "/img/36px-Crystal_Fruit.png",
    season: [
      "winter"
    ],
    source: {
      en: "Winter Foraging, dropped by Dust Sprite on floors 41-79 of The Mines",
      es: "Recolección en Invierno, botín de Duendes del polvo en los pisos 41-79 de Las minas"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Winter_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Snow_Yam": {
    id: "Snow_Yam",
    name: {
      en: "Snow Yam",
      es: "Ñame nival"
    },
    icon: "/img/36px-Snow_Yam.png",
    season: [
      "winter"
    ],
    source: {
      en: "Hoes soil or Artifact Spot in Winter",
      es: "Arando tierra o Lugares de Artefactos en Invierno"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Winter_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Crocus": {
    id: "Crocus",
    name: {
      en: "Crocus",
      es: "Azafrán"
    },
    icon: "/img/36px-Crocus.png",
    season: [
      "winter"
    ],
    source: {
      en: "Winter Foraging",
      es: "Recolección en Invierno"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Winter_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Winter_Seeds": {
    id: "Winter_Seeds",
    name: {
      en: "Winter Seeds",
      es: "Semillas invernales"
    },
    icon: "/img/36px-Winter_Seeds.png"
  },
  "Wood": {
    id: "Wood",
    name: {
      en: "Wood",
      es: "Madera"
    },
    icon: "/img/36px-Wood.png",
    source: {
      en: "Chopping Trees or branches with an Axes, Carpenter's Shop",
      es: "Talando Árboles o ramas con un Hacha, Carpintería"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Construction_Bundle",
        quantity: 99,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Construction_Bundle",
        quantity: 99,
        quality: "normal"
      }
    ]
  },
  "Stone": {
    id: "Stone",
    name: {
      en: "Stone",
      es: "Piedra"
    },
    icon: "/img/36px-Stone.png",
    source: {
      en: "Smashing stones with a Pickaxes, Carpenter's Shop",
      es: "Picando rocas con un Pico, Carpintería"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Construction_Bundle",
        quantity: 99,
        quality: "normal"
      }
    ]
  },
  "Hardwood": {
    id: "Hardwood",
    name: {
      en: "Hardwood",
      es: "Madera noble"
    },
    icon: "/img/36px-Hardwood.png",
    source: {
      en: "Chopping Large Stump or Large Log with an upgraded Axes, smashing crates in The Mines, chopping Mahogany Tree",
      es: "Talando Tocones grandes o Troncos grandes con un Hacha mejorada, rompiendo cajas en Las Minas"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Construction_Bundle",
        quantity: 10,
        quality: "normal"
      }
    ]
  },
  "Charcoal_Kiln": {
    id: "Charcoal_Kiln",
    name: {
      en: "Charcoal Kiln",
      es: "Horno de carbón"
    },
    icon: "/img/36px-Charcoal_Kiln.png"
  },
  "Coconut": {
    id: "Coconut",
    name: {
      en: "Coconut",
      es: "Coco"
    },
    icon: "/img/36px-Coconut.png",
    source: {
      en: "The Desert Foraging, Oasis, shaking a Palm Tree in The Desert and on Ginger Island",
      es: "Recolección en El Desierto, Oasis"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Cactus_Fruit": {
    id: "Cactus_Fruit",
    name: {
      en: "Cactus Fruit",
      es: "Higo chumbo"
    },
    icon: "/img/36px-Cactus_Fruit.png",
    source: {
      en: "The Desert Foraging, Oasis",
      es: "Recolección en El Desierto, Oasis"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Cave_Carrot": {
    id: "Cave_Carrot",
    name: {
      en: "Cave Carrot",
      es: "Zanahoria cavernaria"
    },
    icon: "/img/36px-Cave_Carrot.png",
    source: {
      en: "The Mines, either smashing boxes or Hoes soil",
      es: "Las Minas, ya sea rompiendo cajas o arando tierra blanda"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Red_Mushroom": {
    id: "Red_Mushroom",
    name: {
      en: "Red Mushroom",
      es: "Seta roja"
    },
    icon: "/img/36px-Red_Mushroom.png",
    season: [
      "summer",
      "fall"
    ],
    source: {
      en: "Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Cave (mushroom option), Tapper a Mushroom Tree, Farm Maps in Fall.",
      es: "Recolección en Las minas, Recolección en Verano u Otoño en el Bosque Secreto, La Cueva de Granja (Opción de Setas), Resinera en un Árbol seta, Granja Forestal en Otoño"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Dye_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Purple_Mushroom": {
    id: "Purple_Mushroom",
    name: {
      en: "Purple Mushroom",
      es: "Seta lila"
    },
    icon: "/img/36px-Purple_Mushroom.png",
    season: [
      "fall"
    ],
    source: {
      en: "The Mines, The Cave (mushroom option), Farm Maps Foraging in Fall",
      es: "Las Minas, La Cueva de Granja (Opción de Setas), Recolectando en la Granja Forestal en Otoño"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Field_Research_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Maple_Syrup": {
    id: "Maple_Syrup",
    name: {
      en: "Maple Syrup",
      es: "Jarabe de arce"
    },
    icon: "/img/36px-Maple_Syrup.png",
    source: {
      en: "Tapper Maple Tree",
      es: "Resinera en un Arce"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Chefs_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Oak_Resin": {
    id: "Oak_Resin",
    name: {
      en: "Oak Resin",
      es: "Resina de roble"
    },
    icon: "/img/36px-Oak_Resin.png",
    source: {
      en: "Tapper Oak Tree, Haunted Skull",
      es: "Resinera en un Roble"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Enchanters_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Pine_Tar": {
    id: "Pine_Tar",
    name: {
      en: "Pine Tar",
      es: "Brea de pino"
    },
    icon: "/img/36px-Pine_Tar.png",
    source: {
      en: "Tapper Pine Tree",
      es: "Resinera en un Pino"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Morel": {
    id: "Morel",
    name: {
      en: "Morel",
      es: "Colmenilla"
    },
    icon: "/img/36px-Morel.png",
    season: [
      "spring"
    ],
    source: {
      en: "Foraging in the Secret Woods or Farm Maps in Spring, The Cave (mushroom option)",
      es: "Recolección en el Bosque secreto o la Granja Forestal en Primavera, La Cueva de Granja (Opción de Setas)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Exotic_Foraging_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Autumn's_Bounty": {
    id: "Autumn's_Bounty",
    name: {
      en: "Autumn's Bounty",
      es: "Botín otoñal"
    },
    icon: "/img/36px-Autumn's_Bounty.png"
  },
  "Parsnip": {
    id: "Parsnip",
    name: {
      en: "Parsnip",
      es: "Chirivía"
    },
    icon: "/img/36px-Parsnip.png",
    season: [
      "spring"
    ],
    source: {
      en: "Spring Crops",
      es: "Cultivo de Primavera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Spring_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Quality_Crops_Bundle",
        quantity: 5,
        quality: "gold"
      }
    ]
  },
  "Green_Bean": {
    id: "Green_Bean",
    name: {
      en: "Green Bean",
      es: "Judía verde"
    },
    icon: "/img/36px-Green_Bean.png",
    season: [
      "spring"
    ],
    source: {
      en: "Spring Crops",
      es: "Cultivo de Primavera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Spring_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Cauliflower": {
    id: "Cauliflower",
    name: {
      en: "Cauliflower",
      es: "Coliflor"
    },
    icon: "/img/36px-Cauliflower.png",
    season: [
      "spring"
    ],
    source: {
      en: "Spring Crops",
      es: "Cultivo de Primavera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Spring_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Potato": {
    id: "Potato",
    name: {
      en: "Potato",
      es: "Patata"
    },
    icon: "/img/36px-Potato.png",
    season: [
      "spring"
    ],
    source: {
      en: "Spring Crops",
      es: "Cultivo de Primavera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Spring_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Speed_Gro": {
    id: "Speed_Gro",
    name: {
      en: "Speed-Gro",
      es: "Acelerador básico"
    },
    icon: "/img/36px-Speed_Gro.png"
  },
  "Tomato": {
    id: "Tomato",
    name: {
      en: "Tomato",
      es: "Tomate"
    },
    icon: "/img/36px-Tomato.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Crops",
      es: "Cultivo de Verano"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Summer_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Hot_Pepper": {
    id: "Hot_Pepper",
    name: {
      en: "Hot Pepper",
      es: "Chile"
    },
    icon: "/img/36px-Hot_Pepper.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Crops",
      es: "Cultivo de Verano"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Summer_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Blueberry": {
    id: "Blueberry",
    name: {
      en: "Blueberry",
      es: "Arándano"
    },
    icon: "/img/36px-Blueberry.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Crops",
      es: "Cultivo de Verano"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Summer_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Melon": {
    id: "Melon",
    name: {
      en: "Melon",
      es: "Melón"
    },
    icon: "/img/36px-Melon.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Crops",
      es: "Cultivo de Verano"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Summer_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Quality_Crops_Bundle",
        quantity: 5,
        quality: "gold"
      }
    ]
  },
  "Quality_Sprinkler": {
    id: "Quality_Sprinkler",
    name: {
      en: "Quality Sprinkler",
      es: "Aspersor de calidad"
    },
    icon: "/img/36px-Quality_Sprinkler.png"
  },
  "Corn": {
    id: "Corn",
    name: {
      en: "Corn",
      es: "Maíz"
    },
    icon: "/img/36px-Corn.png",
    season: [
      "summer",
      "fall"
    ],
    source: {
      en: "Summer / Fall Crops",
      es: "Cultivo de Verano/Otoño"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fall_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Quality_Crops_Bundle",
        quantity: 5,
        quality: "gold"
      }
    ]
  },
  "Eggplant": {
    id: "Eggplant",
    name: {
      en: "Eggplant",
      es: "Berenjena"
    },
    icon: "/img/36px-Eggplant.png",
    season: [
      "fall"
    ],
    source: {
      en: "Fall Crops",
      es: "Cultivo de Otoño"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fall_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Pumpkin": {
    id: "Pumpkin",
    name: {
      en: "Pumpkin",
      es: "Calabaza"
    },
    icon: "/img/36px-Pumpkin.png",
    season: [
      "fall"
    ],
    source: {
      en: "Fall Crops",
      es: "Cultivo de Otoño"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fall_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Quality_Crops_Bundle",
        quantity: 5,
        quality: "gold"
      }
    ]
  },
  "Yam": {
    id: "Yam",
    name: {
      en: "Yam",
      es: "Ñame"
    },
    icon: "/img/36px-Yam.png",
    season: [
      "fall"
    ],
    source: {
      en: "Fall Crops, dropped by Duggy on floors 6-29 of The Mines (3%)",
      es: "Cultivo de Otoño, botín de Cavadorín en los pisos 6-29 de Las Minas (3%)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fall_Crops_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Bee_House": {
    id: "Bee_House",
    name: {
      en: "Bee House",
      es: "Colmena"
    },
    icon: "/img/36px-Bee_House.png"
  },
  "Preserves_Jar": {
    id: "Preserves_Jar",
    name: {
      en: "Preserves Jar",
      es: "Envasadora"
    },
    icon: "/img/36px-Preserves_Jar.png"
  },
  "Large_Milk": {
    id: "Large_Milk",
    name: {
      en: "Large Milk",
      es: "Leche XXL"
    },
    icon: "/img/36px-Large_Milk.png",
    source: {
      en: "Cow",
      es: "Vacas"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Animal_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Large_Egg": {
    id: "Large_Egg",
    name: {
      en: "Large Egg",
      es: "Huevo XXL"
    },
    icon: "/img/36px-Large_Egg.png",
    source: {
      en: "Brown Chicken",
      es: "Gallina marrón"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Animal_Bundle",
        quantity: 1,
        quality: "normal",
        kind: "Brown"
      },
      {
        type: "bundle",
        id: "Animal_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Large_Goat_Milk": {
    id: "Large_Goat_Milk",
    name: {
      en: "Large Goat Milk",
      es: "Leche de cabra XXL"
    },
    icon: "/img/36px-Large_Goat_Milk.png",
    source: {
      en: "Goat",
      es: "Cabras"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Animal_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Wool": {
    id: "Wool",
    name: {
      en: "Wool",
      es: "Lana"
    },
    icon: "/img/36px-Wool.png",
    source: {
      en: "Sheep, Rabbit",
      es: "Oveja, Conejos"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Animal_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Duck_Egg": {
    id: "Duck_Egg",
    name: {
      en: "Duck Egg",
      es: "Huevo de pato"
    },
    icon: "/img/36px-Duck_Egg.png",
    source: {
      en: "Duck",
      es: "Patos"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Animal_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Cheese_Press": {
    id: "Cheese_Press",
    name: {
      en: "Cheese Press",
      es: "Prensa de queso"
    },
    icon: "/img/36px-Cheese_Press.png"
  },
  "Truffle_Oil": {
    id: "Truffle_Oil",
    name: {
      en: "Truffle Oil",
      es: "Aceite de trufa"
    },
    icon: "/img/36px-Truffle_Oil.png",
    source: {
      en: "Made from Truffle using an Oil Maker",
      es: "Hecho de Trufas en una Aceitera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Cloth": {
    id: "Cloth",
    name: {
      en: "Cloth",
      es: "Tela"
    },
    icon: "/img/36px-Cloth.png",
    source: {
      en: "Loom, Recycling Machine a Soggy Newspaper, Desert Trader, dropped by Mummy in Skull Cavern",
      es: "Telar, recli de un Periódico empapado en una Máquina recicladora, Comerciante del desierto, botín de Momias en la Caverna Calavera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Goat_Cheese": {
    id: "Goat_Cheese",
    name: {
      en: "Goat Cheese",
      es: "Queso de cabra"
    },
    icon: "/img/36px-Goat_Cheese.png",
    source: {
      en: "Cheese Press",
      es: "Hecho de Leche de cabra en una Prensa de queso"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Cheese": {
    id: "Cheese",
    name: {
      en: "Cheese",
      es: "Queso"
    },
    icon: "/img/36px-Cheese.png",
    source: {
      en: "Cheese Press, Desert Trader",
      es: "Hecho de Leche en una Prensa de queso, Comerciante del desierto"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Honey": {
    id: "Honey",
    name: {
      en: "Honey",
      es: "Miel"
    },
    icon: "/img/36px-Honey.png",
    source: {
      en: "Bee House, Oasis",
      es: "Colmena, Oasis"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Jelly": {
    id: "Jelly",
    name: {
      en: "Jelly",
      es: "Mermelada"
    },
    icon: "/img/36px-Jelly.png",
    source: {
      en: "Preserves Jar",
      es: "Hecha de Frutas en una Envasadora"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Apple": {
    id: "Apple",
    name: {
      en: "Apple",
      es: "Manzana"
    },
    icon: "/img/36px-Apple.png",
    season: [
      "fall"
    ],
    source: {
      en: "Apple Tree during Fall, The Cave (fruit bat option)",
      es: "Manzano durante Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Fodder_Bundle",
        quantity: 3,
        quality: "normal"
      }
    ]
  },
  "Apricot": {
    id: "Apricot",
    name: {
      en: "Apricot",
      es: "Albaricoque"
    },
    icon: "/img/36px-Apricot.png",
    season: [
      "spring"
    ],
    source: {
      en: "Apricot Tree during Spring, The Cave (fruit bat option)",
      es: "Albaricoquero durante Primavera, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Orange": {
    id: "Orange",
    name: {
      en: "Orange",
      es: "Naranja"
    },
    icon: "/img/36px-Orange.png",
    season: [
      "summer"
    ],
    source: {
      en: "Orange Tree during Summer, The Cave (fruit bat option)",
      es: "Naranjo durante Verano, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Peach": {
    id: "Peach",
    name: {
      en: "Peach",
      es: "Melocotón"
    },
    icon: "/img/36px-Peach.png",
    season: [
      "summer"
    ],
    source: {
      en: "Peach Tree during Summer, The Cave (fruit bat option)",
      es: "Melocotonero durante Verano, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Pomegranate": {
    id: "Pomegranate",
    name: {
      en: "Pomegranate",
      es: "Granada"
    },
    icon: "/img/36px-Pomegranate.png",
    season: [
      "fall"
    ],
    source: {
      en: "Pomegranate Tree during Fall, The Cave (fruit bat option)",
      es: "Granado durante Otoño, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "Enchanters_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Cherry": {
    id: "Cherry",
    name: {
      en: "Cherry",
      es: "Cereza"
    },
    icon: "/img/36px-Cherry.png",
    season: [
      "spring"
    ],
    source: {
      en: "Cherry Tree during Spring, The Cave (fruit bat option)",
      es: "Cerezo durante Primavera, La Cueva de Granja (Opción de Murciélagos de la fruta)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Artisan_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Keg": {
    id: "Keg",
    name: {
      en: "Keg",
      es: "Barril"
    },
    icon: "/img/36px-Keg.png"
  },
  "Sunfish": {
    id: "Sunfish",
    name: {
      en: "Sunfish",
      es: "Pez sol"
    },
    icon: "/img/36px-Sunfish.png",
    season: [
      "spring",
      "summer"
    ],
    weather: ["sun", "wind"],
    source: {
      en: "Found in Rivers, 6am - 7pm, Spring and Summer during sunny weather.",
      es: "Se encuentra en Ríos, 6:00 AM - 7:00 PM, Primavera, y Verano durante clima soleado"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "River_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Red_Mullet": {
    id: "Red_Mullet",
    name: {
      en: "Red Mullet",
      es: "Salmonete"
    },
    icon: "/img/36px-Red_Mullet.png",
    season: [
      "summer",
      "winter"
    ],
    source: {
      en: "Found in the Ocean, 6am - 7pm, Summer and Winter.",
      es: "Se encuentra en el Océano, 6:00 AM - 7:00 PM, Verano e Invierno"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Herring": {
    id: "Herring",
    name: {
      en: "Herring",
      es: "Arenque"
    },
    icon: "/img/36px-Herring.png",
    season: [
      "spring",
      "winter"
    ],
    source: {
      en: "Found in the Ocean, 6am - 11am, Spring and Winter.",
      es: "Se encuentra en el Océano, 6:00 AM - 11:00 AM, Primavera e Invierno"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Catfish": {
    id: "Catfish",
    name: {
      en: "Catfish",
      es: "Pez gato"
    },
    icon: "/img/36px-Catfish.png",
    season: [
      "spring",
      "fall",
      "summer",
      "winter"
    ],
    weather: ["rain"],
    source: {
      en: "Found in Rivers and Secret Woods, 6am - midnight, Spring and Fall. Only when raining.Can be found in Summer during rain in the Secret Woods and Witch's Swamp, Winter with a Rain Totem.",
      es: "Se encuentra en Ríos y Bosque Secreto, 6:00 AM hasta la media noche, Primavera y Otoño. Solo cuando llueve. Puede ser encontrado en Verano mientras llueve en el Bosque Secreto y el Pantano de la Bruja, Invierno con un Tótem de lluvia."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "River_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Pike": {
    id: "Pike",
    name: {
      en: "Pike",
      es: "Sauri"
    },
    icon: "/img/36px-Pike.png",
    season: [
      "summer",
      "winter"
    ],
    source: {
      en: "Found in Rivers (Town and Forest) and forest pond, anytime, Summer and Winter",
      es: "Se encuentra en Ríos (Pueblo y Bosque) y estanque del bosque, a cualquier hora, Verano e Invierno"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Shad": {
    id: "Shad",
    name: {
      en: "Shad",
      es: "Sábalo"
    },
    icon: "/img/36px-Shad.png",
    season: [
      "spring",
      "summer",
      "fall"
    ],
    weather: ["rain"],
    source: {
      en: "Found in Rivers, 9am - 2am, Spring, Summer, and Fall. Only when raining.",
      es: "Se encuentra en Ríos, 9:00 AM hasta las 2:00 AM, Primavera, Verano y Otoño. Sólo cuando llueve."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "River_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Lingcod": {
    id: "Lingcod",
    name: {
      en: "Lingcod",
      es: "Bacalao largo"
    },
    icon: "/img/36px-Lingcod.png",
    season: [
      "winter"
    ],
    source: {
      en: "Found in the rivers (Town and forest) and in the mountain lake, anytime, Winter.",
      es: "Se encuentra en los ríos (Pueblo y Bosque) y en el lago de la montaña, a cualquier hora, Invierno."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Halibut": {
    id: "Halibut",
    name: {
      en: "Halibut",
      es: "Fletán"
    },
    icon: "/img/36px-Halibut.png",
    season: [
      "spring",
      "summer",
      "winter"
    ],
    source: {
      en: "Found in the Ocean, 6am - 11am, 7pm - 2am, Spring, Summer, and Winter.",
      es: "Se encuentra en el Océano, 6:00 AM - 11:00 AM, 7PM - 2AM, Primavera, Verano e Invierno."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Tiger_Trout": {
    id: "Tiger_Trout",
    name: {
      en: "Tiger Trout",
      es: "Trucha tigre"
    },
    icon: "/img/36px-Tiger_Trout.png",
    season: [
      "fall",
      "winter"
    ],
    source: {
      en: "Found in Rivers, 6am - 7pm, Fall and Winter. Can be found in any Weather.",
      es: "Se encuentra en Ríos, 6:00 AM - 7:00 PM, Otoño e Invierno. Puede pescarse en cualquier clima."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "River_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Deluxe_Bait": {
    id: "Deluxe_Bait",
    name: {
      en: "Deluxe Bait",
      es: "Cebo"
    },
    icon: "/img/36px-Deluxe_Bait.png"
  },
  "Largemouth_Bass": {
    id: "Largemouth_Bass",
    name: {
      en: "Largemouth Bass",
      es: "Perca"
    },
    icon: "/img/36px-Largemouth_Bass.png",
    source: {
      en: "Found in the Mountain Lake, 6am - 7pm, All Seasons.",
      es: "Se encuentra en el Lago de la Montaña, 6:00 AM - 7:00 PM, Todas las estaciones."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Lake_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Smallmouth_Bass": {
    id: "Smallmouth_Bass",
    name: {
      en: "Smallmouth Bass",
      es: "Lubina"
    },
    icon: "/img/36px-Smallmouth_Bass.png",
    season: [
      "spring",
      "fall"
    ],
    source: {
      en: "Found in River (Town) and in the forest pond, anytime, any weather. Spring, and Fall.",
      es: "Se encuentra en el Río (Pueblo) y en el estanque del bosque, a cualquier hora, en cualquier clima. Primavera y Otoño."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Rainbow_Trout": {
    id: "Rainbow_Trout",
    name: {
      en: "Rainbow Trout",
      es: "Trucha arcoíris"
    },
    icon: "/img/36px-Rainbow_Trout.png",
    season: [
      "summer"
    ],
    weather: ["sun"],
    source: {
      en: "Found in the River (Town and Forest), 6am - 7pm, Summer during sunny weather.",
      es: "Se encuentra en el Río (Pueblo), 6:00 AM - 7:00 PM, Verano."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Salmon": {
    id: "Salmon",
    name: {
      en: "Salmon",
      es: "Salmón"
    },
    icon: "/img/36px-Salmon.png",
    season: [
      "fall"
    ],
    source: {
      en: "Found in the River (Town and Forest), 6am - 7pm, Any weather, Fall",
      es: "Se encuentra en el Río (Pueblo y Bosque), 6:00 AM - 7:00 PM, Otoño."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Carp": {
    id: "Carp",
    name: {
      en: "Carp",
      es: "Carpa"
    },
    icon: "/img/36px-Carp.png",
    season: [
      "spring",
      "summer",
      "fall"
    ],
    source: {
      en: "Found in the Mountain Lake, Anytime, during Spring, Summer, or Fall.Found in Secret Woods or The Sewers, Anytime, All Seasons.",
      es: "Se encuentra en el Lago de la Montaña, A cualquier hora, durante Primavera, Verano y Otoño. Se puede pescar en el Bosque Secreto o Las Cloacas, a cualquier hora, en cualquier estación."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Lake_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Bullhead": {
    id: "Bullhead",
    name: {
      en: "Bullhead",
      es: "Siluro"
    },
    icon: "/img/36px-Bullhead.png",
    source: {
      en: "Found in the Mountain Lake, Anytime, All Seasons.",
      es: "Se encuentra en el Lago de la Montaña. A cualquier hora. Todas las estaciones"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Lake_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Sturgeon": {
    id: "Sturgeon",
    name: {
      en: "Sturgeon",
      es: "Esturión"
    },
    icon: "/img/36px-Sturgeon.png",
    season: [
      "summer",
      "winter"
    ],
    source: {
      en: "Found in the Mountain Lake, 6am - 7pm, Summer and Winter.",
      es: "Se encuentra en el Lago de la Montaña, 6:00 AM - 7:00 PM, Verano e Invierno"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Lake_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Dressed_Spinner": {
    id: "Dressed_Spinner",
    name: {
      en: "Dressed Spinner",
      es: "Girador disfrazado"
    },
    icon: "/img/36px-Dressed_Spinner.png"
  },
  "Sardine": {
    id: "Sardine",
    name: {
      en: "Sardine",
      es: "Sardina"
    },
    icon: "/img/36px-Sardine.png",
    season: [
      "spring",
      "fall",
      "winter"
    ],
    source: {
      en: "Found in the Ocean, 6am - 7pm, Spring, Fall, and Winter.",
      es: "Se encuentra en el océano, 6:00 AM - 7:00 PM, Primavera, Otoño e Invierno"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Ocean_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Tuna": {
    id: "Tuna",
    name: {
      en: "Tuna",
      es: "Atún"
    },
    icon: "/img/36px-Tuna.png",
    season: [
      "summer",
      "winter"
    ],
    source: {
      en: "Found in the Ocean, 6am - 7pm, Summer and Winter. Ginger Island oceans",
      es: "Se encuentra en el océano, 6:00 AM - 7:00 PM, Verano e Invierno. Isla Jengibre (océanos)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Ocean_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Red_Snapper": {
    id: "Red_Snapper",
    name: {
      en: "Red Snapper",
      es: "Pargo colorado"
    },
    icon: "/img/36px-Red_Snapper.png",
    season: [
      "summer",
      "fall"
    ],
    source: {
      en: "Found in the Ocean, 6am - 7pm, Summer and Fall. Only when raining.",
      es: "Se encuentra en el océano, 6:00 AM - 7:00 PM, Verano y Otoño. Sólo cuando llueve"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Ocean_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Squid": {
    id: "Squid",
    name: {
      en: "Squid",
      es: "Calamar"
    },
    icon: "/img/36px-Squid.png",
    season: [
      "winter"
    ],
    source: {
      en: "Found in the Ocean, 6pm - 2am, Winter.",
      es: "Se encuentra en el océano, 6:00 PM - 2:00 AM, Invierno"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Sea_Cucumber": {
    id: "Sea_Cucumber",
    name: {
      en: "Sea Cucumber",
      es: "Pepino de mar"
    },
    icon: "/img/36px-Sea_Cucumber.png",
    season: [
      "fall",
      "winter"
    ],
    source: {
      en: "Found in the Ocean, 6am - 7pm, Fall and Winter.",
      es: "Se encuentra en el océano, 6:00 AM - 7:00 PM, Otoño e Invierno"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Super_Cucumber": {
    id: "Super_Cucumber",
    name: {
      en: "Super Cucumber",
      es: "Superpepino"
    },
    icon: "/img/36px-Super_Cucumber.png",
    season: [
      "summer",
      "fall"
    ],
    source: {
      en: "Found in the Ocean, 6pm - 2am, Summer and Fall. Ginger Island oceans",
      es: "Se encuentra en el océano, 6:00 PM - 2:00 AM, Verano y Otoño. Isla Jengibre (océanos)"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Tilapia": {
    id: "Tilapia",
    name: {
      en: "Tilapia",
      es: "Tilapia"
    },
    icon: "/img/36px-Tilapia.png",
    season: [
      "summer",
      "fall"
    ],
    source: {
      en: "Found in the Ocean, 6am - 2pm, Summer and Fall. Ginger Island rivers",
      es: "Se encuentra en el océano, 6:00 AM - 2:00 PM, Verano y Otoño. Ríos de la Isla Jengibre"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Ocean_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Slimejack": {
    id: "Slimejack",
    name: {
      en: "Slimejack",
      es: "Babolín"
    },
    icon: "/img/36px-Slimejack.png",
    source: {
      en: "Found in the Sewers, anytime, All Seasons.",
      es: "Se encuentra en las Cloacas, a cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Stingray": {
    id: "Stingray",
    name: {
      en: "Stingray",
      es: "Mantarraya"
    },
    icon: "/img/36px-Stingray.png",
    source: {
      en: "Found in the Pirate Cove (Ginger Island), anytime, All Seasons.",
      es: "Se encuentra en la Cueva Pirata (Isla Jengibre), a cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Lionfish": {
    id: "Lionfish",
    name: {
      en: "Lionfish",
      es: "Pez león"
    },
    icon: "/img/36px-Lionfish.png",
    source: {
      en: "Ginger Island oceans, anytime, All Seasons.",
      es: "Océanos de la Isla Jengibre, a cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Blue_Discus": {
    id: "Blue_Discus",
    name: {
      en: "Blue Discus",
      es: "Pez disco"
    },
    icon: "/img/36px-Blue_Discus.png",
    source: {
      en: "Ginger Island ponds and rivers, anytime, All Seasons.",
      es: "Ríos y estanques de la Isla Jengibre, a cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Goby": {
    id: "Goby",
    name: {
      en: "Goby",
      es: "Palometa"
    },
    icon: "/img/36px-Goby.png",
    source: {
      en: "Found in forest waterfalls, anytime, All Seasons.",
      es: "Se encuentra en las cascadas del bosque, a cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Midnight_Squid": {
    id: "Midnight_Squid",
    name: {
      en: "Midnight Squid",
      es: "Calamar de medianoche"
    },
    icon: "/img/36px-Midnight_Squid.png",
    season: ["winter"],
    source: {
      en: "Submarine ride at the Night Market during Winter, 5pm - 2am.",
      es: "Paseo en submarino en el Mercado Nocturno durante el Invierno, 5:00 PM - 2:00 AM."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Spook_Fish": {
    id: "Spook_Fish",
    name: {
      en: "Spook Fish",
      es: "Pez asustado"
    },
    icon: "/img/36px-Spook_Fish.png",
    season: ["winter"],
    source: {
      en: "Submarine ride at the Night Market during Winter, 5pm - 2am.",
      es: "Paseo en submarino en el Mercado Nocturno durante el Invierno, 5:00 PM - 2:00 AM."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Blobfish": {
    id: "Blobfish",
    name: {
      en: "Blobfish",
      es: "Pez gota"
    },
    icon: "/img/36px-Blobfish.png",
    season: ["winter"],
    source: {
      en: "Submarine ride at the Night Market during Winter, 5pm - 2am.",
      es: "Paseo en submarino en el Mercado Nocturno durante el Invierno, 5:00 PM - 2:00 AM."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Crimsonfish": {
    id: "Crimsonfish",
    name: {
      en: "Crimsonfish",
      es: "Pez carmesí"
    },
    icon: "/img/36px-Crimsonfish.png",
    season: ["summer"],
    source: {
      en: "Found in the east Pier on The Beach. Requires level 5 fishing. Anytime. Summer",
      es: "Se encuentra en el muelle este de la Playa. Requiere nivel 5 de pesca. A cualquier hora. Verano"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Angler": {
    id: "Angler",
    name: {
      en: "Angler",
      es: "Rape"
    },
    icon: "/img/36px-Angler.png",
    season: ["fall"],
    source: {
      en: "Found north of JojaMart on the wooden plank bridge. Requires level 3 fishing. Anytime, Fall",
      es: "Se encuentra al norte de JojaMart en el puente de madera. Requiere nivel 3 de pesca. A cualquier hora. Otoño"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Legend": {
    id: "Legend",
    name: {
      en: "Legend",
      es: "Leyenda"
    },
    icon: "/img/36px-Legend.png",
    season: ["spring"],
    weather: ["rain"],
    source: {
      en: "Found in the mountain lake. Only when raining. Requires level 10 fishing. Anytime, Spring",
      es: "Se encuentra en el lago de la montaña. Sólo cuando llueve. Requiere nivel 10 de pesca. A cualquier hora. Primavera"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Glacierfish": {
    id: "Glacierfish",
    name: {
      en: "Glacierfish",
      es: "Pez glacial"
    },
    icon: "/img/36px-Glacierfish.png",
    season: ["winter"],
    source: {
      en: "Found in the south end of Arrowhead Island in Cindersap Forest. Requires level 6 fishing. Anytime, Winter",
      es: "Se encuentra en el extremo sur de la Isla cabeza de flecha en el Bosque Tizón. Requiere nivel 6 de pesca. A cualquier hora. Invierno"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Mutant_Carp": {
    id: "Mutant_Carp",
    name: {
      en: "Mutant Carp",
      es: "Carpa mutante"
    },
    icon: "/img/36px-Mutant_Carp.png",
    source: {
      en: "Found in the Sewers, anytime, All Season.",
      es: "Se encuentra en las Cloacas, a cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Warp_Totem_Beach": {
    id: "Warp_Totem_Beach",
    name: {
      en: "Warp Totem: Beach",
      es: "Tótem de viaje: Playa"
    },
    icon: "/img/36px-Warp_Totem_Beach.png"
  },
  "Walleye": {
    id: "Walleye",
    name: {
      en: "Walleye",
      es: "Lucio"
    },
    icon: "/img/36px-Walleye.png",
    season: [
      "fall",
      "winter"
    ],
    weather: ["rain"],
    source: {
      en: "Found in Rivers, the Mountain Lake, and Cindersap Forest Pond, 12pm - 2am, Fall ( Winter with Rain Totem.) Only when raining.",
      es: "Se encuentra en el Río, el Lago de la Montaña, y el estanque del Bosque Tizón, 12:00 PM - 2:00 AM, Otoño, (Invierno con Tótem de lluvia.) Sólo cuando llueve."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Night_Fishing_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Perch": {
    id: "Perch",
    name: {
      en: "Perch",
      es: "Cachuelo"
    },
    icon: "/img/36px-Perch.png",
    season: [
      "winter"
    ],
    source: {
      en: "Found in Rivers (Town and Forest), forest pond and the montain, anytime, any weather. Winter.",
      es: "Se encuentra en Ríos (Pueblo y Bosque), 6:00 AM - 7:00 PM, Invierno"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Bream": {
    id: "Bream",
    name: {
      en: "Bream",
      es: "Besugo"
    },
    icon: "/img/36px-Bream.png",
    source: {
      en: "Found in Rivers, 6pm - 2am, All Seasons.",
      es: "Se encuentra en Ríos, 6:00 PM - 2:00 AM. Todas las estaciones."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Night_Fishing_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Eel": {
    id: "Eel",
    name: {
      en: "Eel",
      es: "Anguila"
    },
    icon: "/img/36px-Eel.png",
    season: [
      "spring",
      "fall"
    ],
    weather: ["rain"],
    source: {
      en: "Found in the Ocean, 4pm - 2am, Spring or Fall. Only when raining.",
      es: "Se encuentra en el océano, 4:00 PM - 2:00 AM, Primavera y Otoño. Sólo cuando llueve."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Night_Fishing_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Octopus": {
    id: "Octopus",
    name: {
      en: "Octopus",
      es: "Pulpo"
    },
    icon: "/img/36px-Octopus.png",
    season: [
      "summer"
    ],
    source: {
      en: "Found in the Ocean, 6am - 1pm, Summer. Ginger Island oceans",
      es: "Se encuentra en el océano, 6:00 AM - 1:00 PM, Verano. Isla Jengibre (océanos)"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Glow_Ring": {
    id: "Glow_Ring",
    name: {
      en: "Glow Ring",
      es: "Pequeño anillo brillante"
    },
    icon: "/img/36px-Glow_Ring.png"
  },
  "Lobster": {
    id: "Lobster",
    name: {
      en: "Lobster",
      es: "Langosta"
    },
    icon: "/img/36px-Lobster.png",
    source: {
      en: "Caught in Crab Pot (ocean)",
      es: "Capturado en una Trampa para cangrejos (Océano)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Crayfish": {
    id: "Crayfish",
    name: {
      en: "Crayfish",
      es: "Cangrejo de río"
    },
    icon: "/img/36px-Crayfish.png",
    source: {
      en: "Caught in Crab Pot (freshwater)",
      es: "Capturado en una Trampa para cangrejos (Agua dulce)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Crab": {
    id: "Crab",
    name: {
      en: "Crab",
      es: "Cangrejo"
    },
    icon: "/img/36px-Crab.png",
    source: {
      en: "Caught in Crab Pot (ocean), drops from Rock Crab or Lava Crab in The Mines",
      es: "Capturado en una Trampa para cangrejos (Océano), botín de Cangrejos de roca o Cangrejos de lava en Las minas"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Cockle": {
    id: "Cockle",
    name: {
      en: "Cockle",
      es: "Berberecho"
    },
    icon: "/img/36px-Cockle.png",
    source: {
      en: "Caught in Crab Pot (ocean), The Beach Foraging",
      es: "Capturado en una Trampa para cangrejos (Océano), Recolección en La Playa"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Mussel": {
    id: "Mussel",
    name: {
      en: "Mussel",
      es: "Mejillón"
    },
    icon: "/img/36px-Mussel.png",
    source: {
      en: "Caught in Crab Pot (ocean), The Beach Foraging",
      es: "Capturado en una Trampa para cangrejos (Océano), Recolección en La Playa"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Shrimp": {
    id: "Shrimp",
    name: {
      en: "Shrimp",
      es: "Gamba"
    },
    icon: "/img/36px-Shrimp.png",
    source: {
      en: "Caught in Crab Pot (ocean)",
      es: "Capturada en una Trampa para cangrejos (Océano)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Snail": {
    id: "Snail",
    name: {
      en: "Snail",
      es: "Caracol"
    },
    icon: "/img/36px-Snail.png",
    source: {
      en: "Caught in Crab Pot (freshwater)",
      es: "Capturado en una Trampa para cangrejos (Agua dulce)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Periwinkle": {
    id: "Periwinkle",
    name: {
      en: "Periwinkle",
      es: "Bígaro"
    },
    icon: "/img/36px-Periwinkle.png",
    source: {
      en: "Caught in Crab Pot (freshwater)",
      es: "Capturado en una Trampa para cangrejos (Agua dulce)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Oyster": {
    id: "Oyster",
    name: {
      en: "Oyster",
      es: "Ostra"
    },
    icon: "/img/36px-Oyster.png",
    source: {
      en: "Caught in Crab Pot (ocean), The Beach Foraging",
      es: "Capturada en una Trampa para cangrejos (Océano), Recolección en La Playa"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Clam": {
    id: "Clam",
    name: {
      en: "Clam",
      es: "Almeja"
    },
    icon: "/img/36px-Clam.png",
    source: {
      en: "Caught in Crab Pot (ocean), The Beach Foraging",
      es: "Capturada en una Trampa para cangrejos (Océano), Recolección en La Playa"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Crab_Pot_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Crab_Pot": {
    id: "Crab_Pot",
    name: {
      en: "Crab Pot",
      es: "Trampa para cangrejos"
    },
    icon: "/img/36px-Crab_Pot.png"
  },
  "Pufferfish": {
    id: "Pufferfish",
    name: {
      en: "Pufferfish",
      es: "Pez globo"
    },
    icon: "/img/36px-Pufferfish.png",
    season: [
      "summer"
    ],
    weather: ["sun"],
    source: {
      en: "Found in the Ocean, 12pm - 4pm, Summer during sunny weather. Ginger Island oceans",
      es: "Se encuentra en el Océano, 12:00 PM - 4:00 PM, Verano durante un día soleado. Isla Jengibre (océanos)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Specialty_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Anchovy": {
    id: "Anchovy",
    name: {
      en: "Anchovy",
      es: "Anchoa"
    },
    icon: "/img/36px-Anchovy.png",
    season: ["summer", "fall"],
    source: {
      en: "Found in the Ocean, anytime, any weather, Summer and Fall.",
      es: "Se encuentra en el Océano, a cualquier hora/clima, Verano y Otoño."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Ghostfish": {
    id: "Ghostfish",
    name: {
      en: "Ghostfish",
      es: "Pez fantasma"
    },
    icon: "/img/36px-Ghostfish.png",
    source: {
      en: "Found in ponds in The Mines floors 20 and 60, Anytime, All Seasons. May also be dropped by Ghost.",
      es: "Se encuentra en los estanques de Las minas, piso 20 y 60, A cualquier hora, Todas las estaciones. También es botín de Fantasmas."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Specialty_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Stonefish": {
    id: "Stonefish",
    name: {
      en: "Stonefish",
      es: "Pez piedra"
    },
    icon: "/img/36px-Stonefish.png",
    source: {
      en: "Found in the mines (20F), Anytime, All Seasons.",
      es: "Se encuentra en las minas (piso 20), A cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Ice_Pip": {
    id: "Ice_Pip",
    name: {
      en: "Ice Pip",
      es: "Pez carámbano"
    },
    icon: "/img/36px-Ice_Pip.png",
    source: {
      en: "Found in the mines (60F), Anytime, All Seasons.",
      es: "Se encuentra en las minas (piso 60), A cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Lava_Eel": {
    id: "Lava_Eel",
    name: {
      en: "Lava Eel",
      es: "Anguila de lava"
    },
    icon: "/img/36px-Lava_Eel.png",
    source: {
      en: "Found in the lava pool in The Mines (100F) and in the volcano caldera (Ginger island), Anytime, All Seasons.",
      es: "Se encuentra en la piscina de lava en Las minas (piso 100) y en la mazmorra del volcán (Isla Jengibre) , A cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Scorpion_Carp": {
    id: "Scorpion_Carp",
    name: {
      en: "Scorpion Carp",
      es: "Carpa escorpión"
    },
    icon: "/img/36px-Scorpion_Carp.png",
    source: {
      en: "Found in the desert (fishing 4 required), 6am - 8pm, All Seasons.",
      es: "Se encuentra en el desierto (nivel de pesca 4 requerido), 6am - 8pm, Todas las estaciones."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Flounder": {
    id: "Flounder",
    name: {
      en: "Flounder",
      es: "Platija"
    },
    icon: "/img/36px-Flounder.png",
    season: [
      "spring",
      "summer"
    ],
    source: {
      en: "Found in the ocean, 6am - 8pm, Spring and Summer. Ginger Island oceans",
      es: "Se encuentra en el océano, 6:00 AM - 8:00 PM, Primavera y Verano. Isla Jengibre (océanos)"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Midnight_Carp": {
    id: "Midnight_Carp",
    name: {
      en: "Midnight Carp",
      es: "Carpa de medianoche"
    },
    icon: "/img/36px-Midnight_Carp.png",
    season: [
      "fall",
      "winter"
    ],
    source: {
      en: "Found in the mountain lake and Forest pond, 10pm - 2am, Fall and Winter. Ginger Island pond and river",
      es: "Se encuentra en el Lago de la Montaña y en el estanque del bosque, 10:00 PM - 2:00 AM, Otoño e Invierno. Islas Jengibre (estanque y río)"
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Sandfish": {
    id: "Sandfish",
    name: {
      en: "Sandfish",
      es: "Lenguado"
    },
    icon: "/img/36px-Sandfish.png",
    source: {
      en: "Found in the pond in The Desert, 6am - 8pm, All Seasons.",
      es: "Se encuentra en el estanque del Desierto de Calico, 6:00 AM - 10:00 PM, Todas las estaciones."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Specialty_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Woodskip": {
    id: "Woodskip",
    name: {
      en: "Woodskip",
      es: "Muyu"
    },
    icon: "/img/36px-Woodskip.png",
    source: {
      en: "Found in the Secret Woods and the Farm Maps, Anytime, All Seasons.",
      es: "Se encuentra en el Bosque Secreto y la Granja Forestal, A cualquier hora, Todas las estaciones."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Specialty_Fish_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Dish_O'_The_Sea": {
    id: "Dish_O'_The_Sea",
    name: {
      en: "Dish O' The Sea",
      es: "Plato de alta mar"
    },
    icon: "/img/36px-Dish_O'_The_Sea.png"
  },
  "Copper_Bar": {
    id: "Copper_Bar",
    name: {
      en: "Copper Bar",
      es: "Lingote de cobre"
    },
    icon: "/img/36px-Copper_Bar.png",
    source: {
      en: "Smelting Copper Ore in the Furnace",
      es: "Fundiendo Menas de cobre en un Horno"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Blacksmiths_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Iron_Bar": {
    id: "Iron_Bar",
    name: {
      en: "Iron Bar",
      es: "Lingote de hierro"
    },
    icon: "/img/36px-Iron_Bar.png",
    source: {
      en: "Smelting Iron Ore in the Furnace, Crafting the \"Transmute (Fe)\" recipe",
      es: "Fundiendo Menas de hierro en un Horno, Fabricándolo con la receta \"Transmutar (Fe)\""
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Blacksmiths_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Gold_Bar": {
    id: "Gold_Bar",
    name: {
      en: "Gold Bar",
      es: "Lingote de oro"
    },
    icon: "/img/36px-Gold_Bar.png",
    source: {
      en: "Smelting Gold Ore in the Furnace, Crafting the \"Transmute (Au)\" recipe",
      es: "Fundiendo Menas de oro en un Horno, Fabricándolo con la receta \"Transmutar (Au)\""
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Blacksmiths_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Furnace": {
    id: "Furnace",
    name: {
      en: "Furnace",
      es: "Horno"
    },
    icon: "/img/36px-Furnace.png"
  },
  "Quartz": {
    id: "Quartz",
    name: {
      en: "Quartz",
      es: "Cuarzo"
    },
    icon: "/img/36px-Quartz.png",
    source: {
      en: "Minerals on all floors of The Mines",
      es: "Recolectándolo en cualquier piso de Las minas."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Geologists_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Earth_Crystal": {
    id: "Earth_Crystal",
    name: {
      en: "Earth Crystal",
      es: "Cristal terrestre"
    },
    icon: "/img/36px-Earth_Crystal.png",
    source: {
      en: "Minerals on floors 1-39 of The Mines, Geode, Omni Geode, drop from Duggy in the Mines (floors 6-29)",
      es: "Recolectándolo en los pisos 1-39 de Las minas, Geodas, botín de Cavadorines en Las minas. (Pisos 6-29)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Geologists_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Frozen_Tear": {
    id: "Frozen_Tear",
    name: {
      en: "Frozen Tear",
      es: "Lágrima helada"
    },
    icon: "/img/36px-Frozen_Tear.png",
    source: {
      en: "Minerals on floors 41-79 of The Mines, Frozen Geode, Omni Geode, drop from Dust Sprite in the Mines (floors 41-79)",
      es: "Reconlectándola en los pisos 41-79 de Las minas, Geodas de hielo, Omnigeodas, botín de Duendes del polvo en Las minas. (Pisos 41-79)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Geologists_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Fire_Quartz": {
    id: "Fire_Quartz",
    name: {
      en: "Fire Quartz",
      es: "Cuarzo de fuego"
    },
    icon: "/img/36px-Fire_Quartz.png",
    source: {
      en: "Minerals on floors 81-119 of The Mines, Magma Geode, Omni Geode",
      es: "Recolectándolo en los pisos 81-119 de Las minas, Geodas de magma, Omnigeodas."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Geologists_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Omni_Geode": {
    id: "Omni_Geode",
    name: {
      en: "Omni Geode",
      es: "Omnigeoda"
    },
    icon: "/img/36px-Omni_Geode.png"
  },
  "Slime": {
    id: "Slime",
    name: {
      en: "Slime",
      es: "Baba"
    },
    icon: "/img/36px-Slime.png",
    source: {
      en: "Dropped by Slimes",
      es: "Botín de Babas."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Adventurers_Bundle",
        quantity: 99,
        quality: "normal"
      }
    ]
  },
  "Bat_Wing": {
    id: "Bat_Wing",
    name: {
      en: "Bat Wing",
      es: "Ala de murciélago"
    },
    icon: "/img/36px-Bat_Wing.png",
    source: {
      en: "Dropped by Bats in The Mines or the Skull Cavern",
      es: "Botín de Murciélagos en Las minas o la Caverna Calavera."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Adventurers_Bundle",
        quantity: 10,
        quality: "normal"
      }
    ]
  },
  "Solar_Essence": {
    id: "Solar_Essence",
    name: {
      en: "Solar Essence",
      es: "Esencia solar"
    },
    icon: "/img/36px-Solar_Essence.png",
    source: {
      en: "Dropped by Ghost, Squid Kid, or Metal Head in The Mines, dropped by Mummy or Bats in the Skull Cavern ; produced by Sunfish in Fish Pond ; buy from Krobus",
      es: "Botín de Fantasmas, Niños calamar o Cabezas de metal en Las minas, botín de Momias o Murciélagos de iridio en la Caverna Calavera; producido por Pez sol en el Estanque de peces; comprando a Krobus."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Adventurers_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Void_Essence": {
    id: "Void_Essence",
    name: {
      en: "Void Essence",
      es: "Esencia sombría"
    },
    icon: "/img/36px-Void_Essence.png",
    source: {
      en: "Dropped by Shadow Brute or Shadow Shaman in The Mines or Serpent in the Skull Cavern ; produced by Void Salmon in Fish Pond ; buy from Krobus",
      es: "Botín de Bestias de las sombras o Chamanes de las sombras en Las minas o Serpientes en la Caverna Calavera; producido por Salmón de vacío en el Estanque de peces; comprando a Krobus."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Adventurers_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Small_Magnet_Ring": {
    id: "Small_Magnet_Ring",
    name: {
      en: "Small Magnet Ring",
      es: "Pequeño anillo magnético"
    },
    icon: "/img/36px-Small_Magnet_Ring.png"
  },
  "Fiddlehead_Fern": {
    id: "Fiddlehead_Fern",
    name: {
      en: "Fiddlehead Fern",
      es: "Helecho"
    },
    icon: "/img/36px-Fiddlehead_Fern.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Foraging in the Secret Woods, Foraging on Prehistoric Floors at the Skull Cavern, Cutting down Green Rain Trees",
      es: "Recolección en el Bosque secreto en Verano, Recolectando en pisos prehistóricos en la Caverna Calavera."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Chefs_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Truffle": {
    id: "Truffle",
    name: {
      en: "Truffle",
      es: "Trufa"
    },
    icon: "/img/36px-Truffle.png",
    source: {
      en: "Pig",
      es: "Cerdos."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Chefs_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Poppy": {
    id: "Poppy",
    name: {
      en: "Poppy",
      es: "Amapola"
    },
    icon: "/img/36px-Poppy.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Crops",
      es: "Cultivo de Verano."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Chefs_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Maki_Roll": {
    id: "Maki_Roll",
    name: {
      en: "Maki Roll",
      es: "Rollitos maki"
    },
    icon: "/img/36px-Maki_Roll.png",
    source: {
      en: "Cooking (recipe sources: The Queen of Sauce, The Stardrop Saloon )",
      es: "Cocina (Receta: La reina de la salsa (21 de Verano, Año 1), Salón Fruta Estelar)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Chefs_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Fried_Egg": {
    id: "Fried_Egg",
    name: {
      en: "Fried Egg",
      es: "Huevo frito"
    },
    icon: "/img/36px-Fried_Egg.png",
    source: {
      en: "Cooking",
      es: "Cocina"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Chefs_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Pink_Cake": {
    id: "Pink_Cake",
    name: {
      en: "Pink Cake",
      es: "Pastel rosa"
    },
    icon: "/img/36px-Pink_Cake.png"
  },
  "Sea_Urchin": {
    id: "Sea_Urchin",
    name: {
      en: "Sea Urchin",
      es: "Erizo de mar"
    },
    icon: "/img/36px-Sea_Urchin.png",
    source: {
      en: "The Beach Foraging, after using 300 Wood to fix the bridge to the right side of The Beach or any side of the beach during The Beach ; foraging in the Beach Farm",
      es: "Recolección en La Playa tras usar 300 de madera para arreglar el puente a la derecha de La playa o cualquier lado de la playa durante la temporada de apareamiento del cangrejo; Recolección en la Granja de la playa."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Dye_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Sunflower": {
    id: "Sunflower",
    name: {
      en: "Sunflower",
      es: "Girasol"
    },
    icon: "/img/36px-Sunflower.png",
    season: [
      "summer",
      "fall"
    ],
    source: {
      en: "Summer / Fall Crops",
      es: "Cultivo de Verano/Otoño."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Dye_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Duck_Feather": {
    id: "Duck_Feather",
    name: {
      en: "Duck Feather",
      es: "Pluma de pato"
    },
    icon: "/img/36px-Duck_Feather.png",
    source: {
      en: "Duck",
      es: "Patos"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Dye_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Aquamarine": {
    id: "Aquamarine",
    name: {
      en: "Aquamarine",
      es: "Aguamarina"
    },
    icon: "/img/36px-Aquamarine.png",
    source: {
      en: "Mining, boxes in The Mines, Fishing",
      es: "Minería, cajas de Las minas, Pescando cofres del tesoro."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Dye_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Red_Cabbage": {
    id: "Red_Cabbage",
    name: {
      en: "Red Cabbage",
      es: "Lombarda"
    },
    icon: "/img/36px-Red_Cabbage.png",
    season: [
      "summer"
    ],
    source: {
      en: "Summer Crops ( Red Cabbage Seeds are available at Pierre's General Store in year 2+, at the Traveling Cart, or dropped by Serpent, Mummy, and Slimes )",
      es: "Cultivo de Verano (Las Semillas de lombarda están disponibles en la Tienda local Pierre's a partir del año 2, en el Carro Ambulante, o botín de Serpientes, Momias, y Babas púrpuras)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Dye_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Seed_Maker": {
    id: "Seed_Maker",
    name: {
      en: "Seed Maker",
      es: "Semilladora"
    },
    icon: "/img/36px-Seed_Maker.png"
  },
  "Nautilus_Shell": {
    id: "Nautilus_Shell",
    name: {
      en: "Nautilus Shell",
      es: "Concha de nautilo"
    },
    icon: "/img/36px-Nautilus_Shell.png",
    season: [
      "winter"
    ],
    source: {
      en: "Winter The Beach Foraging, Farm Maps Foraging during any season, Random gift from Demetrius",
      es: "Recolección en La Playa en Invierno, Recolección en la Granja de la Playa en cualquier estación. Regalo aleatorio de Demetrius (Nota: No confundir con Fósil de nautilo)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Field_Research_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Chub": {
    id: "Chub",
    name: {
      en: "Chub",
      es: "Barbo"
    },
    icon: "/img/36px-Chub.png",
    source: {
      en: "Can be found in the mountain lake and river during all seasons, any time.",
      es: "Se encuentra en Lago de la Montaña y los Ríos en todas las estaciones."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Field_Research_Bundle",
        quantity: 1,
        quality: "normal"
      },
      { type: "master_angler" }
    ]
  },
  "Dorado": {
    id: "Dorado",
    name: {
      en: "Dorado",
      es: "Dorado"
    },
    icon: "/img/36px-Dorado.png",
    season: ["summer"],
    source: {
      en: "Can be found in the forest river, 6am - 7pm, Summer",
      es: "Se encuentra en el río del bosque, 6am - 7pm, Verano."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Albacore": {
    id: "Albacore",
    name: {
      en: "Albacore",
      es: "Atún blanco"
    },
    icon: "/img/36px-Albacore.png",
    season: ["fall", "winter"],
    source: {
      en: "Can be found in the ocean, 6am - 11am, 6pm - 2am, Fall and Winter",
      es: "Se encuentra en el océano, 6am - 11am, 6pm - 2am, Otoño e Invierno."
    },
    requiredBy: [
      { type: "master_angler" }
    ]
  },
  "Frozen_Geode": {
    id: "Frozen_Geode",
    name: {
      en: "Frozen Geode",
      es: "Geoda de hielo"
    },
    icon: "/img/36px-Frozen_Geode.png",
    source: {
      en: "The Mines floors 41-79",
      es: "Las minas (Pisos 41-79)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Field_Research_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Recycling_Machine": {
    id: "Recycling_Machine",
    name: {
      en: "Recycling Machine",
      es: "Máquina recicladora"
    },
    icon: "/img/36px-Recycling_Machine.png"
  },
  "Wheat": {
    id: "Wheat",
    name: {
      en: "Wheat",
      es: "Trigo"
    },
    icon: "/img/36px-Wheat.png",
    season: [
      "summer",
      "fall"
    ],
    source: {
      en: "Summer / Fall Crops",
      es: "Cosechándolo en Verano / Otoño"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fodder_Bundle",
        quantity: 10,
        quality: "normal"
      }
    ]
  },
  "Hay": {
    id: "Hay",
    name: {
      en: "Hay",
      es: "Heno"
    },
    icon: "/img/36px-Hay.png",
    source: {
      en: "Purchase at Marnie's Ranch or Desert Trader, or harvest from Grass or Wheat.",
      es: "Comprándolo en el Rancho de Marnie o del Comerciante del desierto, cortando Hierba o Trigo con la Guadaña teniendo un Silo"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Fodder_Bundle",
        quantity: 10,
        quality: "normal"
      }
    ]
  },
  "Heater": {
    id: "Heater",
    name: {
      en: "Heater",
      es: "Radiador"
    },
    icon: "/img/36px-Heater.png"
  },
  "Wine": {
    id: "Wine",
    name: {
      en: "Wine",
      es: "Vino"
    },
    icon: "/img/36px-Wine.png",
    source: {
      en: "Keg",
      es: "Hecho de Frutas en un Barril"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Enchanters_Bundle",
        quantity: 1,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "The_Missing_Bundle",
        quantity: 1,
        quality: [
          "silver",
          "gold",
          "iridium"
        ]
      }
    ]
  },
  "Rabbit's_Foot": {
    id: "Rabbit's_Foot",
    name: {
      en: "Rabbit's Foot",
      es: "Pata de conejo"
    },
    icon: "/img/36px-Rabbit's_Foot.png",
    source: {
      en: "Rabbit, Serpent drop in Skull Cavern (0.8%)",
      es: "Conejo, botín de Serpientes en la Caverna Calavera (0.8%)"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "Enchanters_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Purchase": {
    id: "Purchase",
    name: {
      en: "Purchase",
      es: "Comprar"
    },
    icon: "/img/Bundle_Purchase.png",
    requiredBy: [
      {
        type: "bundle",
        id: "2500_Bundle",
        quantity: 2500,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "5000_Bundle",
        quantity: 5000,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "10000_Bundle",
        quantity: 10000,
        quality: "normal"
      },
      {
        type: "bundle",
        id: "25000_Bundle",
        quantity: 25000,
        quality: "normal"
      }
    ]
  },
  "Chocolate_Cake": {
    id: "Chocolate_Cake",
    name: {
      en: "Chocolate Cake",
      es: "Pastel de chocolate"
    },
    icon: "/img/36px-Chocolate_Cake.png"
  },
  "Quality_Fertilizer": {
    id: "Quality_Fertilizer",
    name: {
      en: "Quality Fertilizer",
      es: "Fertilizante deluxe"
    },
    icon: "/img/36px-Quality_Fertilizer.png"
  },
  "Lightning_Rod": {
    id: "Lightning_Rod",
    name: {
      en: "Lightning Rod",
      es: "Pararrayos"
    },
    icon: "/img/36px-Lightning_Rod.png"
  },
  "Crystalarium": {
    id: "Crystalarium",
    name: {
      en: "Crystalarium",
      es: "Cristalario"
    },
    icon: "/img/36px-Crystalarium.png"
  },
  "Dinosaur_Mayonnaise": {
    id: "Dinosaur_Mayonnaise",
    name: {
      en: "Dinosaur Mayonnaise",
      es: "Mayonesa dinosaurio"
    },
    icon: "/img/36px-Dinosaur_Mayonnaise.png",
    source: {
      en: "Mayonnaise Machine",
      es: "Mayonesera"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "The_Missing_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Prismatic_Shard": {
    id: "Prismatic_Shard",
    name: {
      en: "Prismatic Shard",
      es: "Esquirla prismática"
    },
    icon: "/img/36px-Prismatic_Shard.png",
    source: {
      en: "Mining",
      es: "Minería"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "The_Missing_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  },
  "Ancient_Fruit": {
    id: "Ancient_Fruit",
    name: {
      en: "Ancient Fruit",
      es: "Fruta milenaria"
    },
    icon: "/img/36px-Ancient_Fruit.png",
    source: {
      en: "Crops",
      es: "Cultivos"
    },
    requiredBy: [
      {
        type: "bundle",
        id: "The_Missing_Bundle",
        quantity: 1,
        quality: [
          "gold",
          "iridium"
        ]
      }
    ]
  },
  "Void_Salmon": {
    id: "Void_Salmon",
    name: {
      en: "Void Salmon",
      es: "Salmón sombrío"
    },
    icon: "/img/36px-Void_Salmon.png",
    source: {
      en: "Fishing in the Witch's Swamp",
      es: "Pescando en el Pantano de la Bruja."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "The_Missing_Bundle",
        quantity: 1,
        quality: [
          "gold",
          "iridium"
        ]
      },
      { type: "master_angler" }
    ]
  },
  "Caviar": {
    id: "Caviar",
    name: {
      en: "Caviar",
      es: "Caviar"
    },
    icon: "/img/36px-Caviar.png",
    source: {
      en: "Preserves Jar product from Sturgeon Roe",
      es: "Envasadora, producto de las huevas del Esturión."
    },
    requiredBy: [
      {
        type: "bundle",
        id: "The_Missing_Bundle",
        quantity: 1,
        quality: "normal"
      }
    ]
  }
}

export default ITEMS_MAP;
