/// <reference path="../.astro/types.d.ts" />

// Global type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    google: {
      maps: {
        Map: any;
        Marker: any;
        Animation: {
          DROP: any;
        };
      };
    };
    initMap: () => void;
  }
}

// HTML Meta element extension
declare global {
  interface HTMLMetaElement {
    content: string;
  }
}

export {};