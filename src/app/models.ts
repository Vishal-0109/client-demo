export type Accent = 'blue' | 'green' | 'purple' | 'red';


export interface AccountCard {
    id: number;
    title?: string;
    subtitle?: string;
    amount?: number; // main number
    amountCents?: number; // for ",25" etc
    available?: string; // sub caption value
    prebooked?: string; // only for credit card sample
    negative?: boolean; // renders in red and with leading "–"
    accent?: Accent;
    icon?: string; // emoji or inline svg text
    actionText?: string; // CTA under the card
    account?: string;
    currency?: string;
}