import { FaBitcoin, FaEthereum, FaEye } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";



const Navbar = () => {
    return (
        <nav className=" md:flex justify-between items-center bg-[#171717] p-6">
            <div className="flex   gap-8  text-2xl">
                <div className="flex gap-4 text-white font-bold items-center">
                    <FaBitcoin className="bg-white rounded-full text-[#f7931a]"></FaBitcoin>
                    <h1>$ 30,701.95</h1>
                </div>
                <div className="flex gap-4 text-white font-bold items-center">
                    <FaEthereum className="bg-white rounded-full text-[#627EEA]"></FaEthereum>
                    <h1>$ 1,887.80</h1>
                </div>
            </div>
            <div className="flex items-center gap-4 rounded-2xl">
                <IoSunnyOutline className="border border-gray-600 rounded-lg text-[41px] p-2"></IoSunnyOutline>
                <FaEye className="border border-gray-600 rounded-lg text-[41px] p-2"></FaEye>
                <div className="border  border-gray-600 object-cover">
                    <img className="rounded-full p-2 h-10 w-10" src="https://img.freepik.com/premium-vector/usa-america-national-official-flag-symbol-banner-vector-illustration_622428-3866.jpg" alt="usa flag" />
                </div>
                <img className="border rounded-lg border-gray-600  h-10 object-cover w-12" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" />
            </div>
        </nav>
    );
};

export default Navbar;