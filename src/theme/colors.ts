import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#f6c90e",
  primaryBright: "#f6c90e",
  primaryDark: "#0098A1",
  secondary: "#f6c90e",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#242012",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#615521",
  textDisabled: "#BDC2C4",
  textSubtle: "#8f80ba",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#f6c90e",
  background: "#303841",
  backgroundDisabled: "#434138",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#514c35",
  primaryDark: "#0098A1",
  tertiary: "#55513f",
  text: "#fcf7e3",
  textDisabled: "#767366",
  textSubtle: "#d5c78c",
  borderColor: "#524B63",
  card: "#86613b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #4b4428 0%, #4b4426 100%)",
  },
};
