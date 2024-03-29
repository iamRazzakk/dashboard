import { PureComponent } from 'react';
import { PieChart, Pie, ResponsiveContainer, Sector } from 'recharts';
import { GrDocumentPerformance } from 'react-icons/gr';
import CustomAreaChart from '../../Components/AreaChart/AreaChart';

// Existing data for your pie chart
const data = [
    { name: 'Futures', value: 75, color: '#facc15' },
    { name: 'Spot', value: 25, color: '#ff0000' },
    { name: 'Bitcoin', value: 300, color: '#14b8a6' },
    { name: 'Etherium', value: 25, color: '#f59e0b' },
    { name: 'Litecoin', value: 25, color: '#3B82F6' },
];

// Render active shape function for your pie chart
const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
        </g>
    );
};


class Example extends PureComponent {
    state = {
        activeIndex: 0,
    };

    onPieEnter = (_, index) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={400} height={400}>
                    <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#8884d8" // Adjusted fill color
                        dataKey="value"
                        onMouseEnter={this.onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        );
    }
}


const Summary = () => {
    return (
        <div className='text-white md:mt-20'>
            <h1 className="text-xl font-bold">Summary</h1>
            <p>A quick summary of your entire account on Bybit and current positions</p>
            <div className="md:flex items-center w-full">
                {/* Integrated pie chart */}
                <div className='flex-1'>
                    <div className="flex md:w-[250px] ">
                        <div className='' style={{ width: '100%', height: '100%' }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <Example /> {/* Integrated Example component */}
                            </ResponsiveContainer>
                        </div>
                        <div></div>
                    </div>
                </div>

                {/* Total Balance Wining rate and PNL */}
                <div>
                    {/* Total Balance and wining rate */}
                    <div>
                        <div className='md:flex items-center gap-6 justify-center'> {/* Changed justify-center */}
                            <div className="px-4 py-4 md:h-[120px]  flex shadow-lg rounded-2xl md:flex-1 bg-[#1e1e1e]  items-center gap-8 justify-between w-full  text-white">
                                {/* First Section - Left Side */}
                                <div className=" md:flex items-center gap-4">
                                    <img className='bg-[#fbd250] rounded-lg h-12 w-12 p-2' src="https://www.freeiconspng.com/thumbs/dollar-icon-png/dollar-black-circle-icon-28.png" alt="dollar icon" />
                                    <div>
                                        <h1>Total Balance</h1>
                                        <h1>$ 18,536.32</h1>
                                        <div className='md:flex gap-2 items-center'>
                                            <img className='h-4 w-4' src="https://s3-alpha-sig.figma.com/img/c448/b039/44b9b11f300a07ad9f81c496209b3ab2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mGIYzW9sdwaiufv0WOcSI-5bejn-siNBCuVNaoLxObqOiCW7vZyMGbjIPNDl3CgG87C88OQyV7PsZs508HAtLxtEd5oi3TuwsufusnFD6vevN6~DywbBHdGoEuMdzDQZpTpp2zJwRInNqYLZ~Kl7ZxYGNz2t9RYo-Infxs6ef8ArQl4o6dV-hFBpzC3B2IecLZM9XguVUJBwQ2HpvfRBdLZDGeeE5iqoJs8RFhvQ0CnnMr7NiPtHM9e7LB9tNUyhgM0Nu1HtJUjb9~UWUZL3ShCnHXYSInCZMurUYoMBaRYzMX0MBjvnTklnV~ZnfFUpGEEVsglMyUfS2Nlk5sGaAA__" alt="" />
                                            <h1>0.64225 BTC</h1>
                                        </div>
                                    </div>
                                </div>
                                {/* Second Section - Right Side */}
                                <div className="">
                                    <div>
                                        <button>Performance →</button>
                                    </div>
                                </div>
                            </div>
                            {/* Last div section */}
                            <div className="md:h-[120px] px-4 py-6  shadow-lg md:flex-1 rounded-2xl bg-[#1e1e1e]">
                                <div className="flex px-2 py-1 shadow-lg rounded-2xl md:flex-1 bg-[#1e1e1e]  items-center gap-8 justify-between w-full text-white">
                                    {/* First Section - Left Side */}
                                    <div className="md:flex items-center gap-4">
                                        <img className='bg-[#fbd250] rounded-lg h-12 w-12 p-2 text-black' src="https://static.thenounproject.com/png/1324046-200.png" alt="" />
                                        <div>
                                            <h1>Overall Win Rate</h1>
                                            <h1>42%</h1>
                                        </div>
                                    </div>
                                    {/* Second Section - Right Side */}
                                    <div className="">
                                        <div>
                                            <button>Analytics →</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PNL */}
                        <div>
                            <div className=' mt-4'>
                                <div className="md:flex justify-between items-center md:h-[120px] px-4 py-6 md:min-w-full shadow-lg md:flex-1 rounded-2xl bg-[#1e1e1e]">
                                    <div className="flex-1 bg-[#1e1e1e] flex items-center gap-4">
                                        <GrDocumentPerformance className='bg-[#fbd250] rounded-lg h-12 w-12 p-2 text-black'></GrDocumentPerformance>
                                        <div>
                                            <h1>Total Balance</h1>
                                            <h1>$ 18,536.32</h1>
                                        </div>
                                    </div>
                                    {/* Secound Chart  */}
                                    <CustomAreaChart className='flex-1 '></CustomAreaChart>
                                    <div className=' w-full'> {/* Added 'flex justify-center' to center the button */}
                                        <button>See analytics →</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Summary;
