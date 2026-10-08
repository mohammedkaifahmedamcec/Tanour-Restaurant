import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { menuData } from '../data/menu';
import { MenuCategory } from '../components/MenuCategory';

/* Category order — pulled from the actual menu data */
const CATEGORY_ORDER = [
    'Soups',
    'Rolls',
    'Fries & Salad',
    'Veg Starters',
    'Chicken Starters',
    'Arabian Starters',
    'Shawarma',
    'Broast',
    'Biryani',
    'Chicken Gravies',
    'Mutton Items',
    'Veg Indian Gravies',
    'Breads',
    'Indian Rice',
    'Fried Rice & Noodles',
    'Eggetarian',
    "Combo's",
];

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

export const MenuPage = () => {
    const [query, setQuery] = useState('');
    const [vegOnly, setVegOnly] = useState(false);

    /* -------- Filtering -------- */
    const filteredByCategory = useMemo(() => {
        const q = query.trim().toLowerCase();
        const filtered = menuData.filter((item) => {
            const matchesQuery =
                q.length === 0 ||
                item.name.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q);
            const matchesVeg = vegOnly ? item.isVeg : true;
            return matchesQuery && matchesVeg;
        });

        const grouped: Record<string, typeof menuData> = {};
        for (const cat of CATEGORY_ORDER) grouped[cat] = [];
        for (const item of filtered) {
            if (!grouped[item.category]) grouped[item.category] = [];
            grouped[item.category].push(item);
        }
        // Drop empty categories
        for (const k of Object.keys(grouped)) {
            if (grouped[k].length === 0) delete grouped[k];
        }
        return grouped;
    }, [query, vegOnly]);

    const totalResults = useMemo(
        () => Object.values(filteredByCategory).reduce((sum, arr) => sum + arr.length, 0),
        [filteredByCategory]
    );

    const activeCategories = Object.keys(filteredByCategory);

    return (
        <section
            id="menu"
            className="relative bg-ink py-20 md:py-28 scroll-mt-20"
        >
            <div className="container-tanour">
                {/* ---------- Section heading ---------- */}
                <div className="max-w-2xl">
                    <span className="eyebrow text-brass">The Menu</span>
                    <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-cream">
                        Everything we{' '}
                        <span className="italic text-brass-soft">cook.</span>
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-cream/65 max-w-xl">
                        Biryani, charcoal grills, Chinese classics, and gravies — pick a category or search
                        for what you're craving.
                    </p>
                </div>

                {/* ---------- Search + Veg toggle ---------- */}
                <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center">
                    <div className="relative flex-1">
                        <Search
                            size={17}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-brass/60 pointer-events-none"
                        />
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search dishes or categories…"
                            aria-label="Search menu"
                            className="w-full rounded-full bg-ink-soft border border-brass/20 pl-11 pr-11 py-3
                         text-[15px] text-cream placeholder:text-cream/40
                         focus:outline-none focus:border-brass/60 transition-colors duration-300"
                        />
                        {query && (
                            <button
                                type="button"
                                onClick={() => setQuery('')}
                                aria-label="Clear search"
                                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-7 w-7 items-center justify-center rounded-full text-cream/60 hover:text-cream hover:bg-brass/10 transition-colors"
                            >
                                <X size={14} />
                            </button>
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => setVegOnly((v) => !v)}
                        aria-pressed={vegOnly}
                        className={[
                            'inline-flex items-center gap-2 rounded-full px-5 py-3',
                            'text-[12px] uppercase tracking-wider-2 font-medium',
                            'border transition-all duration-300 whitespace-nowrap',
                            vegOnly
                                ? 'border-halal bg-halal/15 text-halal-soft'
                                : 'border-brass/25 text-cream/70 hover:border-brass/50 hover:text-cream',
                        ].join(' ')}
                    >
                        <span
                            className={[
                                'inline-block h-2 w-2 rounded-full transition-colors',
                                vegOnly ? 'bg-halal-soft' : 'bg-cream/30',
                            ].join(' ')}
                        />
                        {vegOnly ? 'Veg only' : 'All items'}
                    </button>
                </div>

                {/* ---------- Sticky category strip ---------- */}
                {activeCategories.length > 0 && (
                    <nav
                        aria-label="Menu categories"
                        className="sticky top-[60px] md:top-[72px] z-30 mt-8 -mx-5 md:-mx-8 lg:-mx-12
                       px-5 md:px-8 lg:px-12 py-3
                       bg-ink/85 backdrop-blur-xl border-y border-brass/15"
                    >
                        <ul className="flex gap-2 overflow-x-auto no-scrollbar md:flex-wrap md:overflow-visible">
                            {activeCategories.map((cat) => (
                                <li key={cat} className="flex-shrink-0">
                                    <a
                                        href={`#${slug(cat)}`}
                                        className="inline-flex items-center rounded-full border border-brass/20
                               px-3.5 py-1.5 text-[11px] uppercase tracking-wider-2 text-cream/70
                               hover:border-brass/60 hover:text-cream transition-all duration-300"
                                    >
                                        {cat}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

                {/* ---------- Result count ---------- */}
                <div className="mt-6 flex items-center justify-between text-[11px] uppercase tracking-ultra text-cream/45">
                    <span>
                        {totalResults} {totalResults === 1 ? 'dish' : 'dishes'}
                        {vegOnly && ' · veg'}
                        {query && ` · "${query}"`}
                    </span>
                    {(query || vegOnly) && (
                        <button
                            type="button"
                            onClick={() => {
                                setQuery('');
                                setVegOnly(false);
                            }}
                            className="text-brass/80 hover:text-brass transition-colors normal-case tracking-normal text-[12px]"
                        >
                            Reset
                        </button>
                    )}
                </div>

                {/* ---------- Categories ---------- */}
                <div className="mt-10 flex flex-col gap-16 md:gap-20">
                    {activeCategories.map((cat) => (
                        <MenuCategory key={cat} title={cat} items={filteredByCategory[cat]} />
                    ))}
                </div>

                {/* ---------- Empty state ---------- */}
                {totalResults === 0 && (
                    <div className="mt-16 flex flex-col items-center gap-4 text-center py-16">
                        <span
                            aria-hidden
                            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brass/25"
                        >
                            <Search size={20} className="text-brass/60" />
                        </span>
                        <p className="font-display text-2xl text-cream/80">No dishes found.</p>
                        <p className="text-sm text-cream/55 max-w-sm">
                            Try a different search term, or clear filters to see the full menu.
                        </p>
                        <button
                            type="button"
                            onClick={() => {
                                setQuery('');
                                setVegOnly(false);
                            }}
                            className="btn-secondary mt-2"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>

            {/* Section divider */}
            <div className="container-tanour mt-24">
                <div className="divider-brass" />
            </div>
        </section>
    );
};