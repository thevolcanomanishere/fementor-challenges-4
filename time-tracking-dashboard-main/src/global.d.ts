import Data from './data.json';
export {};

declare global {
  interface CardProperties {
    title: typeof Data[title];
    timeframes: {
      daily: {
        current: number;
        previous: number;
      };
      weekly: {
        current: number;
        previous: number;
      };
      monthly: {
        current: number;
        previous: number;
      };
    };
  }
}
