import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { signatureDishes } from '../data/signatureDishes';
import { images } from '../data/images';

/**
 * Intersection-based reveal — adds `is-visible` when the card enters the viewport.
 * Uses the `.reveal` utility defined in index.css.
 */
const useReveal = <T extends HTMLElement>() => {
    const ref = useRef<T | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    return { ref, visible };
};

interface DishCardProps {
    dish: typeof signatureDishes[number];
    index: number;
}

const DishCard = ({ dish, index }: DishCardProps) => {
    const { ref, visible } = useReveal<HTMLAnchorElement>();
    const image = images[dish.imageId] ?? images.placeholder;

    return (
        <a
            ref={ref}
            href={`#${dish.menuItemId}`}
            aria-label={`${dish.name} — view on menu`}
            className={[
                'group relative block overflow-hidden rounded-2xl',
                'bg-ink-soft border border-brass/10 hover:border-brass/35',
                'transition-[opacity,transform,border-color] duration-[900ms] ease-out',
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
            ].join(' ')}
            style={{ transitionDelay: `${index * 120}ms` }}
        >
            {/* ----- Image ----- */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />

                {/* Bottom gradient for text legibility */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-ink via-ink/70 to-transparent" />

                {/* Signature tag */}
                <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-ember/50 bg-ink/70 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-wider-2 text-ember-soft">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_8px_2px_rgba(232,84,30,0.6)]" />
                    Signature
                </span>

                {/* Number */}
                <span className="absolute right-4 top-4 font-display text-2xl text-brass/60">
                    {String(index + 1).padStart(2, '0')}
                </span>
            </div>

            {/* ----- Content ----- */}
            <div className="relative p-5 md:p-6">
                {/* Diet dot + Category */}
                <div className="flex items-center gap-3">
                    <span
                        className={`diet-dot ${dish.isVeg ? 'diet-dot--veg' : 'diet-dot--nonveg'
                            }`}
                        aria-label={dish.isVeg ? 'Vegetarian' : 'Non-vegetarian'}
                    />
                    <span className="text-[10px] uppercase tracking-ultra text-brass/80">
                        {dish.category}
                    </span>
                </div>

                {/* Name */}
                <h3 className="mt-3 font-display text-2xl md:text-[26px] leading-tight text-cream group-hover:text-brass-soft transition-colors duration-300">
                    {dish.name}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-sm text-cream/65 clamp-2 leading-relaxed">
                    {dish.description}
                </p>

                {/* Price + CTA */}
                <div className="mt-5 flex items-center justify-between border-t border-brass/10 pt-4">
                    <span className="font-sans text-base font-semibold tracking-wide text-brass">
                        ₹{dish.price}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider-2 text-cream/60 group-hover:text-ember-soft transition-colors duration-300">
                        View on Menu
                        <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                    </span>
                </div>
            </div>
        </a>
    );
};

export const SignatureDishes = () => {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [headingVisible, setHeadingVisible] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setHeadingVisible(true);
                    io.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section
            id="signatures"
            className="relative bg-ink py-24 md:py-32 scroll-mt-20"
        >
            <div className="container-tanour" ref={sectionRef}>
                {/* ----- Section heading ----- */}
                <div
                    className={[
                        'max-w-2xl transition-all duration-[900ms] ease-out',
                        headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                    ].join(' ')}
                >
                    <span className="eyebrow text-brass">Signatures</span>
                    <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-cream">
                        Four plates that <span className="italic text-brass-soft">define us.</span>
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-cream/65 max-w-xl">
                        A short list from a long menu. Each one we'd serve you first — chosen for craft,
                        flavour, and what our kitchen does best.
                    </p>
                </div>

                {/* ----- Grid ----- */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {signatureDishes.map((dish, i) => (
                        <DishCard key={dish.id} dish={dish} index={i} />
                    ))}
                </div>

                {/* ----- Full menu CTA ----- */}
                <div className="mt-14 flex justify-center">
                    <a href="#menu" className="btn-secondary">
                        Explore the Full Menu
                    </a>
                </div>
            </div>

            {/* Soft brass hairline at section bottom */}
            <div className="container-tanour mt-20">
                <div className="divider-brass" />
            </div>
        </section>
    );
};