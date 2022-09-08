import type { SvgProps } from './index';

export const ChevronRightIcon = ({ size }: SvgProps = { size: '1' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height={height}
        style={{ transform: `scale(${size})` }}>
        <path d="M17.2 35.45q-.7-.75-.7-1.675t.7-1.575l8.2-8.25-8.25-8.3q-.7-.6-.675-1.6.025-1 .725-1.65.65-.7 1.575-.675.925.025 1.575.675l9.95 9.95q.3.3.5.725t.2.875q0 .5-.2.9t-.5.7l-9.9 9.9q-.65.65-1.6.625-.95-.025-1.6-.625Z" />
    </svg>
);
