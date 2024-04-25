import '../styles/global.css';

// additional
import '../components/carousel.css';
import '../components/loader.css';
import '../components/slider.css';

import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
    return (<NextUIProvider>
        <Component {...pageProps} />
    </NextUIProvider>)
}