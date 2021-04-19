import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#4f2c16",
  primaryBright: "#4f2c16",
  primaryDark: "#4f2c16",
  secondary: "#7645D9",
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
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#ae8761",
  textDisabled: "#BDC2C4",
  textSubtle: "#86613b",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#4f2c16",
  background: "#ae8761",
  backgroundDisabled: "#4d4540",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#b89777",
  primaryDark: "#0098A1",
  tertiary: "#a27a53",
  text: "#EAE2FC",
  textDisabled: "#80756e",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#86613b",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
