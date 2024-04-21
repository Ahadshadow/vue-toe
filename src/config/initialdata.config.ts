export type City = Readonly<{
  city: string;
  full_name: string;
  adjacentCities: string[];
  coords: [number, number];
  adjacentCityFullNames: string[];
}>;

export const cityDataInitial: City[] = [
  {
    city: "ALEX",
    full_name: "Alexandroupoli",
    adjacentCities: ["EVROSA", "KOM", "ORE"],
    coords: [40.845718, 25.873962],
    adjacentCityFullNames: ["Evros", "Komotini", "Orestiada"],
  },
  {
    city: "BOE",
    full_name: "Viotia",
    adjacentCities: ["LEI", "MES", "PYR"],
    coords: [38.33333, 23.0],
    adjacentCityFullNames: ["Leivadia", "Mesolongi", "Pyrgos"],
  },
  {
    city: "DRA",
    full_name: "Drama",
    adjacentCities: ["KAV", "THE", "SER"],
    coords: [41.1502, 24.1469],
    adjacentCityFullNames: ["Kavala", "Thessaloniki", "Serres"],
  },
  {
    city: "EVROSA",
    full_name: "Evros",
    adjacentCities: ["ALEX", "KOM", "ORE"],
    coords: [41.433, 26.55],
    adjacentCityFullNames: ["Alexandroupoli", "Komotini", "Orestiada"],
  },
  {
    city: "GRE",
    full_name: "Grevena",
    adjacentCities: ["KOZ", "LAR", "IOAN"],
    coords: [40.0838, 21.4273],
    adjacentCityFullNames: ["Kozani", "Larisa", "Ioannina"],
  },
  {
    city: "IOAN",
    full_name: "Ioannina",
    adjacentCities: ["GRE", "KOZ", "LAR"],
    coords: [39.665, 20.8537],
    adjacentCityFullNames: ["Grevena", "Kozani", "Larisa"],
  },
  {
    city: "KAR",
    full_name: "Karditsa",
    adjacentCities: ["KOZ", "LAR", "GRE"],
    coords: [39.364, 21.9214],
    adjacentCityFullNames: ["Kozani", "Larisa", "Grevena"],
  },
  {
    city: "KAV",
    full_name: "Kavala",
    adjacentCities: ["DRA", "SER", "THE"],
    coords: [40.9376, 24.4129],
    adjacentCityFullNames: ["Drama", "Serres", "Thessaloniki"],
  },
  {
    city: "KIL",
    full_name: "Kilkis",
    adjacentCities: ["THE", "SER", "KOZ"],
    coords: [40.9937, 22.8754],
    adjacentCityFullNames: ["Thessaloniki", "Serres", "Kozani"],
  },
  {
    city: "KOM",
    full_name: "Komotini",
    adjacentCities: ["ORE", "ALEX", "EVROSA"],
    coords: [41.1, 25.4167],
    adjacentCityFullNames: ["Orestiada", "Alexandroupoli", "Evros"],
  },
  {
    city: "KOZ",
    full_name: "Kozani",
    adjacentCities: ["LAR", "GRE", "THE"],
    coords: [40.3, 21.7833],
    adjacentCityFullNames: ["Larisa", "Grevena", "Thessaloniki"],
  },
  {
    city: "LAR",
    full_name: "Larisa",
    adjacentCities: ["GRE", "KOZ", "IOAN"],
    coords: [39.6417, 22.4167],
    adjacentCityFullNames: ["Grevena", "Kozani", "Ioannina"],
  },
  {
    city: "LEI",
    full_name: "Leivadia",
    adjacentCities: ["BOE", "PYR", "MES"],
    coords: [34.9491, 33.6275],
    adjacentCityFullNames: ["Viotia", "Pyrgos", "Mesolongi"],
  },
  {
    city: "MES",
    full_name: "Mesolongi",
    adjacentCities: ["BOE", "PYR", "LEI"],
    coords: [38.3687, 21.4304],
    adjacentCityFullNames: ["Viotia", "Pyrgos", "Leivadia"],
  },
  {
    city: "ORE",
    full_name: "Orestiada",
    adjacentCities: ["EVROSA", "ALEX", "KOM"],
    coords: [41.5014, 26.5311],
    adjacentCityFullNames: ["Evros", "Alexandroupoli", "Komotini"],
  },
  {
    city: "PYR",
    full_name: "Pyrgos",
    adjacentCities: ["MES", "BOE", "LEI"],
    coords: [37.6718, 21.4432],
    adjacentCityFullNames: ["Mesolongi", "Viotia", "Leivadia"],
  },
  {
    city: "SER",
    full_name: "Serres",
    adjacentCities: ["KIL", "THE", "KAV"],
    coords: [41.0864, 23.5484],
    adjacentCityFullNames: ["Kilkis", "Thessaloniki", "Kavala"],
  },
  {
    city: "THE",
    full_name: "Thessaloniki",
    adjacentCities: ["KAV", "KIL", "KOZ"],
    coords: [40.6401, 22.9444],
    adjacentCityFullNames: ["Kavala", "Kilkis", "Kozani"],
  },
];
