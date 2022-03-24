import MainLayout from 'src/layouts/MainLayout';

const Log = () => {
    return (
        <div>
            <h1>Logger</h1>
        </div>
    );
};

Log.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Log;
