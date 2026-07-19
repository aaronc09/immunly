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

  export interface ZoomableGroupProps {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    translateExtent?: [[number, number], [number, number]];
    filterZoomEvent?: (event: Event) => boolean;
    onMoveStart?: (position: { coordinates: [number, number]; zoom: number }, event: Event) => void;
    onMove?: (position: { x: number; y: number; zoom: number; dragging: Event | null }, event: Event) => void;
    onMoveEnd?: (position: { coordinates: [number, number]; zoom: number }, event: Event) => void;
    className?: string;
    children?: ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
  export const Marker: ComponentType<MarkerProps>;
  export const ZoomableGroup: ComponentType<ZoomableGroupProps>;
}
