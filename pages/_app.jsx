import { Provider } from "react-redux";
import store from "../redux/store";
import NavBar from "@/components/navbar/NavBar";
import Footer from "@/components/footer/Footer";

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </Provider>
    );
}
