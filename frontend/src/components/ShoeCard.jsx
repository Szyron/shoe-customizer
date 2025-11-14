import { useState } from 'react'
import ShoeView from './ShoeView'
import { Link } from 'react-router-dom';
import StepsCard from './StepsCard';

function ShoeCard() {

    const [selectedPart, setSelectedPart] = useState(0);

    const steps = [
        "Sole",
        "Middle back",
        "Shoe lace",
        "Middle front",
        "Middle bottom",
        "Top",
        "Middle first polygon",
        "Middle second polygon",
        "Middle top"
    ];

    const nextStep = () => {
        setSelectedPart((prevPart) => (prevPart + 1) % steps.length);
    };

    const prevStep = () => {
        setSelectedPart((prevPart) => (prevPart - 1 + steps.length) % steps.length);
    };


    const [colors, setColors] = useState({
        sole: "#FAEBC8",
        midBack: "#FF5733",
        shoeLace: "#EBC9A0",
        midFront: "#0096DC",
        midBottom: "#00AAF0",
        top: "#00AAF0",
        midFirstPolygon: "#FAEBC8",
        midSecondPolygon: "#EBC9A0",
        middleTop: "#00C3FF"
    });


    const partKeyMap = {
        "Sole": "sole",
        "Middle back": "midBack",
        "Shoe lace": "shoeLace",
        "Middle front": "midFront",
        "Middle bottom": "midBottom",
        "Top": "top",
        "Middle first polygon": "midFirstPolygon",
        "Middle second polygon": "midSecondPolygon",
        "Middle top": "middleTop"
    };


    const colorOptionsMap = {
        sole: ["#ff0000", "#0000ff"],
        midBack: ["#FF5733", "#8B0000", "#FFC300"],
        shoeLace: ["#EBC9A0", "#ffffff"],
        midFront: ["#0096DC", "#004080", "#80d0ff"],
        midBottom: ["#00AAF0", "#0088c0"],
        top: ["#00AAF0", "#ff00ff", "#000000"],
        midFirstPolygon: ["#FAEBC8", "#d4a373"],
        midSecondPolygon: ["#EBC9A0", "#a67c52"],
        middleTop: ["#00C3FF", "#0099cc"]
    };

    const currentPartKey = partKeyMap[steps[selectedPart]];
    const colorOptions = colorOptionsMap[currentPartKey];

    return (
        <div className="card bg-base-100 w-200 h-200">

            <div className="card-body items-center text-center">
                <h1 className="card-title text-3xl text-success">Shoe Customization</h1>
                <p>Choose us about your dream shoe</p>
            </div>
            <div className="flex items-center justify-center border-2 border-gray-300 rounded-lg relative" >
                <figure className="w-100 h-100  hover-3d">

                    <ShoeView colors={colors} />
                    <figure>
                    </figure>
                </figure>
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-white rounded-lg shadow-lg border border-gray-300 flex items-center justify-center">
                    <figure className="w-24 h-24">
                        <ShoeView small colors={colors} />
                    </figure>
                </div>

            </div>
            <div>
                <StepsCard selectedPart={selectedPart} steps={steps} />
            </div>

            <div className="flex w-full justify-center gap-12 mt-10">
                <button className="btn" onClick={prevStep}>«</button>
                <p className="text-xl font-semibold mx-auto">{steps[selectedPart]}</p>
                <button className="btn" onClick={nextStep}>»</button>
            </div>
            <div className="card-body">
                <h2 className="card-title">Sole properties</h2>
                <div className="avatar placeholder gap-2">
                    {colorOptions.map((color) => (
                        <div
                            key={color}
                            className="w-12 h-12 rounded-full cursor-pointer border hover:scale-110 transition"
                            style={{ backgroundColor: color }}
                            onClick={() => setColors({ ...colors, [currentPartKey]: color })}
                        />
                    ))}
                </div>
                <div className="card-actions justify-end">
                    <Link to="/order" className="btn btn-primary">Order Now</Link>
                </div>
            </div>
        </div>
    )
}

export default ShoeCard


