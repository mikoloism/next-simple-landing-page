import type { SvgProps } from './index';

export const EyeIcon = ({ size }: SvgProps = { size: '1' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        style={{ transform: `scale(${size})` }}>
        <path d="M24 31.35q3.5 0 5.925-2.45T32.35 23q0-3.5-2.45-5.925T24 14.65q-3.5 0-5.925 2.45T15.65 23q0 3.5 2.45 5.925T24 31.35Zm0-3.55q-2 0-3.4-1.425T19.2 23q0-2 1.425-3.4T24 18.2q2 0 3.4 1.425T28.8 23q0 2-1.425 3.4T24 27.8ZM24 39q-7.2 0-13.05-3.95-5.85-3.95-9.1-10.4-.2-.3-.3-.75-.1-.45-.1-.9t.1-.9q.1-.45.3-.85 3.25-6.35 9.1-10.3Q16.8 7 24 7q7.2 0 13.05 3.95 5.85 3.95 9.1 10.3.2.4.3.85.1.45.1.85 0 .45-.1.925-.1.475-.3.775-3.25 6.45-9.1 10.4T24 39Z" />
    </svg>
);
