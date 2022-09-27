import ColorModeContextProvider from "../context/colorModeContext";
import Layout from "../components/Layout";
import "@fontsource/signika";
import "@fontsource/kanit";

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ColorModeContextProvider>
  );
}

export default MyApp;
