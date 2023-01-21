import "~/styles/global.scss";
import type { AppProps } from "next/app";
import Footer from "~/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-background">
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
