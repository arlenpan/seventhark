import { Menu, Modal } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { resetAllData } from 'src/api/importExport';
import Footer from 'src/components/Footer';
import Head from 'src/components/Head';
import ImportExportModal from 'src/components/ImportExportModal/ImportExportModal';
import styles from './MainLayout.module.scss';

// keys - starts with / - internal link
// starts with https:// - external link
// otherwise launch modal

const DEFAULT_ROUTE = '/checklist';

export default function MainLayout({ children }) {
    const router = useRouter();
    const activeKey = router.asPath === '/' ? DEFAULT_ROUTE : router.asPath;

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

    const menuItems = [
        { label: 'Checklist', key: '/checklist' },
        { label: 'Economy Calculators', key: '/calculator' },
        { label: 'Engravings', key: '/engravings' },
        { label: 'Islands', key: '/islands' },
        { label: 'Rapport', key: '/rapport' },
        {
            label: 'Useful Links',
            key: 'links',
            children: [
                {
                    label: "Maxroll - Important Una's Tasks",
                    key: 'https://lost-ark.maxroll.gg/resources/unas-tasks',
                },
                {
                    label: 'Maxroll - Rapport Tool',
                    key: 'https://lost-ark.maxroll.gg/resources/rapport-guide',
                },
                {
                    label: 'Maxroll - Honing Calculator',
                    key: 'https://lost-ark.maxroll.gg/upgrade-calculator',
                },
                {
                    label: 'Lost Ark Market Online',
                    key: 'https://www.lostarkmarket.online/',
                },
                {
                    label: 'Import/Export Data',
                    key: 'import',
                },
                { label: 'Reset All Data', key: 'wipe', onClick: handleConfirmModal },
            ],
        },
    ];

    return (
        <div className={styles.layout}>
            <Head />
            <Menu
                onClick={handleClickNav}
                className={styles.nav}
                selectedKeys={[activeKey]}
                mode="horizontal"
                items={menuItems}
            />
            <section className={styles['page-container']}>
                <div className={styles.page}>{children}</div>
                <Footer />
            </section>
            <ImportExportModal visible={modals.import} onClose={() => handleCloseModal('import')} />
        </div>
    );
}
