export const headerSlides = [
  { id: 1, price: "Starting from: $49.99", title: "Exclusive collection", subtitle: "for everyone", button: "Explore now", image: "/images/hero-bg.png", },
  { id: 2, price: "Starting from: $39.99", title: "New fashion", subtitle: "new season", button: "Shop now", image: "/images/hero-bg.png", },
  { id: 3, price: "Starting from: $59.99", title: "Worldwide delivery", subtitle: "Fast delivery", button: "worldwide", image: "/images/hero-bg.png", },
]

import type { IconName } from "../{components}/Icons/Icon"
type Feature = {
  id: number;
  title: string;
  desc: string;
  icon: IconName;
}

export const features: Feature[] = [
  { id: 1, title: "Free shipping", desc: "On orders over $50.00", icon: "free" },
  { id: 2, title: "Very easy to return", desc: "Just phone number", icon: "return" },
  { id: 3, title: "Worldwide delivery", desc: "Fast delivery worldwide", icon: "worldwide" },
  { id: 4, title: "Refunds policy", desc: "60 days return for any reason", icon: "policy" },
]

export const categories = [
  { id: 1, title: "For Men's", subtitle: "Starting at $24" },
  { id: 2, title: "For Women's", subtitle: "Starting at $19" },
  { id: 3, title: "Accessories", subtitle: "Explore accessories" },
]

