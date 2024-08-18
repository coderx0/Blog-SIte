import { Roboto, Raleway } from "next/font/google";

export const BodyFont = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const HeaderFont = Raleway({
  subsets: ["latin"],
});
