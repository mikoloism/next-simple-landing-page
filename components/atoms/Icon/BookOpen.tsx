import type { SvgProps } from './index';

export const BookOpenIcon = (
    { width, height }: SvgProps = { width: '48', height: '48' }
) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        width={width}>
        <path d="M25.55 36.85q2.5-1.25 4.925-1.875t5.125-.625q1.9 0 3.925.3t3.425.8V14q-1.7-.9-3.575-1.25-1.875-.35-3.775-.35-2.7 0-5.25.825t-4.8 2.325Zm-1.3 5.1q-.45 0-.875-.1t-.825-.3q-2.3-1.5-4.875-2.3-2.575-.8-5.275-.8-1.7 0-3.325.475-1.625.475-3.225.975-1.6.85-3.25-.05T.95 36.9v-23q0-1.2.55-2.275T3.15 10q2.25-.9 4.525-1.325Q9.95 8.25 12.3 8.25q3.15 0 6.175.875T24.1 11.85q2.6-1.8 5.525-2.7 2.925-.9 6.075-.9 2.35 0 4.6.45 2.25.45 4.5 1.3 1.1.55 1.675 1.625t.575 2.325v23.5q0 1.85-1.675 2.65-1.675.8-3.275-.2-1.55-.55-3.175-1-1.625-.45-3.275-.45-2.65 0-5.125.825T25.85 41.55q-.35.2-.775.3-.425.1-.825.1Z" />
    </svg>
);
