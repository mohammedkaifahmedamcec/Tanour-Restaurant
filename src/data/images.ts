/**
 * TANOUR IMAGE SYSTEM
 * -------------------
 * All photography for the site lives here.
 *
 * CURRENT STATE: Placeholder Unsplash URLs (food/restaurant photography).
 *                 These are for layout/visual preview only.
 *
 * TO GO LIVE: Replace each `src` value with your real Tanour photo URL.
 *             Keep the same `id` keys so nothing else needs to change.
 *
 * RECOMMENDED SHOOTS (for when you photograph the real restaurant):
 *  - hero:             Wide shot of your best-looking grill platter, moody lighting
 *  - signature-*:      One photo per signature dish, overhead, natural light
 *  - story:            Chef at the grill / tandoor, action shot
 *  - gallery-*:        Interior, exterior, team, plating, packaging
 *  - location:         Restaurant exterior at dusk with signage visible
 */

export interface SiteImage {
    id: string;
    src: string;
    alt: string;
    /** Where to shoot the real photo when you replace this */
    shootNote?: string;
}

export const images: Record<string, SiteImage> = {
    // ---------- HERO ----------
    hero: {
        id: 'hero',
        src: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2400&auto=format&fit=crop',
        alt: 'Charcoal-grilled chicken platter with smoke rising',
        shootNote: 'Hero: wide, moody grill shot — 2400px wide minimum',
    },

    // ---------- SIGNATURE DISHES ----------
    'signature-dragon-alfaham': {
        id: 'signature-dragon-alfaham',
        src: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?q=80&w=1600&auto=format&fit=crop',
        alt: 'Whole grilled chicken with charred spice crust',
        shootNote: 'Dragon Alfaham — straight-on, dark slate or brass plate',
    },
    'signature-mutton-biryani': {
        id: 'signature-mutton-biryani',
        src: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1600&auto=format&fit=crop',
        alt: 'Fragrant mutton biryani served in a copper handi',
        shootNote: 'Mutton Biryani — in handi, saffron rice visible on top',
    },
    'signature-butter-chicken': {
        id: 'signature-butter-chicken',
        src: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1600&auto=format&fit=crop',
        alt: 'Creamy butter chicken in a dark bowl with cream swirl',
        shootNote: 'Butter Chicken — close overhead, cream swirl on top',
    },
    'signature-shawarma': {
        id: 'signature-shawarma',
        src: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=1600&auto=format&fit=crop',
        alt: 'Shawarma wrap sliced open showing grilled chicken and sauces',
        shootNote: 'Shawarma Plate — sliced roll + dip bowl, marble surface',
    },

    // ---------- STORY / PROCESS ----------
    'story-grill': {
        id: 'story-grill',
        src: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2000&auto=format&fit=crop',
        alt: 'Chef tending skewers over a charcoal grill',
        shootNote: 'Chef at the grill — hands and skewers visible, no face required',
    },
    'story-spices': {
        id: 'story-spices',
        src: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1600&auto=format&fit=crop',
        alt: 'Assorted Indian whole spices in brass bowls',
        shootNote: 'Spice flat-lay — brass bowls on dark surface',
    },

    // ---------- MENU CATEGORY PREVIEW TILES ----------
    'menu-preview-biryani': {
        id: 'menu-preview-biryani',
        src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1400&auto=format&fit=crop',
        alt: 'Biryani rice close-up with garnishes',
        shootNote: 'Biryani close-up — hero for Biryani category tile',
    },
    'menu-preview-grill': {
        id: 'menu-preview-grill',
        src: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=1400&auto=format&fit=crop',
        alt: 'Mixed grill platter with kebabs and char marks',
        shootNote: 'Mixed grill platter — hero for Arabian Starters tile',
    },
    'menu-preview-shawarma': {
        id: 'menu-preview-shawarma',
        src: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1400&auto=format&fit=crop',
        alt: 'Shawarma wrap being assembled',
        shootNote: 'Shawarma being wrapped — for Shawarma category tile',
    },
    'menu-preview-curry': {
        id: 'menu-preview-curry',
        src: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?q=80&w=1400&auto=format&fit=crop',
        alt: 'Rich Indian curry in a copper vessel',
        shootNote: 'Curry close-up — for Chicken Gravies tile',
    },

    // ---------- GALLERY ----------
    'gallery-1': {
        id: 'gallery-1',
        src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600&auto=format&fit=crop',
        alt: 'Warm restaurant interior with ambient lighting',
        shootNote: 'Interior wide — dining area with warm lighting',
    },
    'gallery-2': {
        id: 'gallery-2',
        src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1600&auto=format&fit=crop',
        alt: 'Diners enjoying a meal at a restaurant table',
        shootNote: 'Diners mid-meal — candid, no posed smiles',
    },
    'gallery-3': {
        id: 'gallery-3',
        src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
        alt: 'Overhead shot of shared plates on a table',
        shootNote: 'Overhead table spread — 6+ dishes, shared plates',
    },
    'gallery-4': {
        id: 'gallery-4',
        src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop',
        alt: 'Restaurant entrance at dusk with warm glow',
        shootNote: 'Exterior at dusk — signage visible, warm interior glow',
    },
    'gallery-5': {
        id: 'gallery-5',
        src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1600&auto=format&fit=crop',
        alt: 'Chef plating a dish in the kitchen',
        shootNote: 'Chef plating — hands in frame, dish center',
    },
    'gallery-6': {
        id: 'gallery-6',
        src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1600&auto=format&fit=crop',
        alt: 'Close-up of grilled meat with spice rub',
        shootNote: 'Grill macro — texture of char + spice visible',
    },

    // ---------- LOCATION ----------
    location: {
        id: 'location',
        src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1600&auto=format&fit=crop',
        alt: 'Restaurant exterior with warm signage at night',
        shootNote: 'JP Nagar exterior with "Tanour" signage visible',
    },

    // ---------- FALLBACK ----------
    placeholder: {
        id: 'placeholder',
        src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
        alt: 'Food placeholder image',
        shootNote: 'Generic food fallback — replace with branded default',
    },
};

/**
 * Helper — get an image by id with fallback.
 */
export const getImage = (id: string): SiteImage => {
    return images[id] ?? images.placeholder;
};