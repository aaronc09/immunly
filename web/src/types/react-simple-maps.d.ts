declare module 'react-simple-maps' {
  import type { ComponentType, ReactNode, CSSProperties, MouseEvent } from 'react';

  export interface RSMGeography {
    rsmKey: string;
    properties: Record<string, unknown>;
    [key: string]: unknown;
  }

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    width?: number;
    height?: number;
    style?: CSSProperties;
    className?: string;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: RSMGeography[] }) => ReactNode;
  }

  export interface GeographyStyleStates {
    default?: CSSProperties;
    hover?: CSSProperties;
    pressed?: CSSProperties;
  }

  export interface GeographyProps {
    geography: RSMGeography;
    style?: GeographyStyleStates;
    className?: string;
    onClick?: (event: MouseEvent<SVGPathElement>) => void;
    tabIndex?: number;
  }

  export interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
    onClick?: (event: MouseEvent<SVGGElement>) => void;
    style?: CSSProperties;
    className?: string;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
}
