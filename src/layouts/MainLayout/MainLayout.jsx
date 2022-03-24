import { Menu } from 'antd';
import { useRouter } from 'next/router';
import Footer from 'src/components/Footer';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
    const router = useRouter();
    const activeKey = router.pathname === '/' ? '/checklist' : router.pathname;

    const handleClickNav = ({ key }) => {
        router.push(key);
    };

    return (
        <div className={styles.layout}>
            <Menu onClick={handleClickNav} className={styles.nav} selectedKeys={[activeKey]} mode="horizontal">
                <Menu.Item key="/checklist">Checklist</Menu.Item>
                <Menu.Item key="/calculator">Calculators</Menu.Item>
                <Menu.Item key="/islands">Island Tracker (WIP)</Menu.Item>
                <Menu.Item key="/rapport">Rapport Tracker (WIP)</Menu.Item>
                <Menu.Item key="/logs">Economy Log (WIP)</Menu.Item>
                <Menu.SubMenu key="links" title="Useful Links (WIP)">
                    <Menu.ItemGroup title="Item 1">
                        <Menu.Item key="setting:1">Option 1</Menu.Item>
                        <Menu.Item key="setting:2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="setting:3">Option 3</Menu.Item>
                        <Menu.Item key="setting:4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </Menu.SubMenu>
            </Menu>
            <section className={styles['page-container']}>
                <div className={styles.page}>{children}</div>
                <Footer />
            </section>
        </div>
    );
}
