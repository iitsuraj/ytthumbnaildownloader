import bundleCss from "../styles/index.css";
import { initGA, logPageView } from "analytics";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on("routeChangeComplete", logPageView);
  }, []);
  return (
    <Container>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
