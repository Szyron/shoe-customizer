import { useState, useContext } from "react";
import { toast } from "react-toastify";
import OrderContext from "./OrderContext";


function OrderForm() {

    const { selectedSize, colors: contextColors, defaultColors, setColors } = useContext(OrderContext);
    const [formData, setFormData] = useState({
        lastName: "",
        surname: "",
        email: "",
        tel: "",
        size: selectedSize || "",
        ...contextColors
    });

    
    const formSend = async (data) => {
        const repsonse = await fetch('https://shoe-customizer-production.up.railway.app/order', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });
        if (repsonse.ok) {
            toast.success("Order placed successfully!");
            setFormData({
            lastName: "",
            surname: "",
            email: "",
            tel: "",
            size: "",
            ...defaultColors,
        });
        setColors(defaultColors);
        } else {
           toast.error("Failed to place order. Please try again.");
        }
    }

    const writeData = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const onSubmit = (e) => {
        const playload = { ...formData, size: selectedSize, ...contextColors };
        e.preventDefault();
        if (!selectedSize) {
            toast.error("Please select a shoe size before ordering.");
            return;
        }
        formSend(playload);
    }



    return (
        <form className="p-6 md:p-8 lg:p-10 rounded-3xl w-full max-w-sm md:max-w-md lg:max-w-lg" onSubmit={onSubmit}>
            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">Order Summary</h1>
            
            <ul className="mb-4 bg-base-300 text-center rounded-2xl p-4 text-sm md:text-base">   
                <p className="text-center">Selected Size: {selectedSize}</p>     
                <p className="text-center font-bold mb-2">Selected Colors:</p>
                {Object.entries(contextColors).map(([part, color]) => (
                    <li key={part} className="text-xs md:text-sm mb-2 flex items-center justify-center gap-2">{part}: <span style={{ backgroundColor: color }} className="inline-block rounded w-6 h-6 md:w-8 md:h-8 border-2 border-gray-400"></span></li>
                ))}
            </ul>
            <div className="form-control ">
                <label className="label text-sm md:text-base">
                    Last name
                </label>
                <label className="input input-sm md:input-md flex items-center gap-2 w-full">
                    <input className="grow text-sm md:text-base"
                        type="text"
                        id="lastName"
                        placeholder="e.g. John"
                        required
                        onChange={writeData}
                        value={formData.lastName}
                    />
                </label>
                <label className="label text-sm md:text-base">
                    Surname
                </label>
                <label className="input input-sm md:input-md flex items-center gap-2 w-full">
                    <input className="grow text-sm md:text-base"
                        type="text"
                        id="surname"
                        placeholder="e.g. Doe"
                        required
                        onChange={writeData}
                        value={formData.surname}
                    />
                </label>
                <label className="label text-sm md:text-base">
                    Email address
                </label>
                <label className="input input-sm md:input-md flex items-center gap-2 w-full">
                    <input className="grow text-sm md:text-base"
                        type="email"
                        id="email"
                        placeholder="e.g. john.doe@example.com"
                        required
                        onChange={writeData}
                        value={formData.email}
                    />
                </label>
                <label className="label text-sm md:text-base">
                    Phone number
                </label>
                <label className="input input-sm md:input-md flex items-center gap-2 w-full">
                    <input className="grow text-sm md:text-base"
                        type="tel"
                        id="tel"
                        placeholder="e.g. +36 30 123 4567"
                        required
                        onChange={writeData}
                        value={formData.tel}
                    />
                </label>
            </div>
            <div className="form-control mt-6 flex items-center justify-center">
                <button type="submit" className="btn btn-sm md:btn-md btn-success text-white w-full md:w-auto">Order It Now!</button>
            </div>
        </form>
    )
}

export default OrderForm