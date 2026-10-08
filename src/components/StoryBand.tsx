import { useEffect, useRef, useState } from 'react';
import { Flame, ShieldCheck, Utensils } from 'lucide-react';
import { images } from '../data/images';

/* The three pillars — each one a verifiable fact from your info */
const PILLARS = [
    {
        id: 'halal',
        icon: ShieldCheck,
        title: 'Halal Certified',
        body:
            'Every dish we serve is Halal. Verified sourcing, verified preparation — no exceptions, no shortcuts.',
    },
    {
        id: 'fire',
        icon: Flame,
        title: 'Charcoal & Tandoor',
        body:
            'Our grill runs on live coals. Kebabs, alfaham, and tikka are finished over open flame — never under a heat lamp.',
    },
    {
        id: 'multi',
        icon: Utensils,
        title: 'Multi-Cuisine Kitchen',
        body:
            'Arabian grills, Hyderabadi biryani, and Indo-Chinese classics — three kitchens of technique under one roof.',
    },
];

export const StoryBand = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
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
            { threshold: 0.15 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const story = images['story-grill'];

    return (
        <section
            ref={sectionRef}
            id="story"
            className="relative bg-ink-soft py-24 md:py-32 scroll-mt-20 overflow-hidden"
        >
            {/* Subtle warm vignette */}
            <div
                aria-hidden
                className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-ember/8 blur-[140px]"
            />

            <div className="container-tanour relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                    {/* ---------- Photo column ---------- */}
                    <div
                        className={[
                            'lg:col-span-5 lg:sticky lg:top-28',
                            'transition-all duration-[1000ms] ease-out',
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                        ].join(' ')}
                    >
                        <figure className="relative overflow-hidden rounded-2xl border border-brass/15">
                            <img
                                src={story.src}
                                alt={story.alt}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-auto aspect-[4/5] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                            <figcaption className="absolute bottom-4 left-4 right-4 text-[10px] uppercase tracking-ultra text-brass/80">
                                Behind the grill · Tanour kitchen
                            </figcaption>
                        </figure>
                    </div>

                    {/* ---------- Text column ---------- */}
                    <div className="lg:col-span-7">
                        {/* Eyebrow + Heading */}
                        <div
                            className={[
                                'transition-all duration-[900ms] ease-out',
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                            ].join(' ')}
                            style={{ transitionDelay: '120ms' }}
                        >
                            <span className="eyebrow text-brass">Our Story</span>
                            <h2 className="mt-5 text-4xl md:text-5xl lg:text-[56px] leading-[1.05] text-cream">
                                Cooked over fire.
                                <br />
                                Served with <span className="italic text-brass-soft">respect.</span>
                            </h2>
                        </div>

                        {/* Pull quote — one honest line */}
                        <p
                            className={[
                                'mt-8 font-display text-xl md:text-2xl leading-snug text-cream/85 max-w-xl',
                                'transition-all duration-[900ms] ease-out',
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                            ].join(' ')}
                            style={{ transitionDelay: '240ms' }}
                        >
                            “We don't try to be everything. We try to do the things we know —
                            grill, biryani, curry — better than most.”
                        </p>

                        {/* Pillars */}
                        <ul className="mt-12 flex flex-col gap-8">
                            {PILLARS.map((p, i) => {
                                const Icon = p.icon;
                                return (
                                    <li
                                        key={p.id}
                                        className={[
                                            'flex gap-5',
                                            'transition-all duration-[900ms] ease-out',
                                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                                        ].join(' ')}
                                        style={{ transitionDelay: `${360 + i * 120}ms` }}
                                    >
                                        <span
                                            aria-hidden
                                            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-brass/30 bg-ink text-brass"
                                        >
                                            <Icon size={20} strokeWidth={1.6} />
                                        </span>
                                        <div className="pt-1">
                                            <h3 className="font-display text-xl text-cream leading-tight">
                                                {p.title}
                                            </h3>
                                            <p className="mt-1.5 text-[14px] md:text-[15px] leading-relaxed text-cream/60 max-w-md">
                                                {p.body}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Bottom line — branches (from your menu flyer) */}
                        <div
                            className={[
                                'mt-12 pt-6 border-t border-brass/15 flex flex-wrap items-center gap-x-6 gap-y-2',
                                'text-[11px] uppercase tracking-ultra text-cream/50',
                                'transition-all duration-[900ms] ease-out',
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                            ].join(' ')}
                            style={{ transitionDelay: '840ms' }}
                        >
                            <span>Branches</span>
                            <span className="text-brass/80">JP Nagar</span>
                            <span className="text-brass/80">Madiwala</span>
                            <span className="text-brass/80">Kalasipalya</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};