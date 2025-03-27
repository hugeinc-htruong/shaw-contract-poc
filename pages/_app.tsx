import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DM_Mono } from "next/font/google";
import { fontgraphik } from "@/utils/font";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const name = fontgraphik.variable;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${dmMono.variable} ${name}`}>
      <Component {...pageProps} />
    </div>
  );
}
