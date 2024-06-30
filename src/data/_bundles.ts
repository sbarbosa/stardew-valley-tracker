import type { Bundle, BundleId } from "./_types";

const BUNDLE_MAP: Record<BundleId, Bundle> = {
  "Spring_Foraging_Bundle": {
    id: "Spring_Foraging_Bundle",
    name: {
      en: "Spring Foraging Bundle",
      es: "Lote Recolección Primaveral"
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Green.png",
    required: 4,
    items: [
      {
        id: "Wild_Horseradish",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Daffodil",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Leek",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Dandelion",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Spring_Seeds",
      quantity: 30,
      quality: "normal"
    }
  },
  "Summer_Foraging_Bundle": {
    id: "Summer_Foraging_Bundle",
    name: {
      en: "Summer Foraging Bundle",
      es: "Lote Recolección Veraniega"
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Yellow.png",
    required: 3,
    items: [
      {
        id: "Grape",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Spice_Berry",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Sweet_Pea",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Summer_Seeds",
      quantity: 30,
      quality: "normal"
    }
  },
  "Fall_Foraging_Bundle": {
    id: "Fall_Foraging_Bundle",
    name: {
      en: "Fall Foraging Bundle",
      es: "Lote Recolección Otoñal"
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Orange.png",
    required: 4,
    items: [
      {
        id: "Common_Mushroom",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Wild_Plum",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Hazelnut",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Blackberry",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Fall_Seeds",
      quantity: 30,
      quality: "normal"
    }
  },
  "Winter_Foraging_Bundle": {
    id: "Winter_Foraging_Bundle",
    name: {
      en: "Winter Foraging Bundle",
      es: "Lote Recolección Invernal"
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Teal.png",
    required: 4,
    items: [
      {
        id: "Winter_Root",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Crystal_Fruit",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Snow_Yam",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Crocus",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Winter_Seeds",
      quantity: 30,
      quality: "normal"
    }
  },
  "Construction_Bundle": {
    id: "Construction_Bundle",
    name: {
      en: "Construction Bundle",
      es: "Lote Construcción"
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Red.png",
    required: 4,
    items: [
      {
        id: "Wood",
        quantity: 99,
        quality: "normal"
      },
      {
        id: "Wood",
        quantity: 99,
        quality: "normal"
      },
      {
        id: "Stone",
        quantity: 99,
        quality: "normal"
      },
      {
        id: "Hardwood",
        quantity: 10,
        quality: "normal"
      }
    ],
    reward: {
      id: "Charcoal_Kiln",
      quantity: 1,
      quality: "normal"
    }
  },
  "Exotic_Foraging_Bundle": {
    id: "Exotic_Foraging_Bundle",
    name: {
      en: "Exotic Foraging Bundle",
      es: "Lote Recolección exótica"
    },
    location: "Crafts_Room",
    icon: "/img/Bundle_Purple.png",
    required: 5,
    items: [
      {
        id: "Coconut",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Cactus_Fruit",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Cave_Carrot",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Red_Mushroom",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Purple_Mushroom",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Maple_Syrup",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Oak_Resin",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Pine_Tar",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Morel",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Autumn's_Bounty",
      quantity: 5,
      quality: "normal"
    }
  },
  "Spring_Crops_Bundle": {
    id: "Spring_Crops_Bundle",
    name: {
      en: "Spring Crops Bundle",
      es: "Lote Cultivos de Primavera"
    },
    location: "Pantry",
    icon: "/img/Bundle_Green.png",
    required: 4,
    items: [
      {
        id: "Parsnip",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Green_Bean",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Cauliflower",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Potato",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Speed_Gro",
      quantity: 20,
      quality: "normal"
    }
  },
  "Summer_Crops_Bundle": {
    id: "Summer_Crops_Bundle",
    name: {
      en: "Summer Crops Bundle",
      es: "Lote Cultivos de Verano"
    },
    location: "Pantry",
    icon: "/img/Bundle_Yellow.png",
    required: 4,
    items: [
      {
        id: "Tomato",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Hot_Pepper",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Blueberry",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Melon",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Quality_Sprinkler",
      quantity: 1,
      quality: "normal"
    }
  },
  "Fall_Crops_Bundle": {
    id: "Fall_Crops_Bundle",
    name: {
      en: "Fall Crops Bundle",
      es: "Lote Cultivos de Otoño"
    },
    location: "Pantry",
    icon: "/img/Bundle_Orange.png",
    required: 4,
    items: [
      {
        id: "Corn",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Eggplant",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Pumpkin",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Yam",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Bee_House",
      quantity: 1,
      quality: "normal"
    }
  },
  "Quality_Crops_Bundle": {
    id: "Quality_Crops_Bundle",
    name: {
      en: "Quality Crops Bundle",
      es: "Lote Cultivos de Calidad"
    },
    location: "Pantry",
    icon: "/img/Bundle_Teal.png",
    required: 3,
    items: [
      {
        id: "Parsnip",
        quantity: 5,
        quality: "gold"
      },
      {
        id: "Melon",
        quantity: 5,
        quality: "gold"
      },
      {
        id: "Pumpkin",
        quantity: 5,
        quality: "gold"
      },
      {
        id: "Corn",
        quantity: 5,
        quality: "gold"
      }
    ],
    reward: {
      id: "Preserves_Jar",
      quantity: 1,
      quality: "normal"
    }
  },
  "Animal_Bundle": {
    id: "Animal_Bundle",
    name: {
      en: "Animal Bundle",
      es: "Lote Origen Animal"
    },
    location: "Pantry",
    icon: "/img/Bundle_Red.png",
    required: 5,
    items: [
      {
        id: "Large_Milk",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Large_Egg",
        quantity: 1,
        quality: "normal",
        kind: "Brown"
      },
      {
        id: "Large_Egg",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Large_Goat_Milk",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Wool",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Duck_Egg",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Cheese_Press",
      quantity: 1,
      quality: "normal"
    }
  },
  "Artisan_Bundle": {
    id: "Artisan_Bundle",
    name: {
      en: "Artisan Bundle",
      es: "Lote Origen Artesanal"
    },
    location: "Pantry",
    icon: "/img/Bundle_Purple.png",
    required: 6,
    items: [
      {
        id: "Truffle_Oil",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Cloth",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Goat_Cheese",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Cheese",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Honey",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Jelly",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Apple",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Apricot",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Orange",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Peach",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Pomegranate",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Cherry",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Keg",
      quantity: 1,
      quality: "normal"
    }
  },
  "River_Fish_Bundle": {
    id: "River_Fish_Bundle",
    name: {
      en: "River Fish Bundle",
      es: "Lote Peces Fluviales"
    },
    location: "Fish_Tank",
    help: {
      en: "All River Fish can be found in the Farm Maps, Farm Maps, or Farm Maps.",
      es: "Todos los peces de río se pueden encontrar en la Granja Fluvial, la Granja Minera o la Granja Forestal."
    },
    icon: "/img/Bundle_Teal.png",
    required: 4,
    items: [
      {
        id: "Sunfish",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Catfish",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Shad",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Tiger_Trout",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Deluxe_Bait",
      quantity: 30,
      quality: "normal"
    }
  },
  "Lake_Fish_Bundle": {
    id: "Lake_Fish_Bundle",
    name: {
      en: "Lake Fish Bundle",
      es: "Lote Peces de Lago"
    },
    location: "Fish_Tank",
    help: {
      en: "All Mountain Lake Fish can be found in any Weather, and in the Farm Maps.",
      es: "Todos los peces de los Lagos de Montaña se pueden encontrar en cualquier clima, y en la Granja Salvaje."
    },
    icon: "/img/Bundle_Green.png",
    required: 4,
    items: [
      {
        id: "Largemouth_Bass",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Carp",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Bullhead",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Sturgeon",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Dressed_Spinner",
      quantity: 1,
      quality: "normal"
    }
  },
  "Ocean_Fish_Bundle": {
    id: "Ocean_Fish_Bundle",
    name: {
      en: "Ocean Fish Bundle",
      es: "Lote Peces Marinos"
    },
    location: "Fish_Tank",
    icon: "/img/Bundle_Blue.png",
    required: 4,
    items: [
      {
        id: "Sardine",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Tuna",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Red_Snapper",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Tilapia",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Warp_Totem_Beach",
      quantity: 5,
      quality: "normal"
    }
  },
  "Night_Fishing_Bundle": {
    id: "Night_Fishing_Bundle",
    name: {
      en: "Night Fishing Bundle",
      es: "Lote Peces Nocturnos"
    },
    location: "Fish_Tank",
    icon: "/img/Bundle_Purple.png",
    required: 3,
    items: [
      {
        id: "Walleye",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Bream",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Eel",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Glow_Ring",
      quantity: 1,
      quality: "normal"
    }
  },
  "Crab_Pot_Bundle": {
    id: "Crab_Pot_Bundle",
    name: {
      en: "Crab Pot Bundle",
      es: "Lote Trampa para Cangrejos"
    },
    location: "Fish_Tank",
    icon: "/img/Bundle_Purple.png",
    required: 5,
    items: [
      {
        id: "Lobster",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Crayfish",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Crab",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Cockle",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Mussel",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Shrimp",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Snail",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Periwinkle",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Oyster",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Clam",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Crab_Pot",
      quantity: 3,
      quality: "normal"
    }
  },
  "Specialty_Fish_Bundle": {
    id: "Specialty_Fish_Bundle",
    name: {
      en: "Specialty Fish Bundle",
      es: "Lote Peces Especiales"
    },
    location: "Fish_Tank",
    icon: "/img/Bundle_Red.png",
    required: 4,
    items: [
      {
        id: "Pufferfish",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Ghostfish",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Sandfish",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Woodskip",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Dish_O'_The_Sea",
      quantity: 5,
      quality: "normal"
    }
  },
  "Blacksmiths_Bundle": {
    id: "Blacksmiths_Bundle",
    name: {
      en: "Blacksmith's Bundle",
      es: "Lote Herrero"
    },
    location: "Boiler_Room",
    icon: "/img/Bundle_Orange.png",
    required: 3,
    items: [
      {
        id: "Copper_Bar",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Iron_Bar",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Gold_Bar",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Furnace",
      quantity: 1,
      quality: "normal"
    }
  },
  "Geologists_Bundle": {
    id: "Geologists_Bundle",
    name: {
      en: "Geologist's Bundle",
      es: "Lote Geólogo"
    },
    location: "Boiler_Room",
    icon: "/img/Bundle_Purple.png",
    required: 4,
    items: [
      {
        id: "Quartz",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Earth_Crystal",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Frozen_Tear",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Fire_Quartz",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Omni_Geode",
      quantity: 5,
      quality: "normal"
    }
  },
  "Adventurers_Bundle": {
    id: "Adventurers_Bundle",
    name: {
      en: "Adventurer's Bundle",
      es: "Lote Aventurero"
    },
    location: "Boiler_Room",
    icon: "/img/Bundle_Purple.png",
    required: 2,
    items: [
      {
        id: "Slime",
        quantity: 99,
        quality: "normal"
      },
      {
        id: "Bat_Wing",
        quantity: 10,
        quality: "normal"
      },
      {
        id: "Solar_Essence",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Void_Essence",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Small_Magnet_Ring",
      quantity: 1,
      quality: "normal"
    }
  },
  "Chefs_Bundle": {
    id: "Chefs_Bundle",
    name: {
      en: "Chef's Bundle",
      es: "Lote Chef"
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Red.png",
    required: 6,
    items: [
      {
        id: "Maple_Syrup",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Fiddlehead_Fern",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Truffle",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Poppy",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Maki_Roll",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Fried_Egg",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Pink_Cake",
      quantity: 3,
      quality: "normal"
    }
  },
  "Dye_Bundle": {
    id: "Dye_Bundle",
    name: {
      en: "Dye Bundle",
      es: "Lote Tinte"
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Teal.png",
    required: 6,
    items: [
      {
        id: "Red_Mushroom",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Sea_Urchin",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Sunflower",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Duck_Feather",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Aquamarine",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Red_Cabbage",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Seed_Maker",
      quantity: 1,
      quality: "normal"
    }
  },
  "Field_Research_Bundle": {
    id: "Field_Research_Bundle",
    name: {
      en: "Field Research Bundle",
      es: "Lote Estudio de Campo"
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Blue.png",
    required: 4,
    items: [
      {
        id: "Purple_Mushroom",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Nautilus_Shell",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Chub",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Frozen_Geode",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Recycling_Machine",
      quantity: 1,
      quality: "normal"
    }
  },
  "Fodder_Bundle": {
    id: "Fodder_Bundle",
    name: {
      en: "Fodder Bundle",
      es: "Lote Pienso"
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Yellow.png",
    required: 3,
    items: [
      {
        id: "Wheat",
        quantity: 10,
        quality: "normal"
      },
      {
        id: "Hay",
        quantity: 10,
        quality: "normal"
      },
      {
        id: "Apple",
        quantity: 3,
        quality: "normal"
      }
    ],
    reward: {
      id: "Heater",
      quantity: 1,
      quality: "normal"
    }
  },
  "Enchanters_Bundle": {
    id: "Enchanters_Bundle",
    name: {
      en: "Enchanter's Bundle",
      es: "Lote Encantador"
    },
    location: "Bulletin_Board",
    icon: "/img/Bundle_Purple.png",
    required: 4,
    items: [
      {
        id: "Oak_Resin",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Wine",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Rabbit's_Foot",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Pomegranate",
        quantity: 1,
        quality: "normal"
      }
    ],
    reward: {
      id: "Gold_Bar",
      quantity: 5,
      quality: "normal"
    }
  },
  "2500_Bundle": {
    id: "2500_Bundle",
    name: {
      en: "2,500 Bundle",
      es: "Lote 2,500"
    },
    location: "Vault",
    icon: "/img/Bundle_Red.png",
    required: 1,
    items: [
      {
        id: "Purchase",
        quantity: 2500,
        quality: "normal"
      }
    ],
    reward: {
      id: "Chocolate_Cake",
      quantity: 3,
      quality: "normal"
    }
  },
  "5000_Bundle": {
    id: "5000_Bundle",
    name: {
      en: "5,000 Bundle",
      es: "Lote 5,000"
    },
    location: "Vault",
    icon: "/img/Bundle_Orange.png",
    required: 1,
    items: [
      {
        id: "Purchase",
        quantity: 5000,
        quality: "normal"
      }
    ],
    reward: {
      id: "Quality_Fertilizer",
      quantity: 30,
      quality: "normal"
    }
  },
  "10000_Bundle": {
    id: "10000_Bundle",
    name: {
      en: "10,000 Bundle",
      es: "Lote 10,000"
    },
    location: "Vault",
    icon: "/img/Bundle_Yellow.png",
    required: 1,
    items: [
      {
        id: "Purchase",
        quantity: 10000,
        quality: "normal"
      }
    ],
    reward: {
      id: "Lightning_Rod",
      quantity: 1,
      quality: "normal"
    }
  },
  "25000_Bundle": {
    id: "25000_Bundle",
    name: {
      en: "25,000 Bundle",
      es: "Lote 25,000"
    },
    location: "Vault",
    icon: "/img/Bundle_Purple.png",
    required: 1,
    items: [
      {
        id: "Purchase",
        quantity: 25000,
        quality: "normal"
      }
    ],
    reward: {
      id: "Crystalarium",
      quantity: 1,
      quality: "normal"
    }
  },
  "The_Missing_Bundle": {
    id: "The_Missing_Bundle",
    name: {
      en: "The Missing Bundle",
      es: "Lote Extraviado"
    },
    location: "Abandoned_JojaMart",
    icon: "/img/Bundle_Purple.png",
    required: 5,
    items: [
      {
        id: "Wine",
        quantity: 1,
        quality: [
          "silver",
          "gold",
          "iridium"
        ]
      },
      {
        id: "Dinosaur_Mayonnaise",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Prismatic_Shard",
        quantity: 1,
        quality: "normal"
      },
      {
        id: "Ancient_Fruit",
        quantity: 1,
        quality: [
          "gold",
          "iridium"
        ]
      },
      {
        id: "Void_Salmon",
        quantity: 1,
        quality: [
          "gold",
          "iridium"
        ]
      },
      {
        id: "Caviar",
        quantity: 1,
        quality: "normal"
      }
    ]
  }
}

export default BUNDLE_MAP;
