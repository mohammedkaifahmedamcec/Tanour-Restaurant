import { useEffect, useRef, useState } from 'react';
import type { MenuItemType } from '../data/menu';

interface MenuCategoryProps {
    title: string;
    items: MenuItemType[];
}

/**
 * A single menu category — rendered as an editorial dish list.
 * Each dish is anchorable (`#a4`, `#bi11`) so links from other
 * sections (e.g. Signatures) scroll & highlight the exact row.
 */
export const MenuCategory = ({ title, items }: MenuCategoryProps) => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id={title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}
            className={[
                'scroll-mt-32 transition-opacity duration-700 ease-out',
                visible ? 'opacity-100' : 'opacity-0',
            ].join(' ')}
        >
            {/* Category heading */}
            <header className="mb-6 flex items-end justify-between gap-4 border-b border-brass/15 pb-4">
                <h3 className="font-display text-2xl md:text-3xl text-cream">
                    {title}
                </h3>
                <span className="hidden sm:block text-[10px] uppercase tracking-ultra text-brass/70">
                    {items.length} {items.length === 1 ? 'dish' : 'dishes'}
                </span>
            </header>

            {/* Dish list */}
            <ul className="divide-y divide-brass/8">
                {items.map((item) => (
                    <DishRow key={item.id} item={item} />
                ))}
            </ul>
        </section>
    );
};

/* ============================================================
   DISH ROW
   ============================================================ */

interface DishRowProps {
    item: MenuItemType;
}

const DishRow = ({ item }: DishRowProps) => {
    const [highlighted, setHighlighted] = useState(false);
    const rowRef = useRef<HTMLLIElement | null>(null);

    // If URL hash targets this dish, highlight it briefly
    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash === item.id) {
            const t = window.setTimeout(() => {
                rowRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setHighlighted(true);
                window.setTimeout(() => setHighlighted(false), 2200);
            }, 200);
            return () => window.clearTimeout(t);
        }
    }, [item.id]);

    // Also listen for hash change while on page
    useEffect(() => {
        const onHash = () => {
            const hash = window.location.hash.replace('#', '');
            if (hash === item.id) {
                setHighlighted(true);
                window.setTimeout(() => setHighlighted(false), 2200);
            }
        };
        window.addEventListener('hashchange', onHash);
        return () => window.removeEventListener('hashchange', onHash);
    }, [item.id]);

    return (
        <li
            ref={rowRef}
            id={item.id}
            className={[
                'group relative flex items-start justify-between gap-4 py-4 md:py-5',
                'scroll-mt-32',
                'transition-colors duration-500',
                highlighted ? 'bg-ember/8' : 'bg-transparent',
            ].join(' ')}
        >
            {/* Left: name + description */}
            <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2.5">
                    {/* Veg / Non-veg dot */}
                    <span
                        className={`diet-dot ${item.isVeg ? 'diet-dot--veg' : 'diet-dot--nonveg'
                            }`}
                        aria-label={item.isVeg ? 'Vegetarian' : 'Non-vegetarian'}
                    />
                    <h4 className="font-sans text-[15px] md:text-base font-medium text-cream tracking-tight">
                        {item.name}
                    </h4>
                </div>

                {item.description && (
                    <p className="mt-1.5 ml-[22px] text-[13px] md:text-sm text-cream/55 leading-relaxed clamp-2">
                        {item.description}
                    </p>
                )}
            </div>

            {/* Right: leader + price */}
            <div className="flex flex-shrink-0 items-center gap-3 pt-0.5">
                <span
                    aria-hidden
                    className="hidden sm:block h-px w-10 bg-brass/25 translate-y-2"
                />
                <span className="font-sans text-[15px] md:text-base font-semibold text-brass whitespace-nowrap">
                    ₹{item.price}
                </span>
            </div>

            {/* Highlight bar (left edge) when targeted */}
            <span
                aria-hidden
                className={[
                    'absolute left-0 top-0 bottom-0 w-[2px]',
                    'transition-opacity duration-500',
                    highlighted ? 'bg-ember opacity-100' : 'opacity-0',
                ].join(' ')}
            />
        </li>
    );
};