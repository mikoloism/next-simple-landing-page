import type { SvgProps } from './index';

export const ArrowRightIcon = ({ size }: SvgProps = { size: '1' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        style={{ transform: `scale(${size})` }}>
        <path d="M22.4 38.7q-.65-.6-.65-1.55 0-.95.7-1.65l9.25-9.25H9.85q-.95 0-1.6-.625Q7.6 25 7.6 23.95q0-.95.65-1.6.65-.65 1.6-.65H31.7l-9.25-9.3q-.7-.6-.7-1.575T22.4 9.2q.7-.65 1.625-.65t1.625.65l13.2 13.2q.35.3.525.7.175.4.175.85 0 .5-.175.9t-.525.75l-13.2 13.2q-.7.7-1.625.65-.925-.05-1.625-.75Z" />
    </svg>
);
