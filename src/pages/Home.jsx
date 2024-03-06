import AccountAndSummery from "./Home/AccountAndSummery";
import Balances from "./Home/Balances";
import Navbar from "./Home/Navbar";
import Position from "./Home/Position";
import Summery from "./Home/Summery";

const Home = () => {
    return (
        <div className="md:flex gap-6 bg-[#171717] h-screen w-screen">
            <div className="md:w-[276px] md:h-[1428px] bg-[#1e1e1e]">
                {/* Side Navbar goes here */}
                <h1>Side Navbar</h1>
            </div>
            <div className="w-full mx-auto bg-[#171717]">
                {/* Content Section goes here */}
                <Navbar />
                <AccountAndSummery />
                <Summery></Summery>
                <Balances></Balances>
                <Position></Position>
            </div>
        </div>
    );
};

export default Home;