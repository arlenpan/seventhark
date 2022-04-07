import { Menu, Modal } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { resetAllData } from 'src/api/importExport';
import Footer from 'src/components/Footer';
import Head from 'src/components/Head';
import ImportExportModal from 'src/components/ImportExportModal/ImportExportModal';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }) {
    const router = useRouter();
    const activeKey = router.pathname === '/' ? '/checklist' : router.pathname;

    const [modals, setModals] = useState({});

    const handleClickNav = ({ key }) => {
        if (key.startsWith('/')) router.push(key);
        else if (key.startsWith('https://')) window.open(key, '_blank');
        else setModals({ ...modals, [key]: true });
    };

    const handleCloseModal = (key) => {
        const newModals = { ...modals };
        delete newModals[key];
        setModals(newModals);
    };

    const handleConfirmModal = () => {
        Modal.confirm({
            title: 'Do you want to reset all data?',
            content: 'This will remove characters, checklists, favorites, completions and more.',
            onOk() {
                resetAllData().then(() => router.reload(window.location.pathname));
            },
        });
    };

    return (
        <div className={styles.layout}>
            <Head />
            <Menu
                onClick={handleClickNav}
                className={styles.nav}
                selectedKeys={[activeKey]}
                mode="horizontal"
            >
                <Menu.Item key="/checklist">Checklist</Menu.Item>
                <Menu.Item key="/calculator">Economy Calculators</Menu.Item>
                <Menu.Item key="/islands">Island Tracker</Menu.Item>
                <Menu.Item key="/rapport">Rapport Tracker</Menu.Item>
                {/* <Menu.Item key="/logger" disabled>
                    Economy Log (WIP)
                </Menu.Item> */}
                <Menu.SubMenu key="links" title="Useful Links">
                    <Menu.Item key="https://lost-ark.maxroll.gg/resources/unas-tasks">
                        Maxroll - Important Una's Tasks
                    </Menu.Item>
                    <Menu.Item key="https://lost-ark.maxroll.gg/resources/rapport-guide">
                        Maxroll - Rapport Tool
                    </Menu.Item>
                    <Menu.Divider />
                    <Menu.Item key="import">Import/Export Data</Menu.Item>
                    <Menu.Item key="wipe" onClick={handleConfirmModal}>
                        Reset All Data
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <section className={styles['page-container']}>
                <div className={styles.page}>{children}</div>
                <Footer />
            </section>
            <ImportExportModal visible={modals.import} onClose={() => handleCloseModal('import')} />
        </div>
    );
}
