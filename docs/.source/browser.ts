// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"Installation.mdx": () => import("../content/docs/Installation.mdx?collection=docs"), "introduction.mdx": () => import("../content/docs/introduction.mdx?collection=docs"), "components/badge.mdx": () => import("../content/docs/components/badge.mdx?collection=docs"), "components/calendar.mdx": () => import("../content/docs/components/calendar.mdx?collection=docs"), "components/card.mdx": () => import("../content/docs/components/card.mdx?collection=docs"), "components/discrete-tabs.mdx": () => import("../content/docs/components/discrete-tabs.mdx?collection=docs"), "components/filter.mdx": () => import("../content/docs/components/filter.mdx?collection=docs"), "components/item-cart.mdx": () => import("../content/docs/components/item-cart.mdx?collection=docs"), "components/money-checkout.mdx": () => import("../content/docs/components/money-checkout.mdx?collection=docs"), "components/pin-input.mdx": () => import("../content/docs/components/pin-input.mdx?collection=docs"), "components/pop-card.mdx": () => import("../content/docs/components/pop-card.mdx?collection=docs"), "components/profile-card.mdx": () => import("../content/docs/components/profile-card.mdx?collection=docs"), }),
};
export default browserCollections;