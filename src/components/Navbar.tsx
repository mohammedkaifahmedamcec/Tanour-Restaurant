import { useEffect, useState } from 'react';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';

const NAV_LINKS = [
    { label: 'Menu', href: '#menu' },
    { label: 'Signatures', href: '#signatures' },
    { label: 'Story', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Visit', href: '#location' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile drawer is open
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    // Close on Escape
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <>
            <header
                className={[
                    'fixed top-0 inset-x-0 z-50',
                    'transition-all duration-500 ease-out',
                    scrolled
                        ? 'bg-ink/85 backdrop-blur-xl border-b border-brass/15 py-3'
                        : 'bg-transparent border-b border-transparent py-5',
                ].join(' ')}
            >
                <div className="container-tanour flex items-center justify-between gap-4">
                    {/* ----- Brand ----- */}
                    <a
                        href="#top"
                        className="flex items-center gap-3 group"
                        aria-label="Tanour — home"
                    >
                        {/* Flame mark */}
                        <span
                            aria-hidden
                            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-brass/40"
                        >
                            <span className="block h-3 w-3 rounded-full bg-ember shadow-[0_0_14px_2px_rgba(232,84,30,0.7)]" />
                        </span>

                        <span className="flex flex-col leading-none">
                            <span className="font-display text-[22px] md:text-[24px] font-semibold tracking-tight text-cream">
                                Tanour
                            </span>
                            <span className="mt-1 hidden sm:block text-[10px] uppercase tracking-ultra text-brass/80">
                                Multi-Cuisine · JP Nagar
                            </span>
                        </span>

                        <span className="ml-1 hidden md:inline-block rounded-full border border-halal/50 bg-halal/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider-2 text-halal-soft">
                            Halal
                        </span>
                    </a>

                    {/* ----- Desktop nav ----- */}
                    <nav
                        aria-label="Primary"
                        className="hidden lg:flex items-center gap-9"
                    >
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative text-[13px] uppercase tracking-wider-2 text-cream/75 hover:text-cream transition-colors duration-300
                           after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brass
                           after:transition-all after:duration-500 hover:after:w-full"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* ----- Desktop CTA ----- */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:+917019001733"
                            className="text-[13px] uppercase tracking-wider-2 text-brass hover:text-brass-soft transition-colors duration-300"
                        >
                            +91 70190 01733
                        </a>
                        <a href="#menu" className="btn-primary !py-2.5 !px-5 text-[12px]">
                            Order Now
                        </a>
                    </div>

                    {/* ----- Mobile trigger ----- */}
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={open}
                        aria-controls="mobile-nav"
                        className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-brass/30 text-cream hover:border-brass/60 transition-colors duration-300"
                    >
                        <MenuIcon size={20} />
                    </button>
                </div>
            </header>

            {/* ============================================================
          MOBILE DRAWER
          ============================================================ */}
            <div
                id="mobile-nav"
                aria-hidden={!open}
                className={[
                    'fixed inset-0 z-[60] lg:hidden',
                    'transition-opacity duration-400 ease-out',
                    open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
                ].join(' ')}
            >
                {/* Backdrop */}
                <div
                    onClick={() => setOpen(false)}
                    className="absolute inset-0 bg-ink/95 backdrop-blur-xl"
                />

                {/* Panel */}
                <div
                    className={[
                        'relative h-full flex flex-col',
                        'transition-transform duration-500 ease-out',
                        open ? 'translate-y-0' : '-translate-y-4',
                    ].join(' ')}
                >
                    {/* Top bar */}
                    <div className="container-tanour flex items-center justify-between py-5 border-b border-brass/15">
                        <span className="font-display text-[22px] font-semibold text-cream">
                            Tanour
                        </span>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brass/30 text-cream"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Links */}
                    <nav
                        aria-label="Mobile"
                        className="container-tanour flex-1 flex flex-col justify-center gap-2 py-10"
                    >
                        {NAV_LINKS.map((link, i) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}
                                className={[
                                    'font-display text-4xl sm:text-5xl font-medium text-cream/90',
                                    'py-3 border-b border-brass/10',
                                    'transition-all duration-500',
                                    open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3',
                                ].join(' ')}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile CTA footer */}
                    <div className="container-tanour pb-10 flex flex-col gap-3">
                        <a
                            href="tel:+917019001733"
                            className="btn-secondary w-full justify-center"
                        >
                            <Phone size={16} /> Call +91 70190 01733
                        </a>
                        <a
                            href="#menu"
                            onClick={() => setOpen(false)}
                            className="btn-primary w-full justify-center"
                        >
                            Order Now
                        </a>
                        <p className="mt-2 text-center text-[11px] uppercase tracking-ultra text-brass/70">
                            Halal · Free Delivery · JP Nagar
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};