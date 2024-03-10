import { FaBitcoin } from "react-icons/fa";

const Position = () => {
    return (
        <div className="text-white rounded-xl shadow-xl bg-[#1E1E1E] p-6 md:p-10 md:mt-20">
            <div className=" ">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-xl">Open Positions (4)</h3>
                    <h5 className="text-[#F3C136] cursor-pointer hidden md:block">See All</h5>
                </div>
                {/* For Position Table */}
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="">
                                <th className="p-4 font-bold text-left">Coin</th>
                                <th className="p-4 flex justify-between  w-3/4">
                                    <div className="px-4 text-right">Price</div>
                                    <div className="px-4">Amount</div>
                                    <div className="px-4">Entry Price</div>
                                    <div className="px-4">Unrealized PNL</div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* For BTC Data */}
                            <tr className="border-b">
                                <td className="p-4">CHZUSDT <FaBitcoin className="bg-white rounded-full text-[#f7931a]"></FaBitcoin></td>
                                <td className="p-4 flex justify-between w-3/4">
                                    <div className="px-4">$0.10299</div>
                                    <div className="px-4">+1,200</div>
                                    <div className="px-4">$0.08637</div>
                                    <div className="px-4 text-[#2F8A54]">+ $19.95</div>
                                </td>
                            </tr>
                            {/* For Avalanche (AVAX) Data */}
                            <tr className="border-b">
                                <td className="p-4">MAVUSDT <img className="h-4 w-4 rounded-full" src="https://cryptologos.cc/logos/avalanche-avax-logo.png" alt="" /></td>
                                <td className="p-4 flex justify-between w-3/4">
                                    <div className="px-4">$0.10299</div>
                                    <div className="px-4">+1,200</div>
                                    <div className="px-4">$0.08637</div>
                                    <div className="px-4 text-[#2F8A54]">+ $19.95</div>
                                </td>
                            </tr>
                            {/* For Terra Classic (LUNC) Data */}
                            <tr className="border-b">
                                <td className="p-4">BTCUSDT <FaBitcoin className="bg-white rounded-full text-[#f7931a]"></FaBitcoin> </td>
                                <td className="p-4 flex justify-between w-3/4">
                                    <div className="px-4">$0.10299</div>
                                    <div className="px-4">+1,200</div>
                                    <div className="px-4">$0.08637</div>
                                    <div className="px-4 text-[#2F8A54]">+ $19.95</div>
                                </td>
                            </tr>
                            {/* For Litecoin (LTC) Data */}
                            <tr className="border-b">
                                <td className="p-4">BTCUSDT <FaBitcoin className="bg-white rounded-full text-[#f7931a]"></FaBitcoin></td>
                                <td className="p-4 flex justify-between w-3/4">
                                    <div className="px-4">$0.10299</div>
                                    <div className="px-4">+1,200</div>
                                    <div className="px-4">$0.08637</div>
                                    <div className="px-4 text-[#2F8A54]">+ $19.95</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h5 className="text-[#F3C136] cursor-pointer block md:hidden mt-4 text-center">See All</h5>
            </div>
        </div>
    );
};

export default Position;