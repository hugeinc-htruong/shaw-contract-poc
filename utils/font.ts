import localFont from "next/font/local";

export const fontgraphik = localFont({
  src: [
    {
      path: "../public/fonts/Graphik-Regular-Trial.otf",
      weight: "normal",
      style: "normal",
    },

    {
      path: "../public/fonts/Graphik-Bold-Trial.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-graphik",
});
