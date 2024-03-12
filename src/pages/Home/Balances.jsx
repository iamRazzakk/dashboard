import { FaBitcoin } from "react-icons/fa";

const Balances = () => {
    return (
        <div className="text-white rounded-xl shadow-xl md:mt-20 bg-[#1E1E1E] p-6 md:p-10">
            <div className="flex justify-between">
                <h3 className="font-bold text-xl">Balances (3)</h3>
                <h5 className="text-[#F3C136] cursor-pointer hidden md:block">See All</h5>
            </div>
            {/* For Table */}

            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right md:mt-10">
                    <thead className="text-xs uppercase text-white">
                        <tr>
                            <th scope="col" className="px-6 text-sm py-3 rounded-s-lg" style={{ width: "50%" }}>
                                Symbol
                            </th>
                            <th scope="col" className="px-6 text-sm py-3 rounded-s-lg" style={{ width: "12.5%" }}>
                                Price
                            </th>
                            <th scope="col" className="px-6 text-sm py-3" style={{ width: "12.5%" }}>
                                Allocation
                            </th>
                            <th scope="col" className="px-6 text-sm py-3 rounded-e-lg" style={{ width: "12.5%" }}>
                                Amount
                            </th>
                            <th scope="col" className="px-6 text-sm py-3 rounded-e-lg" style={{ width: "12.5%" }}>
                                Value
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td className="p-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex gap-2 items-center">
                                    <FaBitcoin className="bg-white rounded-full text-[#f7931a]" />
                                    Bitcoin (BTC)
                                </div>
                            </td>
                            <td className="px-6 py-4">$30,701,75</td>
                            <td className="px-6 py-4">70%</td>
                            <td className="px-6 py-4">1,1739</td>
                            <td className="px-6 py-4 text-[#2F8A54]">+$ 50,537,45</td>
                        </tr>
                        <tr className="">
                            <td className="p-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex gap-2 items-center">
                                    <img className="h-4 w-4 rounded-full" src="https://cryptologos.cc/logos/avalanche-avax-logo.png" alt="" />
                                    Avalanche (AVAX)
                                </div>
                            </td>
                            <td className="px-6 py-4">$30,701,75</td>
                            <td className="px-6 py-4">70%</td>
                            <td className="px-6 py-4">1,1739</td>
                            <td className="px-6 py-4 text-[#2F8A54]">+$ 50,537,45</td>
                        </tr>
                        <tr className="">
                            <td className="p-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex gap-2 items-center">
                                    <img className="h-4 w-4 rounded-full" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4172.png" alt="" />
                                    Terra Classic (LUNC)
                                </div>
                            </td>
                            <td className="px-6 py-4">$96.96</td>
                            <td className="px-6 py-4">55%</td>
                            <td className="px-6 py-4">20,025.97</td>
                            <td className="px-6 py-4 text-[#2F8A54]">+$ 50,537,45</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <td className="p-4 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <div className="flex gap-2 items-center">
                                    <img className="h-4 w-4 rounded-full" src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="" />
                                    Solana (SOL)
                                </div>
                            </td>
                            <td className="px-6 py-3">$96.96</td>
                            <td className="px-6 py-3">35%</td>
                            <td className="px-6 py-4">20,025.97</td>
                            <td className="px-6 py-4 text-[#2F8A54]">+$ 50,537,45</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

            <h5 className="text-[#F3C136] cursor-pointer block md:hidden mt-4 text-center">See All</h5>
        </div>
    );
};

export default Balances;
