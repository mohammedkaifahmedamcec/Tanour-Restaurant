import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { images } from '../data/images';

export const Hero = () => {
    const [mounted, setMounted] = useState(false);

    // Trigger staggered reveal on mount
    useEffect(() => {
        const t = window.setTimeout(() => setMounted(true), 80);
        return () => window.clearTimeout(t);
    }, []);

    const hero = images.hero;

    return (
        <section
            id="top"
            className="relative min-h-[100svh] w-full overflow-hidden bg-ink grain-overlay"
        >
            {/* ---------- Background photograph ---------- */}
            <div className="absolute inset-0">
                <img
                    src={hero.src}
                    alt={hero.alt}
                    className={[
                        'h-full w-full object-cover',
                        'transition-[transform,opacity] duration-[2000ms] ease-out',
                        mounted ? 'scale-100 opacity-100' : 'scale-105 opacity-0',
                    ].join(' ')}
                    fetchPriority="high"
                    decoding="async"
                />

                {/* Darkening layers — top for nav, bottom for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

                {/* Ember vignette at bottom — subtly warm, never orange-washed */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ember/10 to-transparent" />
            </div>

            {/* ---------- Content ---------- */}
            <div className="relative z-10 container-tanour flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:pb-24 md:pt-40">
                <div className="max-w-3xl">
                    {/* Eyebrow */}
                    <div
                        className={[
                            'transition-all duration-700 ease-out',
                            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                        ].join(' ')}
                        style={{ transitionDelay: '150ms' }}
                    >
                        <span className="eyebrow text-brass">JP Nagar · Bengaluru</span>
                    </div>

                    {/* Headline */}
                    <h1
                        className={[
                            'mt-6 text-display-sm sm:text-display md:text-display-lg lg:text-display-xl',
                            'transition-all duration-1000 ease-out',
                            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                        ].join(' ')}
                        style={{ transitionDelay: '300ms' }}
                    >
                        Fire. Spice.
                        <br />
                        <span className="italic text-brass-soft">Tanour.</span>
                    </h1>

                    {/* Sub-headline */}
                    <p
                        className={[
                            'mt-6 max-w-xl text-base sm:text-lg md:text-xl text-cream/75',
                            'transition-all duration-1000 ease-out',
                            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                        ].join(' ')}
                        style={{ transitionDelay: '500ms' }}
                    >
                        Charcoal-grilled Arabian plates, slow-cooked biryani, and Indo-Chinese classics —
                        served fresh in the heart of JP Nagar. Halal-certified. Free home delivery.
                    </p>

                    {/* CTAs */}
                    <div
                        className={[
                            'mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4',
                            'transition-all duration-1000 ease-out',
                            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                        ].join(' ')}
                        style={{ transitionDelay: '700ms' }}
                    >
                        <a href="#menu" className="btn-primary group">
                            Explore the Menu
                            <ArrowRight
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-0.5"
                            />
                        </a>
                        <a
                            href="https://maps.google.com/?q=Tanour+Multi+Cuisine+JP+Nagar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            <MapPin size={16} /> Get Directions
                        </a>
                    </div>

                    {/* Trust chips */}
                    <ul
                        className={[
                            'mt-12 flex flex-wrap items-center gap-x-6 gap-y-3',
                            'text-[11px] uppercase tracking-ultra text-cream/55',
                            'transition-all duration-1000 ease-out',
                            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                        ].join(' ')}
                        style={{ transitionDelay: '900ms' }}
                    >
                        <li className="flex items-center gap-2">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-halal-soft" />
                            Halal Certified
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brass" />
                            Free Home Delivery
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock size={12} className="text-brass" />
                            Open Daily · 11 AM – 11 PM
                        </li>
                    </ul>
                </div>
            </div>

            {/* ---------- Scroll hint (desktop + mobile) ---------- */}
            <div
                aria-hidden
                className={[
                    'absolute bottom-6 left-1/2 -translate-x-1/2 z-10',
                    'flex flex-col items-center gap-2',
                    'transition-opacity duration-1000',
                    mounted ? 'opacity-60' : 'opacity-0',
                ].join(' ')}
                style={{ transitionDelay: '1200ms' }}
            >
                <span className="text-[10px] uppercase tracking-ultra text-cream/60">
                    Scroll
                </span>
                <span className="relative block h-10 w-px bg-brass/30 overflow-hidden">
                    <span className="absolute inset-x-0 top-0 h-1/2 bg-ember animate-[scrollLine_2.4s_ease-in-out_infinite]" />
                </span>
            </div>

            {/* Keyframes for the scroll line — scoped, not global */}
            <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          50%  { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
        </section>
    );
};