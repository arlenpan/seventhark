import MainLayout from 'src/layouts/MainLayout';

const Islands = () => {
    return (
        <div>
            <h1>Island Tracker (WIP)</h1>
        </div>
    );
};

Islands.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Islands;
