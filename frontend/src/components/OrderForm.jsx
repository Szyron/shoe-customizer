import { useState, useContext } from "react";
import { toast } from "react-toastify";
import OrderContext from "./OrderContext";


function OrderForm() {

    const { selectedSize, colors: contextColors} = useContext(OrderContext);
    const [formData, setFormData] = useState({
        lastName: "",
        surname: "",
        email: "",
        tel: "",
        size: selectedSize || "",
        ...contextColors
    });

    
    const formSend = async (data) => {
        const repsonse = await fetch('http://localhost:8080/order', {
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });
        if (repsonse.ok) {
            toast.success("Order placed successfully!");
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
        formSend(playload);
    }



    return (
        <form className="p-10 rounded-3xl w-96" onSubmit={onSubmit}>
            <h1 className="text-3xl font-bold mb-4 text-center">Order Summary</h1>
            
            <ul className="mb-4 bg-base-300 text-center rounded-2xl p-4">   
                <p className="text-center">Selected Size: {selectedSize}</p>     
                <p className="text-center font-bold">Selected Colors:</p>
                {Object.entries(contextColors).map(([part, color]) => (
                    <li key={part}>{part}: <span style={{ backgroundColor: color, padding: '0 10px' }}>{name}</span></li>
                ))}
            </ul>
            <div className="form-control ">
                <label className="label">
                    Last name
                </label>
                <label className="input flex items-center gap-2 w-76">
                    <input className="grow"
                        type="text"
                        id="lastName"
                        placeholder="e.g. John"
                        required
                        onChange={writeData}
                        value={formData.lastName}
                    />
                </label>
                <label className="label">
                    Surname
                </label>
                <label className="input flex items-center gap-2 w-76">
                    <input className="grow"
                        type="text"
                        id="surname"
                        placeholder="e.g. Doe"
                        required
                        onChange={writeData}
                        value={formData.surname}
                    />
                </label>
                <label className="label">
                    Email address
                </label>
                <label className="input flex items-center gap-2 w-76">
                    <input className="grow"
                        type="email"
                        id="email"
                        placeholder="e.g. john.doe@example.com"
                        required
                        onChange={writeData}
                        value={formData.email}
                    />
                </label>
                <label className="label">
                    Phone number
                </label>
                <label className="input flex items-center gap-2 w-76">
                    <input className="grow"
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
                <button type="submit" className="btn btn-success text-white">Order It Now!</button>
            </div>
        </form>
    )
}

export default OrderForm