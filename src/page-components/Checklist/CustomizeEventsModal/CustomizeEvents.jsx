import { Button } from 'antd';
import { useState } from 'react';
import { setChecklistCustomEvents, setChecklistHiddenEvents } from 'src/api/checklist';
import CustomizeEventsModal from './CustomizeEventsModal';

export default function CustomizeEvents({ className, onSubmit }) {
    const [showModal, setModal] = useState(false);

    const handleSubmit = (customEvents, hiddenEvents) => {
        setChecklistHiddenEvents(hiddenEvents);
        setChecklistCustomEvents(customEvents);
        setModal(false);
        if (onSubmit) onSubmit();
    };

    return (
        <>
            <Button size="small" className={className} onClick={() => setModal(true)}>
                Customize Events
            </Button>
            {showModal && (
                <CustomizeEventsModal onClose={() => setModal(false)} onSubmit={handleSubmit} />
            )}
        </>
    );
}
