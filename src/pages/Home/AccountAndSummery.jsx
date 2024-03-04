import { MdRestartAlt } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import { GrDocumentPerformance } from "react-icons/gr";
import { FaExclamationTriangle } from "react-icons/fa";
import { MdFeed } from "react-icons/md";

const AccountAndSummary = () => {
    return (
        <section className="md:mt-6   w-full  rounded-lg ">
            <div className="md:flex justify-between gap-4 ">
                <div className="flex px-2 py-1 shadow-lg rounded-2xl md:flex-1 bg-[#1e1e1e]  items-center gap-8 justify-between w-full text-white">
                    {/* First Section - Left Side */}
                    <div className="">
                        <div className="flex gap-4">
                            <img className="rounded-full p-1 h-11 w-11" src="https://seeklogo.com/images/B/bybit-logo-4C31FD6A08-seeklogo.com.png" alt="" />
                            <div>
                                <h3>Account Name.Bybit</h3>
                                <div className="flex font-bold gap-4">
                                    <h2 className="text-[#f7931a]">
                                        $18,536.43
                                    </h2>
                                    <h2 className="flex gap-2">0.84253 <span>BTC</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Second Section - Right Side */}
                    <div className="">
                        <div className="flex items-center gap-4">
                            <MdRestartAlt className="h-6 w-6 rounded-full bg-green-600" />
                            <h1>Last updated 3 hours ago</h1>
                        </div>
                    </div>
                </div>
                {/* Last div section */}
                <div className="shadow-lg md:flex-1 rounded-2xl bg-[#1e1e1e]">
                    <div className="flex md:flex-1  items-center justify-evenly w-full text-white">
                        <div className="flex justify-center items-center p-6 gap-4">
                            <div className="flex items-center bg-[#fbd251] text-black px-4 py-2 rounded-2xl gap-2">
                                <BiMenuAltRight></BiMenuAltRight>
                                <h1>Summery</h1>
                            </div>
                            <div className="flex items-center text- px-4 py-2 rounded-2xl gap-2">
                                <GrDocumentPerformance></GrDocumentPerformance>
                                <h1>Performance</h1>
                            </div>
                            <div className="flex items-center text- px-4 py-2 rounded-2xl gap-2">
                                <MdFeed></MdFeed>
                                <h1>Analytics</h1>
                            </div>
                            <div className="flex items-center text- px-4 py-2 rounded-2xl gap-2">
                                <FaExclamationTriangle></FaExclamationTriangle>
                                <h1>Reporting</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AccountAndSummary;