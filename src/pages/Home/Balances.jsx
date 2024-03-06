import { FaBitcoin } from "react-icons/fa";


const Balances = () => {
    return (
        <div className="text-white rounded-xl shadow-xl bg-[#1E1E1E] p-10">
            <div className="flex justify-between">
                <h3 className="font-bold text-xl">Balances (3)</h3>
                <h5 className="text-[#F3C136]">See All</h5>
            </div>
            {/* For Table */}
            <table className="w-full">
                <thead>
                    <tr className="">
                        <th className="p-4 font-bold text-left">Symbol</th>
                        <th className="p-4 flex justify-between  w-3/4">
                            <div className="px-4 text-right">Price</div>
                            <div className="px-4">Allocation</div>
                            <div className="px-4">Amount</div>
                            <div className="px-4">Value</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* For BTC Data */}
                    <tr className="border-b">
                        <td className="p-4">Bitcoin (BTC) <FaBitcoin className="bg-white rounded-full text-[#f7931a]"></FaBitcoin></td>
                        <td className="p-4 flex justify-between w-3/4">
                            <div className="px-4">$30,701,75</div>
                            <div className="px-4">70%</div>
                            <div className="px-4">1,1739</div>
                            <div className="px-4 text-[#2F8A54]">+$ 50,537,45</div>
                        </td>
                    </tr>
                    {/* For Avalanche (AVAX) Data */}
                    <tr className="border-b">
                        <td className="p-4">Avalanche (AVAX) <img className="h-4 w-4 rounded-full" src="https://cryptologos.cc/logos/avalanche-avax-logo.png" alt="" /></td>
                        <td className="p-4 flex justify-between w-3/4">
                            <div className="px-4">$30,701,75</div>
                            <div className="px-4">70%</div>
                            <div className="px-4">1,1739</div>
                            <div className="px-4 text-[#2F8A54]">+$ 50,537,45</div>
                        </td>
                    </tr>
                    {/* For Terra Classic (LUNC) Data */}
                    <tr className="border-b">
                        <td className="p-4">Terra Classic (LUNC) <img className="h-4 w-4 rounded-full" src="https://s2.coinmarketcap.com/static/img/coins/200x200/4172.png" alt="" /> </td>
                        <td className="p-4 flex justify-between w-3/4">
                            <div className="px-4">$96.96</div>
                            <div className="px-4">55%</div>
                            <div className="px-4">20,025.97</div>
                            <div className="px-4 text-[#2F8A54]">+$ 50,537,45</div>
                        </td>
                    </tr>
                    {/* For Litecoin (LTC) Data */}
                    <tr className="border-b">
                        <td className="p-4">Litecoin (LTC) <img className="h-4 w-4 rounded-full" src="https://cryptologos.cc/logos/litecoin-ltc-logo.png" alt="" /></td>
                        <td className="p-4 flex justify-between w-3/4">
                            <div className="px-4">$96.96</div>
                            <div className="px-4">35%</div>
                            <div className="px-4">20,025.97</div>
                            <div className="px-4 text-[#2F8A54]">+$ 50,537,45</div>
                        </td>
                    </tr>
                    {/* For Solana (SOL) Data */}
                    <tr className="border-b">
                        <td className="p-4">Solana (SOL) <img className="h-4 w-4 rounded-full" src="https://cryptologos.cc/logos/solana-sol-logo.png" alt="" /></td>
                        <td className="p-4 flex justify-between w-3/4">
                            <div className="px-4">$96.96</div>
                            <div className="px-4">23%</div>
                            <div className="px-4">20,025.97</div>
                            <div className="px-4 text-[#2F8A54]">+$ 50,537,45</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Balances;
