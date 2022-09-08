import type { SvgProps } from './index';

export const CreditCardIcon = ({ size }: SvgProps = { size: '1' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        style={{ transform: `scale(${size})` }}>
        <path d="M45.1 11.45v25.1q0 1.8-1.35 3.175Q42.4 41.1 40.5 41.1h-33q-1.85 0-3.2-1.375T2.95 36.55v-25.1q0-1.8 1.35-3.2 1.35-1.4 3.2-1.4h33q1.9 0 3.25 1.4t1.35 3.2ZM7.5 16.5h33v-5.05h-33Zm0 6.2v13.85h33V22.7Zm0 13.85v-25.1 25.1Z" />
    </svg>
);
