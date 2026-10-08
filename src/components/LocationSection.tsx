import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { images } from '../data/images';

/* ---- Restaurant facts (from your menu flyer + Google Maps listing) ---- */
const RESTAURANT = {
    name: 'Tanour Multi Cuisine Restaurant',
    addressLines: [
        '11/1, 24th Main Rd, 5th Phase,',
        'Annaiah Reddy Layout, JP Nagar,',
        'Bengaluru, Karnataka 560078',
    ],
    phone: '+917019001733',
    phoneDisplay: '+91 70190 01733',
    whatsapp: '917019001733',
    whatsappMessage:
        'Hi Tanour, I would like to know more about today\u2019s menu and place an order.',
    mapsQuery: 'Tanour+Multi+Cuisine+JP+Nagar+Bengaluru',
    hours: [
        { day: 'Monday – Sunday', time: '11:00 AM – 11:00 PM' },
    ],
    branches: ['JP Nagar', 'Madiwala', 'Kalasipalya'],
} as const;

export const LocationSection = () => {
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
            { threshold: 0.12 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    const locationImage = images.location;
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${RESTAURANT.mapsQuery}`;
    const telUrl = `tel:${RESTAURANT.phone}`;
    const waUrl = `https://wa.me/${RESTAURANT.whatsapp}?text=${encodeURIComponent(
        RESTAURANT.whatsappMessage
    )}`;

    return (
        <section
            ref={sectionRef}
            id="location"
            className="relative bg-ink-soft py-24 md:py-32 scroll-mt-20 overflow-hidden"
        >
            {/* Warm vignette */}
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[560px] rounded-full bg-ember/8 blur-[150px]"
            />

            <div className="container-tanour relative">
                {/* ---------- Heading ---------- */}
                <div
                    className={[
                        'max-w-2xl transition-all duration-[900ms] ease-out',
                        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                    ].join(' ')}
                >
                    <span className="eyebrow text-brass">Visit Us</span>
                    <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-cream">
                        Find us in{' '}
                        <span className="italic text-brass-soft">JP Nagar.</span>
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-cream/65 max-w-xl">
                        Walk in, call ahead, or order for delivery — whichever suits your evening.
                    </p>
                </div>

                {/* ---------- Grid ---------- */}
                <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                    {/* ---- Image column ---- */}
                    <div
                        className={[
                            'lg:col-span-5',
                            'transition-all duration-[1000ms] ease-out',
                            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                        ].join(' ')}
                        style={{ transitionDelay: '120ms' }}
                    >
                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Open Tanour JP Nagar location in Google Maps"
                            className="group relative block overflow-hidden rounded-2xl border border-brass/15 hover:border-brass/40 transition-colors duration-500"
                        >
                            <img
                                src={locationImage.src}
                                alt={locationImage.alt}
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-[4/5] lg:aspect-[3/4] object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                            {/* Pin overlay */}
                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="flex items-center gap-3">
                                    <span
                                        aria-hidden
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-ember text-cream"
                                    >
                                        <Navigation size={18} strokeWidth={2} />
                                    </span>
                                    <div>
                                        <p className="text-[11px] uppercase tracking-ultra text-brass/90">
                                            JP Nagar · Bengaluru
                                        </p>
                                        <p className="text-[13px] text-cream/80 mt-0.5">
                                            Tap to open in Maps
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* ---- Details column ---- */}
                    <div className="lg:col-span-7">
                        {/* Address */}
                        <div
                            className={[
                                'surface-card p-6 md:p-7',
                                'transition-all duration-[900ms] ease-out',
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                            ].join(' ')}
                            style={{ transitionDelay: '200ms' }}
                        >
                            <div className="flex items-start gap-4">
                                <span
                                    aria-hidden
                                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brass/30 text-brass"
                                >
                                    <MapPin size={18} strokeWidth={1.7} />
                                </span>
                                <div className="min-w-0">
                                    <p className="text-[11px] uppercase tracking-ultra text-brass/80">
                                        Address
                                    </p>
                                    <address className="mt-2 not-italic text-[15px] leading-relaxed text-cream/85">
                                        {RESTAURANT.addressLines.map((line) => (
                                            <span key={line} className="block">
                                                {line}
                                            </span>
                                        ))}
                                    </address>
                                </div>
                            </div>
                        </div>

                        {/* Hours */}
                        <div
                            className={[
                                'surface-card p-6 md:p-7 mt-4',
                                'transition-all duration-[900ms] ease-out',
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                            ].join(' ')}
                            style={{ transitionDelay: '280ms' }}
                        >
                            <div className="flex items-start gap-4">
                                <span
                                    aria-hidden
                                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-brass/30 text-brass"
                                >
                                    <Clock size={18} strokeWidth={1.7} />
                                </span>
                                <div className="w-full">
                                    <p className="text-[11px] uppercase tracking-ultra text-brass/80">
                                        Hours
                                    </p>
                                    <ul className="mt-2 space-y-1">
                                        {RESTAURANT.hours.map((h) => (
                                            <li
                                                key={h.day}
                                                className="flex justify-between text-[14px] text-cream/85"
                                            >
                                                <span>{h.day}</span>
                                                <span className="text-cream/60">{h.time}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div
                            className={[
                                'mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3',
                                'transition-all duration-[900ms] ease-out',
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                            ].join(' ')}
                            style={{ transitionDelay: '360ms' }}
                        >
                            <a
                                href={telUrl}
                                aria-label={`Call Tanour at ${RESTAURANT.phoneDisplay}`}
                                className="btn-secondary justify-center"
                            >
                                <Phone size={16} /> Call
                            </a>
                            <a
                                href={waUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Message Tanour on WhatsApp"
                                className="btn-primary justify-center"
                            >
                                <MessageCircle size={16} /> WhatsApp
                            </a>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Get directions to Tanour in Google Maps"
                                className="btn-secondary justify-center"
                            >
                                <Navigation size={16} /> Directions
                            </a>
                        </div>

                        {/* Branches line */}
                        <div
                            className={[
                                'mt-6 flex flex-wrap items-center gap-x-5 gap-y-2',
                                'text-[11px] uppercase tracking-ultra text-cream/45',
                                'transition-all duration-[900ms] ease-out',
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
                            ].join(' ')}
                            style={{ transitionDelay: '440ms' }}
                        >
                            <span>Branches</span>
                            {RESTAURANT.branches.map((b) => (
                                <span key={b} className="text-brass/75">
                                    {b}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};