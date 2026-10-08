import { useEffect, useState } from 'react';
import { UtensilsCrossed, ShoppingBag, MessageCircle, Phone } from 'lucide-react';

/* Prefilled WhatsApp message — editable in one place */
const WA_NUMBER = '917019001733';
const WA_MESSAGE = 'Hi Tanour, I would like to place an order.';
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;
const TEL_URL = 'tel:+917019001733';

interface ActionItem {
    id: string;
    label: string;
    href: string;
    external?: boolean;
    icon: typeof UtensilsCrossed;
    primary?: boolean;
}

const ACTIONS: ActionItem[] = [
    {
        id: 'menu',
        label: 'Menu',
        href: '#menu',
        icon: UtensilsCrossed,
    },
    {
        id: 'order',
        label: 'Order',
        href: '#menu',
        icon: ShoppingBag,
        primary: true,
    },
    {
        id: 'whatsapp',
        label: 'WhatsApp',
        href: WA_URL,
        external: true,
        icon: MessageCircle,
    },
    {
        id: 'call',
        label: 'Call',
        href: TEL_URL,
        external: true,
        icon: Phone,
    },
];

export const MobileBottomBar = () => {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;

        const onScroll = () => {
            const y = window.scrollY;
            const delta = y - lastY;

            // Ignore tiny jitters
            if (Math.abs(delta) < 6) return;

            // Near top of page → always show
            if (y < 120) {
                setHidden(false);
            } else {
                // Scrolling down → hide, scrolling up → show
                setHidden(delta > 0);
            }
            lastY = y;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            role="navigation"
            aria-label="Quick actions"
            className={[
                'md:hidden', // mobile only
                'fixed inset-x-0 bottom-0 z-40',
                'transition-transform duration-500 ease-out',
                hidden ? 'translate-y-full' : 'translate-y-0',
            ].join(' ')}
            style={{
                // Respect iPhone home-bar
                paddingBottom: 'max(env(safe-area-inset-bottom), 0px)',
            }}
        >
            {/* Top hairline */}
            <div className="h-px bg-brass/20" />

            <ul className="grid grid-cols-4 bg-ink/95 backdrop-blur-xl">
                {ACTIONS.map((action) => {
                    const Icon = action.icon;
                    const isPrimary = !!action.primary;

                    return (
                        <li key={action.id} className="flex">
                            <a
                                href={action.href}
                                {...(action.external
                                    ? { target: '_blank', rel: 'noopener noreferrer' }
                                    : {})}
                                aria-label={action.label}
                                className={[
                                    'flex w-full flex-col items-center justify-center gap-1',
                                    'py-3 text-[10px] uppercase tracking-wider-2',
                                    'transition-colors duration-300',
                                    isPrimary
                                        ? 'bg-ember text-cream hover:bg-ember-deep'
                                        : 'text-cream/70 hover:text-cream',
                                ].join(' ')}
                            >
                                <Icon
                                    size={isPrimary ? 20 : 18}
                                    strokeWidth={isPrimary ? 2.2 : 1.8}
                                />
                                <span
                                    className={
                                        isPrimary
                                            ? 'font-semibold text-cream'
                                            : 'font-medium text-inherit'
                                    }
                                >
                                    {action.label}
                                </span>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};