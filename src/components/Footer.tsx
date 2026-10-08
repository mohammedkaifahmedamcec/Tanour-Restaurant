import { ArrowUp, Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Menu', href: '#menu' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit', href: '#location' },
];

const TEL_URL = 'tel:+917019001733';
const WA_URL = `https://wa.me/917019001733?text=${encodeURIComponent(
    'Hi Tanour, I would like to know more.'
)}`;

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-ink border-t border-brass/15 pt-20 pb-10 overflow-hidden">
            {/* Warm vignette */}
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-ember/6 blur-[160px]"
            />

            <div className="container-tanour relative">
                {/* ---------- Top grid ---------- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-10">
                    {/* ----- Brand column ----- */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3">
                            <span
                                aria-hidden
                                className="relative flex h-10 w-10 items-center justify-center rounded-full border border-brass/40"
                            >
                                <span className="block h-3.5 w-3.5 rounded-full bg-ember shadow-[0_0_14px_2px_rgba(232,84,30,0.7)]" />
                            </span>
                            <div className="flex flex-col leading-none">
                                <span className="font-display text-[26px] font-semibold text-cream tracking-tight">
                                    Tanour
                                </span>
                                <span className="mt-1 text-[10px] uppercase tracking-ultra text-brass/80">
                                    Multi-Cuisine · JP Nagar
                                </span>
                            </div>
                        </div>

                        <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-cream/60">
                            Charcoal grills, Hyderabadi biryani, and Indo-Chinese classics —
                            Halal-certified, cooked over live fire, served fresh in JP Nagar.
                        </p>

                        {/* Halal pill */}
                        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-halal/40 bg-halal/10 px-3 py-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-halal-soft" />
                            <span className="text-[10px] uppercase tracking-ultra text-halal-soft">
                                Halal Certified
                            </span>
                        </div>
                    </div>

                    {/* ----- Navigate column ----- */}
                    <nav
                        aria-label="Footer"
                        className="md:col-span-3 md:pl-6"
                    >
                        <h3 className="text-[11px] uppercase tracking-ultra text-brass/80">
                            Navigate
                        </h3>
                        <ul className="mt-5 space-y-3">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="inline-flex items-center gap-2 text-[14px] text-cream/70 hover:text-cream transition-colors duration-300"
                                    >
                                        <span
                                            aria-hidden
                                            className="h-px w-3 bg-brass/40 transition-all duration-300 hover:w-5"
                                        />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* ----- Contact column ----- */}
                    <div className="md:col-span-4">
                        <h3 className="text-[11px] uppercase tracking-ultra text-brass/80">
                            Get in touch
                        </h3>

                        <ul className="mt-5 space-y-4 text-[14px]">
                            <li>
                                <a
                                    href={TEL_URL}
                                    className="group inline-flex items-start gap-3 text-cream/75 hover:text-cream transition-colors duration-300"
                                >
                                    <Phone
                                        size={16}
                                        className="mt-0.5 flex-shrink-0 text-brass group-hover:text-brass-soft"
                                    />
                                    <span>+91 70190 01733</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href={WA_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-start gap-3 text-cream/75 hover:text-cream transition-colors duration-300"
                                >
                                    <MessageCircle
                                        size={16}
                                        className="mt-0.5 flex-shrink-0 text-brass group-hover:text-brass-soft"
                                    />
                                    <span>WhatsApp</span>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Tanour+Multi+Cuisine+JP+Nagar+Bengaluru"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-start gap-3 text-cream/75 hover:text-cream transition-colors duration-300"
                                >
                                    <MapPin
                                        size={16}
                                        className="mt-0.5 flex-shrink-0 text-brass group-hover:text-brass-soft"
                                    />
                                    <address className="not-italic leading-relaxed">
                                        11/1, 24th Main Rd, 5th Phase,
                                        <br />
                                        Annaiah Reddy Layout, JP Nagar,
                                        <br />
                                        Bengaluru 560078
                                    </address>
                                </a>
                            </li>

                            <li className="inline-flex items-start gap-3 text-cream/60">
                                <Clock size={16} className="mt-0.5 flex-shrink-0 text-brass" />
                                <span>Open daily · 11:00 AM – 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* ---------- Brass hairline ---------- */}
                <div className="mt-16 divider-brass" />

                {/* ---------- Bottom bar ---------- */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] uppercase tracking-ultra text-cream/40">
                    <p className="text-center sm:text-left">
                        © {year} Tanour Multi Cuisine Restaurant · JP Nagar, Bengaluru
                    </p>

                    <div className="flex items-center gap-6">
                        <span className="hidden sm:inline text-brass/60">
                            Branches · JP Nagar · Madiwala · Kalasipalya
                        </span>
                        <a
                            href="#top"
                            aria-label="Back to top"
                            className="group inline-flex items-center gap-1.5 text-brass/70 hover:text-brass transition-colors duration-300"
                        >
                            Top
                            <ArrowUp
                                size={13}
                                className="transition-transform duration-300 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};