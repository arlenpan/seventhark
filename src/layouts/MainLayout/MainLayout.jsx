import { Menu } from 'antd';
import { useRouter } from 'next/router';
import Footer from 'src/components/Footer';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
    const router = useRouter();
    const activeKey = router.pathname === '/' ? '/checklist' : router.pathname;

    const handleClickNav = ({ key }) => {
        if (key.startsWith('/')) router.push(key);
        else window.open(key, '_blank');
    };

    return (
        <div className={styles.layout}>
            <Menu
                onClick={handleClickNav}
                className={styles.nav}
                selectedKeys={[activeKey]}
                mode="horizontal"
            >
                <Menu.Item key="/checklist">Checklist</Menu.Item>
                <Menu.Item key="/calculator">Calculators</Menu.Item>
                <Menu.Item key="/islands">Island Tracker</Menu.Item>
                <Menu.Item key="/rapport" disabled>
                    Rapport Tracker (WIP)
                </Menu.Item>
                <Menu.Item key="/logger" disabled>
                    Economy Log (WIP)
                </Menu.Item>
                <Menu.SubMenu key="links" title="Useful Links">
                    <Menu.Item key="https://lost-ark.maxroll.gg/resources/unas-tasks">
                        <a
                            href="https://lost-ark.maxroll.gg/resources/unas-tasks"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Important Una's Tasks
                        </a>
                    </Menu.Item>
                    <Menu.Item key="/importexport" disabled>
                        Import/Export Data (WIP)
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <section className={styles['page-container']}>
                <div className={styles.page}>{children}</div>
                <Footer />
            </section>
        </div>
    );
}
