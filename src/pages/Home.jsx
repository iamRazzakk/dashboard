import Navbar from "./Home/Navbar";



const Home = () => {
    return (
        <div className="md:flex">
            <div className="md:w-[276px] md:h-[1428px] bg-red-500">
                <h1>Side Navbar</h1>
            </div>
            <div className="w-full">
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Home;