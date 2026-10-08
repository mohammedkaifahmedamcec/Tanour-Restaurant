import { useEffect, useRef, useState } from 'react';
import { images } from '../data/images';

/* 6 tiles with explicit grid spans — creates the editorial rhythm */
const TILES: {
    imageId: keyof typeof images;
    caption: string;
    span: string;
    aspect: string;
}[] = [
        {
            imageId: 'gallery-4',
            caption: 'The entrance at dusk',
            span: 'sm:col-span-2 sm:row-span-2',
            aspect: 'aspect-[4/5] sm:aspect-auto sm:h-full',
        },
        {
            imageId: 'gallery-1',
            caption: 'Inside the dining room',
            span: '',
            aspect: 'aspect-[4/3] sm:aspect-[4/5]',
        },
        {
            imageId: 'gallery-6',
            caption: 'Char and spice',
            span: '',
            aspect: 'aspect-[4/3] sm:aspect-[4/5]',
        },
        {
            imageId: 'gallery-3',
            caption: 'The table, shared',
            span: 'sm:col-span-2',
            aspect: 'aspect-[4/3] sm:aspect-[16/9]',
        },
        {
            imageId: 'gallery-5',
            caption: 'Plating in the kitchen',
            span: '',
            aspect: 'aspect-[4/3] sm:aspect-square',
        },
        {
            imageId: 'gallery-2',
            caption: 'Sunday lunch, JP Nagar',
            span: '',
            aspect: 'aspect-[4/3] sm:aspect-square',
        },
    ];

export const Gallery = () => {
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
            { threshold: 0.1 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="gallery"
            className="relative bg-ink py-24 md:py-32 scroll-mt-20"
        >
            <div className="container-tanour">
                {/* ---------- Heading ---------- */}
                <div
                    className={[
                        'max-w-2xl transition-all duration-[900ms] ease-out',
                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                    ].join(' ')}
                >
                    <span className="eyebrow text-brass">In the Room</span>
                    <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-cream">
                        A look around{' '}
                        <span className="italic text-brass-soft">Tanour.</span>
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-cream/65 max-w-xl">
                        The kitchen, the table, the room — a few honest frames from a normal service.
                    </p>
                </div>

                {/* ---------- Grid ---------- */}
                <div
                    className={[
                        'mt-14',
                        'grid gap-3 sm:gap-4',
                        'grid-cols-1 sm:grid-cols-4 sm:grid-rows-[auto_auto_auto] sm:auto-rows-[180px] md:auto-rows-[200px]',
                        'transition-opacity duration-[1000ms] ease-out',
                        visible ? 'opacity-100' : 'opacity-0',
                    ].join(' ')}
                >
                    {TILES.map((tile, i) => {
                        const img = images[tile.imageId] ?? images.placeholder;
                        return (
                            <figure
                                key={tile.imageId}
                                className={[
                                    'group relative overflow-hidden rounded-xl border border-brass/10 hover:border-brass/30',
                                    'transition-[border-color,transform] duration-500 ease-out',
                                    tile.span,
                                    'sm:aspect-auto',
                                ].join(' ')}
                                style={{
                                    transitionDelay: visible ? `${i * 80}ms` : '0ms',
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className={[
                                        'w-full h-full object-cover',
                                        'transition-transform duration-[1400ms] ease-out',
                                        'group-hover:scale-[1.05]',
                                        tile.aspect,
                                    ].join(' ')}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

                                {/* Caption */}
                                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                                    <span className="block text-[10px] uppercase tracking-ultra text-brass/85">
                                        {tile.caption}
                                    </span>
                                </figcaption>

                                {/* Brass corner accent */}
                                <span
                                    aria-hidden
                                    className="absolute top-3 left-3 h-6 w-6 border-t border-l border-brass/40 transition-all duration-500 group-hover:h-8 group-hover:w-8"
                                />
                            </figure>
                        );
                    })}
                </div>

                {/* Photo note */}
                <p className="mt-10 text-center text-[11px] uppercase tracking-ultra text-cream/35">
                    Replace with real Tanour photography — see <span className="text-brass/70">src/data/images.ts</span>
                </p>
            </div>

            <div className="container-tanour mt-20">
                <div className="divider-brass" />
            </div>
        </section>
    );
};