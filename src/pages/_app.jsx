import 'antd/dist/antd.dark.css';
import 'src/styles/globals.scss';
import 'src/styles/utility.scss';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

const HJID = 2900319;
const HJSV = 6;

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        hotjar.initialize(HJID, HJSV);
    }, []);

    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(<Component {...pageProps} />);
}

export default MyApp;
