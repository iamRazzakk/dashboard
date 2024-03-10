import SideBar from "../Components/SideBar/SideBar";
import AccountAndSummery from "./Home/AccountAndSummery";
import Balances from "./Home/Balances";
import Navbar from "./Home/Navbar";
import Position from "./Home/Position";
import Summery from "./Home/Summery";

const Home = () => {
    return (
        <div className="md:flex gap-6 bg-[#171717]  ">
            <div className="md:w-[276px] md:min-h-screen bg-[#1e1e1e] p-6">
                {/* Side Navbar goes here */}
                <SideBar></SideBar>
            </div>
            <div className=" lg:w-[80vw] bg-[#171717]">
                {/*  */}
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