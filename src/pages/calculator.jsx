import MainLayout from 'src/layouts/MainLayout';

const Calculator = () => {
    return (
        <div>
            <h1>Calculator</h1>
        </div>
    );
};

Calculator.getLayout = (page) => <MainLayout>{page}</MainLayout>;
export default Calculator;
