import { IoGrid } from "react-icons/io5";
import { BsJournalText } from "react-icons/bs";
import { FaChartLine } from "react-icons/fa";

const SideBar = () => {
    return (
        <div className="text-white">
            <div className="flex items-center gap-4">
                <IoGrid></IoGrid>
                <button className="bg-[#fbd251] text-black px-4 py-2 rounded-2xl gap-4">Home</button>
            </div>
            <div className="flex items-center gap-4">
                <BsJournalText></BsJournalText>
                <button className="bg-[#fbd251] text-black px-4 py-2 rounded-2xl gap-4">Daily Journal</button>
            </div>
            <div className="flex items-center gap-4">
                <FaChartLine></FaChartLine>
                <button className="bg-[#fbd251] text-black px-4 py-2 rounded-2xl gap-4">Market Capital</button>
            </div>
            <div className="flex items-center gap-4">
                <FaChartLine></FaChartLine>
                <button className="bg-[#fbd251] text-black px-4 py-2 rounded-2xl gap-4">API Manager</button>
            </div>
            <h1 className="px-4 py-2">Your Exchanges</h1>
            <div className="flex items-center justify-center gap-4">
                <img className="h-4 w-4 rounded-full" src="https://w7.pngwing.com/pngs/703/998/png-transparent-binance-binancecoin-blockchain-coin-blockchain-classic-icon-thumbnail.png" alt="" />
                <div>
                    <h3 className="font-bold">Binance</h3>
                    <h6>Account Name</h6>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <img className="h-4 w-4 rounded-full" src="https://www.svgrepo.com/show/331331/bybit.svg" alt="" />
                <div>
                    <h3 className="font-bold">ByBit</h3>
                    <h6>Account Name</h6>
                </div>
            </div>
            <h1 className="px-4 py-2">Settings</h1>
            <div className="flex items-center justify-center gap-4">
                <img className="h-4 w-4 rounded-full bg-[#fbd250] text-white p-2" src="https://cdn-icons-png.flaticon.com/512/563/563541.png" alt="" />
                <div>
                    <h3 className="font-bold">Account Settings</h3>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <img className="h-4 w-4 rounded-full bg-[#fbd250] text-white p-2" src="https://static.thenounproject.com/png/2714927-200.png" alt="" />
                <div>
                    <h3 className="font-bold">Request a Feature</h3>
                </div>
            </div>
            <div className="md:mt-32">
                <div className="relative">
                    <img src="https://www.forex.com/en/-/media/project/gain-capital/shared/academy/fxus-technicalanalysis-time-and-price-chart.jpg" alt="" />
                </div>
                <div className="absolute flex items-center gap-4 -mt-12 md:ml-10">
                    <img className="h-6 w-6 rounded-full" src="https://www.svgrepo.com/show/331331/bybit.svg" alt="" />
                    <img className="h-6 w-6 rounded-full" src="https://www.svgrepo.com/show/331331/bybit.svg" alt="" />
                </div>
                <div className="flex items-center border border-gray-400 rounded-xl px-2 py-1">
                    <img className="h-6 w-6 bg-[#fbd250] rounded-full"  src="https://static.vecteezy.com/system/resources/thumbnails/003/101/266/small/icon-of-blank-message-dialogue-box-free-vector.jpg" alt="" />
                    <div>
                        <h1 className="font-bold">Help Center</h1>
                        <h3>Ans Here</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;