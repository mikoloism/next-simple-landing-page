// classnames
export { default as $ } from 'classnames';

// react-types
export { Component, memo } from 'react';
export type { FC } from 'react';

// next
export { default as Image } from 'next/image';
export { default as Link } from 'next/link';

// base-props
export interface BaseProps extends React.PropsWithChildren<{}> {
    className?: string;
}

// base-variant
export enum Variant {
    Fill = 'fill',
    Outline = 'outline',
    Text = 'text',
}

export type VariantType = Variant | `${Variant}`;

export interface BaseVariantProps {
    variant?: VariantType;
}

// base-color
export enum Color {
    Primary = 'primary',
    Secondary = 'secondary',
    Accent = 'accent',
    Gray = 'gray',
    Black = 'black',
    White = 'white',
}

export type ColorType = Color | `${Color}`;

export interface BaseColorProps {
    color?: ColorType;
}
