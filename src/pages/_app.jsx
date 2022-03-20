import 'antd/dist/antd.css';
import 'src/styles/globals.scss';
import 'src/styles/utility.scss';

function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    return getLayout(<Component {...pageProps} />);
}

export default MyApp;
