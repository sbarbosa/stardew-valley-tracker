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
        },
      },
      {
        id: "Daffodil",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Foraging, buy from Pierre at Flower Dance",
        },
      },
      {
        id: "Leek",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Foraging",
        },
      },
      {
        id: "Dandelion",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Foraging, buy from Pierre at Flower Dance",
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
        },
      },
      {
        id: "Spice_Berry",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Foraging, The Cave (fruit bat option)",
        },
      },
      {
        id: "Sweet_Pea",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Foraging",
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
        },
      },
      {
        id: "Wild_Plum",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Foraging, The Cave (fruit bat option)",
        },
      },
      {
        id: "Hazelnut",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Foraging",
        },
      },
      {
        id: "Blackberry",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Foraging, The Cave (fruit bat option)",
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
        },
      },
      {
        id: "Crystal_Fruit",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Winter Foraging, dropped by Dust Sprite on floors 41-79 of The Mines",
        },
      },
      {
        id: "Snow_Yam",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Hoes soil or Artifact Spot in Winter",
        },
      },
      {
        id: "Crocus",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Winter Foraging",
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
        },
      },
      {
        id: "Wood",
        quantity: 99,
        quality: "normal",
        source: {
          en: "Chopping Trees or branches with an Axes, Carpenter's Shop",
        },
      },
      {
        id: "Stone",
        quantity: 99,
        quality: "normal",
        source: {
          en: "Smashing stones with a Pickaxes, Carpenter's Shop",
        },
      },
      {
        id: "Hardwood",
        quantity: 10,
        quality: "normal",
        source: {
          en: "Chopping Large Stump or Large Log with an upgraded Axes, smashing crates in The Mines, chopping Mahogany Tree",
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
        },
      },
      {
        id: "Cactus_Fruit",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Desert Foraging, Oasis",
        },
      },
      {
        id: "Cave_Carrot",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Mines, either smashing boxes or Hoes soil",
        },
      },
      {
        id: "Red_Mushroom",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Foraging in The Mines, Summer or Fall Foraging in the Secret Woods, The Cave (mushroom option), Tapper a Mushroom Tree, Farm Maps in Fall.",
        },
      },
      {
        id: "Purple_Mushroom",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Mines, The Cave (mushroom option), Farm Maps Foraging in Fall",
        },
      },
      {
        id: "Maple_Syrup",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Tapper Maple Tree",
        },
      },
      {
        id: "Oak_Resin",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Tapper Oak Tree, Haunted Skull",
        },
      },
      {
        id: "Pine_Tar",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Tapper Pine Tree",
        },
      },
      {
        id: "Morel",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Foraging in the Secret Woods or Farm Maps in Spring, The Cave (mushroom option)",
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
        },
      },
      {
        id: "Green_Bean",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Crops",
        },
      },
      {
        id: "Cauliflower",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Crops",
        },
      },
      {
        id: "Potato",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Spring Crops",
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
        },
      },
      {
        id: "Hot_Pepper",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
        },
      },
      {
        id: "Blueberry",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
        },
      },
      {
        id: "Melon",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
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
        },
      },
      {
        id: "Eggplant",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Crops",
        },
      },
      {
        id: "Pumpkin",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Crops",
        },
      },
      {
        id: "Yam",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Fall Crops, dropped by Duggy on floors 6-29 of The Mines (3%)",
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
        },
      },
      {
        id: "Melon",
        quantity: 1,
        quality: "gold",
        source: {
          en: "Gold quality Summer Crops",
        },
      },
      {
        id: "Pumpkin",
        quantity: 1,
        quality: "gold",
        source: {
          en: "Gold quality Fall Crops",
        },
      },
      {
        id: "Corn",
        quantity: 1,
        quality: "gold",
        source: {
          en: "Gold quality Summer / Fall Crops",
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
        },
      },
      {
        id: "Large_Egg",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Brown Chicken",
        },
        kind: "Brown",
      },
      {
        id: "Large_Egg",
        quantity: 1,
        quality: "normal",
        source: {
          en: "White Chicken",
        },
      },
      {
        id: "Large_Goat_Milk",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Goat",
        },
      },
      {
        id: "Wool",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Sheep, Rabbit",
        },
      },
      {
        id: "Duck_Egg",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Duck",
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
        },
      },
      {
        id: "Cloth",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Loom, Recycling Machine a Soggy Newspaper, Desert Trader, dropped by Mummy in Skull Cavern",
        },
      },
      {
        id: "Goat_Cheese",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cheese Press",
        },
      },
      {
        id: "Cheese",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cheese Press, Desert Trader",
        },
      },
      {
        id: "Honey",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Bee House, Oasis",
        },
      },
      {
        id: "Jelly",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Preserves Jar",
        },
      },
      {
        id: "Apple",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Apple Tree during Fall, The Cave (fruit bat option)",
        },
      },
      {
        id: "Apricot",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Apricot Tree during Spring, The Cave (fruit bat option)",
        },
      },
      {
        id: "Orange",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Orange Tree during Summer, The Cave (fruit bat option)",
        },
      },
      {
        id: "Peach",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Peach Tree during Summer, The Cave (fruit bat option)",
        },
      },
      {
        id: "Pomegranate",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Pomegranate Tree during Fall, The Cave (fruit bat option)",
        },
      },
      {
        id: "Cherry",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cherry Tree during Spring, The Cave (fruit bat option)",
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
    },
    icon: "/img/Bundle_Teal.png",
    required: 4,
    items: [
      {
        id: "Sunfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, 6am – 7pm, Spring and Summer during sunny weather.",
        },
      },
      {
        id: "Catfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers and Secret Woods, 6am – midnight, Spring and Fall. Only when raining.Can be found in Summer during rain in the Secret Woods and Witch's Swamp, Winter with a Rain Totem.",
        },
      },
      {
        id: "Shad",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, 9am – 2am, Spring, Summer, and Fall. Only when raining.",
        },
      },
      {
        id: "Tiger_Trout",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, 6am – 7pm, Fall and Winter. Can be found in any Weather.",
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
    },
    icon: "/img/Bundle_Green.png",
    required: 4,
    items: [
      {
        id: "Largemouth_Bass",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Mountain Lake, 6am – 7pm, All Seasons.",
        },
      },
      {
        id: "Carp",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Mountain Lake, Anytime, during Spring, Summer, or Fall.Found in Secret Woods or The Sewers, Anytime, All Seasons.",
        },
      },
      {
        id: "Bullhead",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Mountain Lake, Anytime, All Seasons.",
        },
      },
      {
        id: "Sturgeon",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Mountain Lake, 6am – 7pm, Summer and Winter.",
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
          en: "Found in the Ocean, 6am – 7pm, Spring, Fall, and Winter.",
        },
      },
      {
        id: "Tuna",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 6am – 7pm, Summer and Winter.",
        },
      },
      {
        id: "Red_Snapper",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 6am – 7pm, Summer and Fall. Only when raining.",
        },
      },
      {
        id: "Tilapia",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 6am – 2pm, Summer and Fall.",
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
          en: "Found in Rivers, the Mountain Lake, and Cindersap Forest Pond, 12pm – 2am, Fall ( Winter with Rain Totem.) Only when raining.",
        },
      },
      {
        id: "Bream",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in Rivers, 6pm – 2am, All Seasons.",
        },
      },
      {
        id: "Eel",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Ocean, 4pm – 2am, Spring or Fall. Only when raining.",
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
        },
      },
      {
        id: "Crayfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (freshwater)",
        },
      },
      {
        id: "Crab",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), drops from Rock Crab or Lava Crab in The Mines",
        },
      },
      {
        id: "Cockle",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), The Beach Foraging",
        },
      },
      {
        id: "Mussel",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), The Beach Foraging",
        },
      },
      {
        id: "Shrimp",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean)",
        },
      },
      {
        id: "Snail",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (freshwater)",
        },
      },
      {
        id: "Periwinkle",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (freshwater)",
        },
      },
      {
        id: "Oyster",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), The Beach Foraging",
        },
      },
      {
        id: "Clam",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Caught in Crab Pot (ocean), The Beach Foraging",
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
          en: "Found in the Ocean, 12pm – 4pm, Summer during sunny weather.",
        },
      },
      {
        id: "Ghostfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in ponds in The Mines floors 20 and 60, Anytime, All Seasons. May also be dropped by Ghost.",
        },
      },
      {
        id: "Sandfish",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the pond in The Desert, 6am – 8pm, All Seasons.",
        },
      },
      {
        id: "Woodskip",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Found in the Secret Woods and the Farm Maps, Anytime, All Seasons.",
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
        },
      },
      {
        id: "Iron_Bar",
        quantity: 1,
        quality: "normal",
        source: {
          en: 'Smelting Iron Ore in the Furnace, Crafting the "Transmute (Fe)" recipe',
        },
      },
      {
        id: "Gold_Bar",
        quantity: 1,
        quality: "normal",
        source: {
          en: 'Smelting Gold Ore in the Furnace, Crafting the "Transmute (Au)" recipe',
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
        },
      },
      {
        id: "Earth_Crystal",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Minerals on floors 1-39 of The Mines, Geode, Omni Geode, drop from Duggy in the Mines (floors 6-29)",
        },
      },
      {
        id: "Frozen_Tear",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Minerals on floors 41-79 of The Mines, Frozen Geode, Omni Geode, drop from Dust Sprite in the Mines (floors 41-79)",
        },
      },
      {
        id: "Fire_Quartz",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Minerals on floors 81-119 of The Mines, Magma Geode, Omni Geode",
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
        },
      },
      {
        id: "Bat_Wing",
        quantity: 10,
        quality: "normal",
        source: {
          en: "Dropped by Bats in The Mines or the Skull Cavern",
        },
      },
      {
        id: "Solar_Essence",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Dropped by Ghost, Squid Kid, or Metal Head in The Mines, dropped by Mummy or Bats in the Skull Cavern ; produced by Sunfish in Fish Pond ; buy from Krobus",
        },
      },
      {
        id: "Void_Essence",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Dropped by Shadow Brute or Shadow Shaman in The Mines or Serpent in the Skull Cavern ; produced by Void Salmon in Fish Pond ; buy from Krobus",
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
        },
      },
      {
        id: "Fiddlehead_Fern",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Foraging in the Secret Woods, Foraging on Prehistoric Floors at the Skull Cavern, Cutting down Green Rain Trees",
        },
      },
      {
        id: "Truffle",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Pig",
        },
      },
      {
        id: "Poppy",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops",
        },
      },
      {
        id: "Maki_Roll",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cooking (recipe sources: The Queen of Sauce, The Stardrop Saloon )",
        },
      },
      {
        id: "Fried_Egg",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Cooking",
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
        },
      },
      {
        id: "Sea_Urchin",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Beach Foraging, after using 300 Wood to fix the bridge to the right side of The Beach or any side of the beach during The Beach ; foraging in the Beach Farm",
        },
      },
      {
        id: "Sunflower",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer / Fall Crops",
        },
      },
      {
        id: "Duck_Feather",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Duck",
        },
      },
      {
        id: "Aquamarine",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Mining, boxes in The Mines, Fishing",
        },
      },
      {
        id: "Red_Cabbage",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Summer Crops ( Red Cabbage Seeds are available at Pierre's General Store in year 2+, at the Traveling Cart, or dropped by Serpent, Mummy, and Slimes )",
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
        },
      },
      {
        id: "Nautilus_Shell",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Winter The Beach Foraging, Farm Maps Foraging during any season, Random gift from Demetrius",
        },
      },
      {
        id: "Chub",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Can be found in the mountain lake and river during all seasons, any time.",
        },
      },
      {
        id: "Frozen_Geode",
        quantity: 1,
        quality: "normal",
        source: {
          en: "The Mines floors 41-79",
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
        },
      },
      {
        id: "Hay",
        quantity: 10,
        quality: "normal",
        source: {
          en: "Purchase at Marnie's Ranch or Desert Trader, or harvest from Grass or Wheat.",
        },
      },
      {
        id: "Apple",
        quantity: 3,
        quality: "normal",
        source: {
          en: "Apple Tree during Fall, The Cave (fruit bat option)",
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
        },
      },
      {
        id: "Wine",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Keg",
        },
      },
      {
        id: "Rabbit's_Foot",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Rabbit, Serpent drop in Skull Cavern (0.8%)",
        },
      },
      {
        id: "Pomegranate",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Pomegranate Tree during Fall, The Cave (fruit bat option)",
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
        },
      },
      {
        id: "Dinosaur_Mayonnaise",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Mayonnaise Machine",
        },
      },
      {
        id: "Prismatic_Shard",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Mining",
        },
      },
      {
        id: "Ancient_Fruit",
        quantity: 1,
        quality: ["gold", "iridium"],
        source: {
          en: "Crops",
        },
      },
      {
        id: "Void_Salmon",
        quantity: 1,
        quality: ["gold", "iridium"],
        source: {
          en: "Fishing in the Witch's Swamp",
        },
      },
      {
        id: "Caviar",
        quantity: 1,
        quality: "normal",
        source: {
          en: "Preserves Jar product from Sturgeon Roe",
        },
      },
    ],
  },
];

export default BUNDLES;
