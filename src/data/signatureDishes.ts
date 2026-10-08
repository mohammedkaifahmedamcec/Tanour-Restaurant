import { images } from './images';

export interface SignatureDish {
  id: string;
  name: string;
  /** Short appetizing description — one line, no invented facts */
  description: string;
  price: number | string;
  category: string;
  /** Why this dish is featured — internal note, not shown on site */
  rationale: string;
  imageId: keyof typeof images;
  /** Actual menu item id — links this signature back to the real menu */
  menuItemId: string;
  isVeg: boolean;
}

/**
 * TANOUR SIGNATURES
 * -----------------
 * Four dishes chosen to represent Tanour's range:
 *   grill · biryani · curry · shawarma
 *
 * Each entry maps to a real item in menu.ts (via menuItemId).
 * Descriptions here are editorial — no ratings, awards, or sales claims.
 */
export const signatureDishes: SignatureDish[] = [
  {
    id: 'sig-1',
    name: 'Dragon Alfaham',
    description:
      'Charcoal-grilled chicken, slow-turned over open flame, finished with a fiery dragon glaze.',
    price: '140 / 260 / 480',
    category: 'Arabian Starters',
    rationale: 'Marked "Best Seller" on our own menu.',
    imageId: 'signature-dragon-alfaham',
    menuItemId: 'a4',
    isVeg: false,
  },
  {
    id: 'sig-2',
    name: 'Mutton Biryani',
    description:
      'Aged basmati layered with slow-cooked mutton, saffron, and whole spices — sealed and dum-cooked.',
    price: 260,
    category: 'Biryani',
    rationale: 'Our flagship biryani — highest-craft dish in the Biryani section.',
    imageId: 'signature-mutton-biryani',
    menuItemId: 'bi11',
    isVeg: false,
  },
  {
    id: 'sig-3',
    name: 'Butter Chicken',
    description:
      'Tandoor-charred chicken simmered in a silky tomato and butter gravy, finished with cream.',
    price: '160 / 280',
    category: 'Chicken Gravies',
    rationale: 'Anchor of our gravies — a dish every Indian menu is measured by.',
    imageId: 'signature-butter-chicken',
    menuItemId: 'cg8',
    isVeg: false,
  },
  {
    id: 'sig-4',
    name: 'Shawarma Plate',
    description:
      'Slow-roasted spiced chicken, shredded to order and served with garlic sauce and warm bread.',
    price: '150 / 160',
    category: 'Shawarma',
    rationale: 'Our Arabian-street-food signature — served on roll or plate.',
    imageId: 'signature-shawarma',
    menuItemId: 'sh2',
    isVeg: false,
  },
];

/**
 * Optional veg signature — shown if/when we want balance.
 * Currently unused but kept ready.
 */
export const vegSignature: SignatureDish = {
  id: 'sig-veg',
  name: 'Paneer Butter Masala',
  description:
    'Soft paneer in a rich tomato-butter gravy, balanced with cream and a hint of kasuri methi.',
  price: 180,
  category: 'Veg Indian Gravies',
  rationale: 'Our flagship vegetarian gravy.',
  imageId: 'menu-preview-curry',
  menuItemId: 'vg10',
  isVeg: true,
};