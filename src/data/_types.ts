export const SEASON_LIST = ["spring", "summer", "fall", "winter"] as const;
export type Season = (typeof SEASON_LIST)[number];

export const WEATHER_LIST = ["sun", "rain", "green_rain", "wind", "storm", "snow"] as const;
export type Weather = (typeof WEATHER_LIST)[number];

export type Lang = "en" | "es";

export type MultyLangText = {
  en: string;
  es: string;
};

export type ItemId =
  | "Wild_Horseradish"
  | "Daffodil"
  | "Leek"
  | "Dandelion"
  | "Spring_Seeds"
  | "Grape"
  | "Spice_Berry"
  | "Sweet_Pea"
  | "Summer_Seeds"
  | "Common_Mushroom"
  | "Wild_Plum"
  | "Hazelnut"
  | "Blackberry"
  | "Fall_Seeds"
  | "Winter_Root"
  | "Crystal_Fruit"
  | "Snow_Yam"
  | "Crocus"
  | "Winter_Seeds"
  | "Wood"
  | "Stone"
  | "Hardwood"
  | "Charcoal_Kiln"
  | "Coconut"
  | "Cactus_Fruit"
  | "Cave_Carrot"
  | "Red_Mushroom"
  | "Purple_Mushroom"
  | "Maple_Syrup"
  | "Oak_Resin"
  | "Pine_Tar"
  | "Morel"
  | "Autumn's_Bounty"
  | "Parsnip"
  | "Green_Bean"
  | "Cauliflower"
  | "Potato"
  | "Speed_Gro"
  | "Tomato"
  | "Hot_Pepper"
  | "Blueberry"
  | "Melon"
  | "Quality_Sprinkler"
  | "Corn"
  | "Eggplant"
  | "Pumpkin"
  | "Yam"
  | "Bee_House"
  | "Parsnip"
  | "Melon"
  | "Pumpkin"
  | "Corn"
  | "Preserves_Jar"
  | "Large_Milk"
  | "Large_Egg"
  | "Large_Goat_Milk"
  | "Wool"
  | "Duck_Egg"
  | "Cheese_Press"
  | "Truffle_Oil"
  | "Cloth"
  | "Goat_Cheese"
  | "Cheese"
  | "Honey"
  | "Jelly"
  | "Apple"
  | "Apricot"
  | "Orange"
  | "Peach"
  | "Pomegranate"
  | "Cherry"
  | "Keg"
  | "Sunfish"
  | "Catfish"
  | "Shad"
  | "Tiger_Trout"
  | "Deluxe_Bait"
  | "Largemouth_Bass"
  | "Smallmouth_Bass"
  | "Rainbow_Trout"
  | "Salmon"
  | "Perch"
  | "Pike"
  | "Red_Mullet"
  | "Herring"
  | "Octopus"
  | "Squid"
  | "Sea_Cucumber"
  | "Super_Cucumber"
  | "Ghostfish"
  | "Stonefish"
  | "Ice_Pip"
  | "Lava_Eel"
  | "Scorpion_Carp"
  | "Flounder"
  | "Midnight_Carp"
  | "Dorado"
  | "Albacore"
  | "Lingcod"
  | "Halibut"
  | "Slimejack"
  | "Stingray"
  | "Lionfish"
  | "Blue_Discus"
  | "Goby"
  | "Midnight_Squid"
  | "Spook_Fish"
  | "Blobfish"
  | "Crimsonfish"
  | "Angler"
  | "Legend"
  | "Glacierfish"
  | "Mutant_Carp"
  | "Carp"
  | "Bullhead"
  | "Sturgeon"
  | "Dressed_Spinner"
  | "Sardine"
  | "Tuna"
  | "Red_Snapper"
  | "Tilapia"
  | "Warp_Totem_Beach"
  | "Walleye"
  | "Bream"
  | "Eel"
  | "Glow_Ring"
  | "Lobster"
  | "Crayfish"
  | "Crab"
  | "Cockle"
  | "Mussel"
  | "Shrimp"
  | "Snail"
  | "Periwinkle"
  | "Oyster"
  | "Clam"
  | "Crab_Pot"
  | "Pufferfish"
  | "Anchovy"
  | "Ghostfish"
  | "Sandfish"
  | "Woodskip"
  | "Dish_O'_The_Sea"
  | "Copper_Bar"
  | "Iron_Bar"
  | "Gold_Bar"
  | "Furnace"
  | "Quartz"
  | "Earth_Crystal"
  | "Frozen_Tear"
  | "Fire_Quartz"
  | "Omni_Geode"
  | "Slime"
  | "Bat_Wing"
  | "Solar_Essence"
  | "Void_Essence"
  | "Small_Magnet_Ring"
  | "Fiddlehead_Fern"
  | "Truffle"
  | "Poppy"
  | "Maki_Roll"
  | "Fried_Egg"
  | "Pink_Cake"
  | "Sea_Urchin"
  | "Sunflower"
  | "Duck_Feather"
  | "Aquamarine"
  | "Red_Cabbage"
  | "Seed_Maker"
  | "Purple_Mushroom"
  | "Nautilus_Shell"
  | "Chub"
  | "Frozen_Geode"
  | "Recycling_Machine"
  | "Wheat"
  | "Hay"
  | "Heater"
  | "Wine"
  | "Rabbit's_Foot"
  | "Pomegranate"
  | "Gold_Bar"
  | "Purchase"
  | "Chocolate_Cake"
  | "Quality_Fertilizer"
  | "Lightning_Rod"
  | "Crystalarium"
  | "Dinosaur_Mayonnaise"
  | "Prismatic_Shard"
  | "Ancient_Fruit"
  | "Void_Salmon"
  | "Caviar";

export type ItemQuality = "normal" | "silver" | "gold" | "iridium";

export const getQualityIcon = (quality: ItemQuality) => {
  switch (quality) {
    case "silver":
      return "/img/36px-Silver_Quality_Icon.png";
    case "gold":
      return "/img/36px-Gold_Quality_Icon.png";
    case "iridium":
      return "/img/36px-Iridium_Quality_Icon.png";
  }
  return undefined;
};

type RequiredByBundle = Omit<BundleItem, "id"> & {
  type: "bundle";
  id: BundleId;
}

export type AchivementType = "Master_Angler";

interface RequiredByAchivement {
  type: AchivementType;
}

export type RequiredBy = RequiredByBundle | RequiredByAchivement;

export interface Item {
  id: ItemId;
  name: MultyLangText;
  icon: string;
  season?: Season[];
  weather?: Weather[];
  source?: MultyLangText;
  requiredBy?: RequiredBy[];
}

export type BundleId =
  | "Spring_Foraging_Bundle"
  | "Summer_Foraging_Bundle"
  | "Fall_Foraging_Bundle"
  | "Winter_Foraging_Bundle"
  | "Construction_Bundle"
  | "Exotic_Foraging_Bundle"
  | "Spring_Crops_Bundle"
  | "Summer_Crops_Bundle"
  | "Fall_Crops_Bundle"
  | "Quality_Crops_Bundle"
  | "Animal_Bundle"
  | "Artisan_Bundle"
  | "River_Fish_Bundle"
  | "Lake_Fish_Bundle"
  | "Ocean_Fish_Bundle"
  | "Night_Fishing_Bundle"
  | "Crab_Pot_Bundle"
  | "Specialty_Fish_Bundle"
  | "Blacksmiths_Bundle"
  | "Geologists_Bundle"
  | "Adventurers_Bundle"
  | "Chefs_Bundle"
  | "Dye_Bundle"
  | "Field_Research_Bundle"
  | "Fodder_Bundle"
  | "Enchanters_Bundle"
  | "2500_Bundle"
  | "5000_Bundle"
  | "10000_Bundle"
  | "25000_Bundle"
  | "The_Missing_Bundle";

type LocationId =
  | "Crafts_Room"
  | "Pantry"
  | "Fish_Tank"
  | "Boiler_Room"
  | "Bulletin_Board"
  | "Vault"
  | "Abandoned_JojaMart";

export const BUNDLE_LOCATION_REWARDS: Record<LocationId, string> = {
  Crafts_Room: "Greenhouse",
  Boiler_Room: "Minecarts",
  Vault: "Bus Repair",
  Bulletin_Board: "Bridge Repair",
  Fish_Tank: "Glittering Boulder",
  Pantry: "Greenhouse",
  Abandoned_JojaMart: "Movie_Theater",
};

// Source: https://stardewvalleywiki.com/Bundles
export interface BundleItem {
  id: ItemId;
  kind?: string;
  quantity: number;
  quality: ItemQuality | ItemQuality[];
}
export interface Bundle {
  id: BundleId;
  name: MultyLangText;
  location: LocationId;
  help?: MultyLangText;
  icon: string;
  items: BundleItem[];
  required: number;
  reward?: BundleItem;
}
