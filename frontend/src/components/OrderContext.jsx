import { createContext, useEffect, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [dataSize, setDataSize] = useState({ sizes: [] });
    const [selectedSize, setSelectedSize] = useState(null);
    const [data, setData] = useState({});

    const defaultColors = {
        sole: "#FFFFFF",
        midBack: "#FFFFFF",
        shoeLace: "#FFFFFF",
        midFront: "#FFFFFF",
        midBottom: "#FFFFFF",
        top: "#FFFFFF",
        midFirstPolygon: "#FFFFFF",
        midSecondPolygon: "#FFFFFF",
        middleTop: "#FFFFFF"
    };
    const [colors, setColors] = useState(defaultColors);



    useEffect(() => {
        fetch('http://localhost:8080/shoe_size')
            .then(res => res.json())
            .then(data => setDataSize(data))
            .catch(err => alert("Error: " + err.message));
    }, []);
    
    useEffect(() => {
        fetch('http://localhost:8080/shoe')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => alert("Error: " + err.message));
    }, []);
    console.log("Shoe data fetched:", data);

    const steps = Object.keys(data);


    const handleSelect = (size) => {
        setSelectedSize(size);
    };

    return (
        <OrderContext.Provider value={{
            dataSize,
            selectedSize,
            handleSelect,
            defaultColors,
            colors,
            setColors,
            data,
            steps,
        }}>{children}
        </OrderContext.Provider>
    );
};


export default OrderContext;