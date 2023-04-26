type Food = {
  id: number;
  name: string;
  emoji: string;
};

type Prices = {
  value: number;
  food: string;
  location: string;
};

type Location = {
  id: number;
  address: string;
  lat: number;
  lng: number;
  entry_date: string;
  prices: Prices[];
  average_price: number;
};

export type { Food, Prices, Location };
