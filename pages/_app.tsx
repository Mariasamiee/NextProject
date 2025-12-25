import "@/styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "./{components}/Layout/MainLayout";
import { Provider } from "react-redux";
import { store } from "./{lib}/store";

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </Provider>
}
