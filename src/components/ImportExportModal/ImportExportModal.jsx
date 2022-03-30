import { Button, Modal, Upload } from 'antd';
import { exportLocalData, importLocalData } from 'src/api/importExport';
import { UploadOutlined, DownloadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

export default function ImportExportModal({ visible, onClose }) {
    const router = useRouter();

    const handleExportClick = () => {
        exportLocalData();
    };

    const handleUpload = ({ file, fileList }) => {
        if (file.status === 'done') {
            const reader = new FileReader();
            reader.onload = handleFileRead;
            reader.readAsText(file.originFileObj);
        }
    };

    const handleFileRead = (event) => {
        const str = event.target.result;
        const json = JSON.parse(str);
        importLocalData(json).then(() => router.reload(window.location.pathname));
    };

    return (
        <Modal visible={visible} onCancel={onClose} footer={false}>
            <h3>Import Data</h3>
            <Upload onChange={handleUpload} maxCount={1}>
                <Button type="primary" icon={<UploadOutlined />}>
                    Upload
                </Button>
            </Upload>
            <h3>Export Data</h3>
            <Button type="primary" icon={<DownloadOutlined />} onClick={handleExportClick}>
                Download
            </Button>
        </Modal>
    );
}
