import "../styles/globals.scss";
import type { AppProps } from "next/app";
// import { Inter } from "@next/font/google";
import Layout from "../components/layout";

// const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
