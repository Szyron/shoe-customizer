import { useState, useEffect,useContext  } from 'react'
import ShoeView from './ShoeView'
import StepsCard from './StepsCard';
import ShoeSize from './ShoeSize';
import OrderContext from './OrderContext';


function ShoeCard() {

    const { colors, setColors, defaultColors,steps,data } = useContext(OrderContext);

    const [selectedPart, setSelectedPart] = useState(0);


    

    const currentPartKey = steps[selectedPart];

    const nextStep = () => {
        setSelectedPart((prevPart) => (prevPart + 1) % steps.length);
    };

    const prevStep = () => {
        setSelectedPart((prevPart) => (prevPart - 1 + steps.length) % steps.length);
    };

    const colorOptions = data[currentPartKey] || [];




    return (
        <div className="card w-200 h-200">

            <div className="card-body items-center text-center">
                <h1 className="card-title text-3xl text-success">Shoe Customization</h1>
                <p>Choose us about your dream shoe</p>
            </div>
            <div>
                <StepsCard selectedPart={selectedPart} steps={steps} />
            </div>
            <div className="flex items-center justify-center border-2 border-gray-300 rounded-lg relative bg-base-300" >
                <figure className="w-100 h-100  hover-3d">
                    <ShoeView colors={colors} />
                </figure>
                <div className="absolute bottom-4 right-4 w-32 h-32 bg-white rounded-lg shadow-lg border border-gray-300 flex items-center justify-center">
                    <figure className="w-24 h-24 bg-base-300 rounded-lg shadow-lg border border-gray-300 flex items-center justify-center">
                        <ShoeView small colors={colors} />
                    </figure>
                </div>
                <div className="absolute top-4 left-4">
                    <button className="btn btn-accent text-white" onClick={() => setColors(defaultColors)}>Reset</button>
                </div>
            </div>
            <div className="flex w-full justify-center gap-12 mt-4">
                <button className="btn" onClick={prevStep}>«</button>
                <p className="text-xl font-semibold mx-auto">{steps[selectedPart]}</p>
                <button className="btn" onClick={nextStep}>»</button>
            </div>
            <div className="card-body">
                <h2 className="card-title">{steps[selectedPart]} properties</h2>
                <div className="avatar placeholder gap-2 mt-4">
                    {data[currentPartKey]?.map((color) => (
                        <div
                            key={color.value}
                            className={`w-12 h-12 rounded-full cursor-pointer border transition hover:scale-110
                            ${colors[currentPartKey] === color.value
                                    ? "ring-4 ring-green-500 animate-bounce"
                                    : ""}`}
                            style={{ backgroundColor: color.value }}
                            onClick={() => setColors({ ...colors, [currentPartKey]: color.value })}
                        />
                    ))}
                </div>
            </div>
            <div>
                <ShoeSize />
            </div>
        </div>
    )
}

export default ShoeCard


