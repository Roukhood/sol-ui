import type { ComponentType } from "react";
import { HeroOne, HeroTwo } from "./blocks";
import {
  PaymentOne,
  PaymentThree,
  PaymentTwo,
  PricingOne,
  PricingTwo,
} from "./components";

export type RegistryType = "block" | "component";

export type RegistryItem = {
  slug: string;
  title: string;
  category: string;
  type: RegistryType;
  component: ComponentType;
};

/** Blocks render on `/bank-kit/overview`. Components power docs content + sidebar. */
export const registry: RegistryItem[] = [
  {
    slug: "hero-sections-one",
    title: "Hero One",
    category: "hero",
    type: "block",
    component: HeroOne,
  },
  {
    slug: "hero-sections-two",
    title: "Hero Two",
    category: "hero",
    type: "block",
    component: HeroTwo,
  },
  {
    slug: "payments-one",
    title: "Payment One",
    category: "payments",
    type: "component",
    component: PaymentOne,
  },
  {
    slug: "payments-two",
    title: "Payment Two",
    category: "payments",
    type: "component",
    component: PaymentTwo,
  },
  {
    slug: "payments-three",
    title: "Payment Three",
    category: "payments",
    type: "component",
    component: PaymentThree,
  },
  {
    slug: "pricing-one",
    title: "Pricing One",
    category: "pricing",
    type: "component",
    component: PricingOne,
  },
  {
    slug: "pricing-two",
    title: "Pricing Two",
    category: "pricing",
    type: "component",
    component: PricingTwo,
  },

];

export const blockItems = registry.filter((item) => item.type === "block");
export const componentItems = registry.filter(
  (item) => item.type === "component",
);
