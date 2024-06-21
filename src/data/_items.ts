import type { Item, ItemId } from "./_types";

const ITEMS_MAP: Record<ItemId, Item> = {
  Wild_Horseradish: {
    id: "Wild_Horseradish",
    name: {
      en: "Wild Horseradish",
      es: "Rábano silvestre",
    },
    icon: "/img/36px-Wild_Horseradish.png",
    season: ["spring"],
  },
  Daffodil: {
    id: "Daffodil",
    name: {
      en: "Daffodil",
      es: "Narciso",
    },
    icon: "/img/36px-Daffodil.png",
    season: ["spring"],
  },
  Leek: {
    id: "Leek",
    name: {
      en: "Leek",
      es: "Puerro",
    },
    icon: "/img/36px-Leek.png",
    season: ["spring"],
  },
  Dandelion: {
    id: "Dandelion",
    name: {
      en: "Dandelion",
      es: "Diente de león",
    },
    icon: "/img/36px-Dandelion.png",
    season: ["spring"],
  },
  Spring_Seeds: {
    id: "Spring_Seeds",
    name: {
      en: "Spring Seeds",
      es: "Semillas primaverales",
    },
    icon: "/img/36px-Spring_Seeds.png",
  },
  Grape: {
    id: "Grape",
    name: {
      en: "Grape",
      es: "Uva",
    },
    icon: "/img/36px-Grape.png",
    season: ["summer", "fall"],
  },
  Spice_Berry: {
    id: "Spice_Berry",
    name: {
      en: "Spice Berry",
      es: "Baya especiada",
    },
    icon: "/img/36px-Spice_Berry.png",
    season: ["summer"],
  },
  Sweet_Pea: {
    id: "Sweet_Pea",
    name: {
      en: "Sweet Pea",
      es: "Guisante dulce",
    },
    icon: "/img/36px-Sweet_Pea.png",
    season: ["summer"],
  },
  Summer_Seeds: {
    id: "Summer_Seeds",
    name: {
      en: "Summer Seeds",
      es: "Semillas veraniegas",
    },
    icon: "/img/36px-Summer_Seeds.png",
  },
  Common_Mushroom: {
    id: "Common_Mushroom",
    name: {
      en: "Common Mushroom",
      es: "Seta común",
    },
    icon: "/img/36px-Common_Mushroom.png",
    season: ["fall", "spring", "fall"],
  },
  Wild_Plum: {
    id: "Wild_Plum",
    name: {
      en: "Wild Plum",
      es: "Ciruela salvaje",
    },
    icon: "/img/36px-Wild_Plum.png",
    season: ["fall"],
  },
  Hazelnut: {
    id: "Hazelnut",
    name: {
      en: "Hazelnut",
      es: "Avellana",
    },
    icon: "/img/36px-Hazelnut.png",
    season: ["fall"],
  },
  Blackberry: {
    id: "Blackberry",
    name: {
      en: "Blackberry",
      es: "Mora",
    },
    icon: "/img/36px-Blackberry.png",
    season: ["fall"],
  },
  Fall_Seeds: {
    id: "Fall_Seeds",
    name: {
      en: "Fall Seeds",
      es: "Semillas otoñales",
    },
    icon: "/img/36px-Fall_Seeds.png",
  },
  Winter_Root: {
    id: "Winter_Root",
    name: {
      en: "Winter Root",
      es: "Raíz invernal",
    },
    icon: "/img/36px-Winter_Root.png",
    season: ["winter"],
  },
  Crystal_Fruit: {
    id: "Crystal_Fruit",
    name: {
      en: "Crystal Fruit",
      es: "Fruta de cristal",
    },
    icon: "/img/36px-Crystal_Fruit.png",
    season: ["winter"],
  },
  Snow_Yam: {
    id: "Snow_Yam",
    name: {
      en: "Snow Yam",
      es: "Ñame nival",
    },
    icon: "/img/36px-Snow_Yam.png",
    season: ["winter"],
  },
  Crocus: {
    id: "Crocus",
    name: {
      en: "Crocus",
      es: "Azafrán",
    },
    icon: "/img/36px-Crocus.png",
    season: ["winter"],
  },
  Winter_Seeds: {
    id: "Winter_Seeds",
    name: {
      en: "Winter Seeds",
      es: "Semillas invernales",
    },
    icon: "/img/36px-Winter_Seeds.png",
  },
  Wood: {
    id: "Wood",
    name: {
      en: "Wood",
      es: "Madera",
    },
    icon: "/img/36px-Wood.png",
  },
  Stone: {
    id: "Stone",
    name: {
      en: "Stone",
      es: "Piedra",
    },
    icon: "/img/36px-Stone.png",
  },
  Hardwood: {
    id: "Hardwood",
    name: {
      en: "Hardwood",
      es: "Madera noble",
    },
    icon: "/img/36px-Hardwood.png",
  },
  Charcoal_Kiln: {
    id: "Charcoal_Kiln",
    name: {
      en: "Charcoal Kiln",
      es: "Horno de carbón",
    },
    icon: "/img/36px-Charcoal_Kiln.png",
  },
  Coconut: {
    id: "Coconut",
    name: {
      en: "Coconut",
      es: "Coco",
    },
    icon: "/img/36px-Coconut.png",
  },
  Cactus_Fruit: {
    id: "Cactus_Fruit",
    name: {
      en: "Cactus Fruit",
      es: "Higo chumbo",
    },
    icon: "/img/36px-Cactus_Fruit.png",
  },
  Cave_Carrot: {
    id: "Cave_Carrot",
    name: {
      en: "Cave Carrot",
      es: "Zanahoria cavernaria",
    },
    icon: "/img/36px-Cave_Carrot.png",
  },
  Red_Mushroom: {
    id: "Red_Mushroom",
    name: {
      en: "Red Mushroom",
      es: "Seta roja",
    },
    icon: "/img/36px-Red_Mushroom.png",
    season: ["summer", "fall"],
  },
  Purple_Mushroom: {
    id: "Purple_Mushroom",
    name: {
      en: "Purple Mushroom",
      es: "Seta lila",
    },
    icon: "/img/36px-Purple_Mushroom.png",
    season: ["fall"],
  },
  Maple_Syrup: {
    id: "Maple_Syrup",
    name: {
      en: "Maple Syrup",
      es: "Jarabe de arce",
    },
    icon: "/img/36px-Maple_Syrup.png",
  },
  Oak_Resin: {
    id: "Oak_Resin",
    name: {
      en: "Oak Resin",
      es: "Resina de roble",
    },
    icon: "/img/36px-Oak_Resin.png",
  },
  Pine_Tar: {
    id: "Pine_Tar",
    name: {
      en: "Pine Tar",
      es: "Brea de pino",
    },
    icon: "/img/36px-Pine_Tar.png",
  },
  Morel: {
    id: "Morel",
    name: {
      en: "Morel",
      es: "Colmenilla",
    },
    icon: "/img/36px-Morel.png",
    season: ["spring"],
  },
  "Autumn's_Bounty": {
    id: "Autumn's_Bounty",
    name: {
      en: "Autumn's Bounty",
      es: "Botín otoñal",
    },
    icon: "/img/36px-Autumn's_Bounty.png",
  },
  Parsnip: {
    id: "Parsnip",
    name: {
      en: "Parsnip",
      es: "Chirivía",
    },
    icon: "/img/36px-Parsnip.png",
    season: ["spring"],
  },
  Green_Bean: {
    id: "Green_Bean",
    name: {
      en: "Green Bean",
      es: "Judía verde",
    },
    icon: "/img/36px-Green_Bean.png",
    season: ["spring"],
  },
  Cauliflower: {
    id: "Cauliflower",
    name: {
      en: "Cauliflower",
      es: "Coliflor",
    },
    icon: "/img/36px-Cauliflower.png",
    season: ["spring"],
  },
  Potato: {
    id: "Potato",
    name: {
      en: "Potato",
      es: "Patata",
    },
    icon: "/img/36px-Potato.png",
    season: ["spring"],
  },
  Speed_Gro: {
    id: "Speed_Gro",
    name: {
      en: "Speed-Gro",
      es: "Acelerador básico",
    },
    icon: "/img/36px-Speed_Gro.png",
  },
  Tomato: {
    id: "Tomato",
    name: {
      en: "Tomato",
      es: "Tomate",
    },
    icon: "/img/36px-Tomato.png",
    season: ["summer"],
  },
  Hot_Pepper: {
    id: "Hot_Pepper",
    name: {
      en: "Hot Pepper",
      es: "Chile",
    },
    icon: "/img/36px-Hot_Pepper.png",
    season: ["summer"],
  },
  Blueberry: {
    id: "Blueberry",
    name: {
      en: "Blueberry",
      es: "Arándano",
    },
    icon: "/img/36px-Blueberry.png",
    season: ["summer"],
  },
  Melon: {
    id: "Melon",
    name: {
      en: "Melon",
      es: "Melón",
    },
    icon: "/img/36px-Melon.png",
    season: ["summer"],
  },
  Quality_Sprinkler: {
    id: "Quality_Sprinkler",
    name: {
      en: "Quality Sprinkler",
      es: "Aspersor de calidad",
    },
    icon: "/img/36px-Quality_Sprinkler.png",
  },
  Corn: {
    id: "Corn",
    name: {
      en: "Corn",
      es: "Maíz",
    },
    icon: "/img/36px-Corn.png",
    season: ["summer", "fall"],
  },
  Eggplant: {
    id: "Eggplant",
    name: {
      en: "Eggplant",
      es: "Berenjena",
    },
    icon: "/img/36px-Eggplant.png",
    season: ["fall"],
  },
  Pumpkin: {
    id: "Pumpkin",
    name: {
      en: "Pumpkin",
      es: "Calabaza",
    },
    icon: "/img/36px-Pumpkin.png",
    season: ["fall"],
  },
  Yam: {
    id: "Yam",
    name: {
      en: "Yam",
      es: "Ñame",
    },
    icon: "/img/36px-Yam.png",
    season: ["fall"],
  },
  Bee_House: {
    id: "Bee_House",
    name: {
      en: "Bee House",
      es: "Colmena",
    },
    icon: "/img/36px-Bee_House.png",
  },
  Preserves_Jar: {
    id: "Preserves_Jar",
    name: {
      en: "Preserves Jar",
      es: "Envasadora",
    },
    icon: "/img/36px-Preserves_Jar.png",
  },
  Large_Milk: {
    id: "Large_Milk",
    name: {
      en: "Large Milk",
      es: "Leche XXL",
    },
    icon: "/img/36px-Large_Milk.png",
  },
  Large_Egg: {
    id: "Large_Egg",
    name: {
      en: "Large Egg",
      es: "Huevo XXL",
    },
    icon: "/img/36px-Large_Egg.png",
  },
  Large_Goat_Milk: {
    id: "Large_Goat_Milk",
    name: {
      en: "Large Goat Milk",
      es: "Leche de cabra XXL",
    },
    icon: "/img/36px-Large_Goat_Milk.png",
  },
  Wool: {
    id: "Wool",
    name: {
      en: "Wool",
      es: "Lana",
    },
    icon: "/img/36px-Wool.png",
  },
  Duck_Egg: {
    id: "Duck_Egg",
    name: {
      en: "Duck Egg",
      es: "Huevo de pato",
    },
    icon: "/img/36px-Duck_Egg.png",
  },
  Cheese_Press: {
    id: "Cheese_Press",
    name: {
      en: "Cheese Press",
      es: "Prensa de queso",
    },
    icon: "/img/36px-Cheese_Press.png",
  },
  Truffle_Oil: {
    id: "Truffle_Oil",
    name: {
      en: "Truffle Oil",
      es: "Aceite de trufa",
    },
    icon: "/img/36px-Truffle_Oil.png",
  },
  Cloth: {
    id: "Cloth",
    name: {
      en: "Cloth",
      es: "Tela",
    },
    icon: "/img/36px-Cloth.png",
  },
  Goat_Cheese: {
    id: "Goat_Cheese",
    name: {
      en: "Goat Cheese",
      es: "Queso de cabra",
    },
    icon: "/img/36px-Goat_Cheese.png",
  },
  Cheese: {
    id: "Cheese",
    name: {
      en: "Cheese",
      es: "Queso",
    },
    icon: "/img/36px-Cheese.png",
  },
  Honey: {
    id: "Honey",
    name: {
      en: "Honey",
      es: "Miel",
    },
    icon: "/img/36px-Honey.png",
  },
  Jelly: {
    id: "Jelly",
    name: {
      en: "Jelly",
      es: "Mermelada",
    },
    icon: "/img/36px-Jelly.png",
  },
  Apple: {
    id: "Apple",
    name: {
      en: "Apple",
      es: "Manzana",
    },
    icon: "/img/36px-Apple.png",
    season: ["fall"],
  },
  Apricot: {
    id: "Apricot",
    name: {
      en: "Apricot",
      es: "Albaricoque",
    },
    icon: "/img/36px-Apricot.png",
    season: ["spring"],
  },
  Orange: {
    id: "Orange",
    name: {
      en: "Orange",
      es: "Naranja",
    },
    icon: "/img/36px-Orange.png",
    season: ["summer"],
  },
  Peach: {
    id: "Peach",
    name: {
      en: "Peach",
      es: "Melocotón",
    },
    icon: "/img/36px-Peach.png",
    season: ["summer"],
  },
  Pomegranate: {
    id: "Pomegranate",
    name: {
      en: "Pomegranate",
      es: "Granada",
    },
    icon: "/img/36px-Pomegranate.png",
    season: ["fall"],
  },
  Cherry: {
    id: "Cherry",
    name: {
      en: "Cherry",
      es: "Cereza",
    },
    icon: "/img/36px-Cherry.png",
    season: ["spring"],
  },
  Keg: {
    id: "Keg",
    name: {
      en: "Keg",
      es: "Barril",
    },
    icon: "/img/36px-Keg.png",
  },
  Sunfish: {
    id: "Sunfish",
    name: {
      en: "Sunfish",
      es: "Pez sol",
    },
    icon: "/img/36px-Sunfish.png",
    season: ["spring", "summer"],
  },
  Catfish: {
    id: "Catfish",
    name: {
      en: "Catfish",
      es: "Pez gato",
    },
    icon: "/img/36px-Catfish.png",
    season: ["spring", "fall", "summer", "winter"],
  },
  Shad: {
    id: "Shad",
    name: {
      en: "Shad",
      es: "Sábalo",
    },
    icon: "/img/36px-Shad.png",
    season: ["spring", "summer", "fall"],
  },
  Tiger_Trout: {
    id: "Tiger_Trout",
    name: {
      en: "Tiger Trout",
      es: "Trucha tigre",
    },
    icon: "/img/36px-Tiger_Trout.png",
    season: ["fall", "winter"],
  },
  Deluxe_Bait: {
    id: "Deluxe_Bait",
    name: {
      en: "Deluxe Bait",
      es: "Cebo",
    },
    icon: "/img/36px-Deluxe_Bait.png",
  },
  Largemouth_Bass: {
    id: "Largemouth_Bass",
    name: {
      en: "Largemouth Bass",
      es: "Perca",
    },
    icon: "/img/36px-Largemouth_Bass.png",
  },
  Carp: {
    id: "Carp",
    name: {
      en: "Carp",
      es: "Carpa",
    },
    icon: "/img/36px-Carp.png",
    season: ["spring", "summer", "fall"],
  },
  Bullhead: {
    id: "Bullhead",
    name: {
      en: "Bullhead",
      es: "Siluro",
    },
    icon: "/img/36px-Bullhead.png",
  },
  Sturgeon: {
    id: "Sturgeon",
    name: {
      en: "Sturgeon",
      es: "Esturión",
    },
    icon: "/img/36px-Sturgeon.png",
    season: ["summer", "winter"],
  },
  Dressed_Spinner: {
    id: "Dressed_Spinner",
    name: {
      en: "Dressed Spinner",
      es: "Girador disfrazado",
    },
    icon: "/img/36px-Dressed_Spinner.png",
  },
  Sardine: {
    id: "Sardine",
    name: {
      en: "Sardine",
      es: "Sardina",
    },
    icon: "/img/36px-Sardine.png",
    season: ["spring", "fall", "winter"],
  },
  Tuna: {
    id: "Tuna",
    name: {
      en: "Tuna",
      es: "Atún",
    },
    icon: "/img/36px-Tuna.png",
    season: ["summer", "winter"],
  },
  Red_Snapper: {
    id: "Red_Snapper",
    name: {
      en: "Red Snapper",
      es: "Pargo colorado",
    },
    icon: "/img/36px-Red_Snapper.png",
    season: ["summer", "fall"],
  },
  Tilapia: {
    id: "Tilapia",
    name: {
      en: "Tilapia",
      es: "Tilapia",
    },
    icon: "/img/36px-Tilapia.png",
    season: ["summer", "fall"],
  },
  Warp_Totem_Beach: {
    id: "Warp_Totem_Beach",
    name: {
      en: "Warp Totem: Beach",
      es: "Tótem de viaje: Playa",
    },
    icon: "/img/36px-Warp_Totem_Beach.png",
  },
  Walleye: {
    id: "Walleye",
    name: {
      en: "Walleye",
      es: "Lucio",
    },
    icon: "/img/36px-Walleye.png",
    season: ["fall", "winter"],
  },
  Bream: {
    id: "Bream",
    name: {
      en: "Bream",
      es: "Besugo",
    },
    icon: "/img/36px-Bream.png",
  },
  Eel: {
    id: "Eel",
    name: {
      en: "Eel",
      es: "Anguila",
    },
    icon: "/img/36px-Eel.png",
    season: ["spring", "fall"],
  },
  Glow_Ring: {
    id: "Glow_Ring",
    name: {
      en: "Glow Ring",
      es: "Pequeño anillo brillante",
    },
    icon: "/img/36px-Glow_Ring.png",
  },
  Lobster: {
    id: "Lobster",
    name: {
      en: "Lobster",
      es: "Langosta",
    },
    icon: "/img/36px-Lobster.png",
  },
  Crayfish: {
    id: "Crayfish",
    name: {
      en: "Crayfish",
      es: "Cangrejo de río",
    },
    icon: "/img/36px-Crayfish.png",
  },
  Crab: {
    id: "Crab",
    name: {
      en: "Crab",
      es: "Cangrejo",
    },
    icon: "/img/36px-Crab.png",
  },
  Cockle: {
    id: "Cockle",
    name: {
      en: "Cockle",
      es: "Berberecho",
    },
    icon: "/img/36px-Cockle.png",
  },
  Mussel: {
    id: "Mussel",
    name: {
      en: "Mussel",
      es: "Mejillón",
    },
    icon: "/img/36px-Mussel.png",
  },
  Shrimp: {
    id: "Shrimp",
    name: {
      en: "Shrimp",
      es: "Gamba",
    },
    icon: "/img/36px-Shrimp.png",
  },
  Snail: {
    id: "Snail",
    name: {
      en: "Snail",
      es: "Caracol",
    },
    icon: "/img/36px-Snail.png",
  },
  Periwinkle: {
    id: "Periwinkle",
    name: {
      en: "Periwinkle",
      es: "Bígaro",
    },
    icon: "/img/36px-Periwinkle.png",
  },
  Oyster: {
    id: "Oyster",
    name: {
      en: "Oyster",
      es: "Ostra",
    },
    icon: "/img/36px-Oyster.png",
  },
  Clam: {
    id: "Clam",
    name: {
      en: "Clam",
      es: "Almeja",
    },
    icon: "/img/36px-Clam.png",
  },
  Crab_Pot: {
    id: "Crab_Pot",
    name: {
      en: "Crab Pot",
      es: "Trampa para cangrejos",
    },
    icon: "/img/36px-Crab_Pot.png",
  },
  Pufferfish: {
    id: "Pufferfish",
    name: {
      en: "Pufferfish",
      es: "Pez globo",
    },
    icon: "/img/36px-Pufferfish.png",
    season: ["summer"],
  },
  Ghostfish: {
    id: "Ghostfish",
    name: {
      en: "Ghostfish",
      es: "Pez fantasma",
    },
    icon: "/img/36px-Ghostfish.png",
  },
  Sandfish: {
    id: "Sandfish",
    name: {
      en: "Sandfish",
      es: "Lenguado",
    },
    icon: "/img/36px-Sandfish.png",
  },
  Woodskip: {
    id: "Woodskip",
    name: {
      en: "Woodskip",
      es: "Muyu",
    },
    icon: "/img/36px-Woodskip.png",
  },
  "Dish_O'_The_Sea": {
    id: "Dish_O'_The_Sea",
    name: {
      en: "Dish O' The Sea",
      es: "Plato de alta mar",
    },
    icon: "/img/36px-Dish_O'_The_Sea.png",
  },
  Copper_Bar: {
    id: "Copper_Bar",
    name: {
      en: "Copper Bar",
      es: "Lingote de cobre",
    },
    icon: "/img/36px-Copper_Bar.png",
  },
  Iron_Bar: {
    id: "Iron_Bar",
    name: {
      en: "Iron Bar",
      es: "Lingote de hierro",
    },
    icon: "/img/36px-Iron_Bar.png",
  },
  Gold_Bar: {
    id: "Gold_Bar",
    name: {
      en: "Gold Bar",
      es: "Lingote de oro",
    },
    icon: "/img/36px-Gold_Bar.png",
  },
  Furnace: {
    id: "Furnace",
    name: {
      en: "Furnace",
      es: "Horno",
    },
    icon: "/img/36px-Furnace.png",
  },
  Quartz: {
    id: "Quartz",
    name: {
      en: "Quartz",
      es: "Cuarzo",
    },
    icon: "/img/36px-Quartz.png",
  },
  Earth_Crystal: {
    id: "Earth_Crystal",
    name: {
      en: "Earth Crystal",
      es: "Cristal terrestre",
    },
    icon: "/img/36px-Earth_Crystal.png",
  },
  Frozen_Tear: {
    id: "Frozen_Tear",
    name: {
      en: "Frozen Tear",
      es: "Lágrima helada",
    },
    icon: "/img/36px-Frozen_Tear.png",
  },
  Fire_Quartz: {
    id: "Fire_Quartz",
    name: {
      en: "Fire Quartz",
      es: "Cuarzo de fuego",
    },
    icon: "/img/36px-Fire_Quartz.png",
  },
  Omni_Geode: {
    id: "Omni_Geode",
    name: {
      en: "Omni Geode",
      es: "Omnigeoda",
    },
    icon: "/img/36px-Omni_Geode.png",
  },
  Slime: {
    id: "Slime",
    name: {
      en: "Slime",
      es: "Baba",
    },
    icon: "/img/36px-Slime.png",
  },
  Bat_Wing: {
    id: "Bat_Wing",
    name: {
      en: "Bat Wing",
      es: "Ala de murciélago",
    },
    icon: "/img/36px-Bat_Wing.png",
  },
  Solar_Essence: {
    id: "Solar_Essence",
    name: {
      en: "Solar Essence",
      es: "Esencia solar",
    },
    icon: "/img/36px-Solar_Essence.png",
  },
  Void_Essence: {
    id: "Void_Essence",
    name: {
      en: "Void Essence",
      es: "Esencia sombría",
    },
    icon: "/img/36px-Void_Essence.png",
  },
  Small_Magnet_Ring: {
    id: "Small_Magnet_Ring",
    name: {
      en: "Small Magnet Ring",
      es: "Pequeño anillo magnético",
    },
    icon: "/img/36px-Small_Magnet_Ring.png",
  },
  Fiddlehead_Fern: {
    id: "Fiddlehead_Fern",
    name: {
      en: "Fiddlehead Fern",
      es: "Helecho",
    },
    icon: "/img/36px-Fiddlehead_Fern.png",
    season: ["summer"],
  },
  Truffle: {
    id: "Truffle",
    name: {
      en: "Truffle",
      es: "Trufa",
    },
    icon: "/img/36px-Truffle.png",
  },
  Poppy: {
    id: "Poppy",
    name: {
      en: "Poppy",
      es: "Amapola",
    },
    icon: "/img/36px-Poppy.png",
    season: ["summer"],
  },
  Maki_Roll: {
    id: "Maki_Roll",
    name: {
      en: "Maki Roll",
      es: "Rollitos maki",
    },
    icon: "/img/36px-Maki_Roll.png",
  },
  Fried_Egg: {
    id: "Fried_Egg",
    name: {
      en: "Fried Egg",
      es: "Huevo frito",
    },
    icon: "/img/36px-Fried_Egg.png",
  },
  Pink_Cake: {
    id: "Pink_Cake",
    name: {
      en: "Pink Cake",
      es: "Pastel rosa",
    },
    icon: "/img/36px-Pink_Cake.png",
  },
  Sea_Urchin: {
    id: "Sea_Urchin",
    name: {
      en: "Sea Urchin",
      es: "Erizo de mar",
    },
    icon: "/img/36px-Sea_Urchin.png",
  },
  Sunflower: {
    id: "Sunflower",
    name: {
      en: "Sunflower",
      es: "Girasol",
    },
    icon: "/img/36px-Sunflower.png",
    season: ["summer", "fall"],
  },
  Duck_Feather: {
    id: "Duck_Feather",
    name: {
      en: "Duck Feather",
      es: "Pluma de pato",
    },
    icon: "/img/36px-Duck_Feather.png",
  },
  Aquamarine: {
    id: "Aquamarine",
    name: {
      en: "Aquamarine",
      es: "Aguamarina",
    },
    icon: "/img/36px-Aquamarine.png",
  },
  Red_Cabbage: {
    id: "Red_Cabbage",
    name: {
      en: "Red Cabbage",
      es: "Lombarda",
    },
    icon: "/img/36px-Red_Cabbage.png",
    season: ["summer"],
  },
  Seed_Maker: {
    id: "Seed_Maker",
    name: {
      en: "Seed Maker",
      es: "Semilladora",
    },
    icon: "/img/36px-Seed_Maker.png",
  },
  Nautilus_Shell: {
    id: "Nautilus_Shell",
    name: {
      en: "Nautilus Shell",
      es: "Concha de nautilo",
    },
    icon: "/img/36px-Nautilus_Shell.png",
    season: ["winter"],
  },
  Chub: {
    id: "Chub",
    name: {
      en: "Chub",
      es: "Barbo",
    },
    icon: "/img/36px-Chub.png",
  },
  Frozen_Geode: {
    id: "Frozen_Geode",
    name: {
      en: "Frozen Geode",
      es: "Geoda de hielo",
    },
    icon: "/img/36px-Frozen_Geode.png",
  },
  Recycling_Machine: {
    id: "Recycling_Machine",
    name: {
      en: "Recycling Machine",
      es: "Máquina recicladora",
    },
    icon: "/img/36px-Recycling_Machine.png",
  },
  Wheat: {
    id: "Wheat",
    name: {
      en: "Wheat",
      es: "Trigo",
    },
    icon: "/img/36px-Wheat.png",
    season: ["summer", "fall"],
  },
  Hay: {
    id: "Hay",
    name: {
      en: "Hay",
      es: "Heno",
    },
    icon: "/img/36px-Hay.png",
  },
  Heater: {
    id: "Heater",
    name: {
      en: "Heater",
      es: "Radiador",
    },
    icon: "/img/36px-Heater.png",
  },
  Wine: {
    id: "Wine",
    name: {
      en: "Wine",
      es: "Vino",
    },
    icon: "/img/36px-Wine.png",
  },
  "Rabbit's_Foot": {
    id: "Rabbit's_Foot",
    name: {
      en: "Rabbit's Foot",
      es: "Pata de conejo",
    },
    icon: "/img/36px-Rabbit's_Foot.png",
  },
  Purchase: {
    id: "Purchase",
    name: {
      en: "Purchase",
      es: "Comprar",
    },
    icon: "/img/Bundle_Purchase.png",
  },
  Chocolate_Cake: {
    id: "Chocolate_Cake",
    name: {
      en: "Chocolate Cake",
      es: "Pastel de chocolate",
    },
    icon: "/img/36px-Chocolate_Cake.png",
  },
  Quality_Fertilizer: {
    id: "Quality_Fertilizer",
    name: {
      en: "Quality Fertilizer",
      es: "Fertilizante deluxe",
    },
    icon: "/img/36px-Quality_Fertilizer.png",
  },
  Lightning_Rod: {
    id: "Lightning_Rod",
    name: {
      en: "Lightning Rod",
      es: "Pararrayos",
    },
    icon: "/img/36px-Lightning_Rod.png",
  },
  Crystalarium: {
    id: "Crystalarium",
    name: {
      en: "Crystalarium",
      es: "Cristalario",
    },
    icon: "/img/36px-Crystalarium.png",
  },
  Dinosaur_Mayonnaise: {
    id: "Dinosaur_Mayonnaise",
    name: {
      en: "Dinosaur Mayonnaise",
      es: "Mayonesa dinosaurio",
    },
    icon: "/img/36px-Dinosaur_Mayonnaise.png",
  },
  Prismatic_Shard: {
    id: "Prismatic_Shard",
    name: {
      en: "Prismatic Shard",
      es: "Esquirla prismática",
    },
    icon: "/img/36px-Prismatic_Shard.png",
  },
  Ancient_Fruit: {
    id: "Ancient_Fruit",
    name: {
      en: "Ancient Fruit",
      es: "Fruta milenaria",
    },
    icon: "/img/36px-Ancient_Fruit.png",
  },
  Void_Salmon: {
    id: "Void_Salmon",
    name: {
      en: "Void Salmon",
      es: "Salmón sombrío",
    },
    icon: "/img/36px-Void_Salmon.png",
  },
  Caviar: {
    id: "Caviar",
    name: {
      en: "Caviar",
      es: "Caviar",
    },
    icon: "/img/36px-Caviar.png",
  },
};

export default ITEMS_MAP;
