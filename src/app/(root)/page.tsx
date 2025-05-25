import {BsCoin} from "react-icons/bs";

function HomePage() {
    return (
        <div className={'flex flex-col py-10 gap-y-4 w-full'}>
            <div className={''}>
                <h1 className={'text-5xl font-semibold'}>Padmanabha</h1>
            </div>
            <div className={'grid lg:grid-cols-2 xl:grid-cols-3 gap-x-3'}>
                {Array(3).fill(null).map((current, i) => {
                    return (
                        <Dashboard key={i}/>
                    );
                })}
            </div>
        </div>
    );
}

export default HomePage;

const Dashboard = ({}: {}) => {
    return (
        <div className={'flex items-center justify-between py-3  px-10 border rounded-md'}>
            <BsCoin className={'text-6xl text-yellow-500'}/>
            <div className={'flex flex-col gap-2'}>
                <p className={'text-3xl font-semibold'}>Amount</p>
                <h1 className={'text-4xl font-black'}>₹45</h1>
            </div>
        </div>
    );
}
