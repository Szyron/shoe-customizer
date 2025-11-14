import React from 'react'

function OrderForm() {






    return (
        <form className="bg-base-300 p-10 rounded-3xl shadow-lg w-96">
            <h1 className="text-3xl font-bold mb-4 text-center">Order Summary</h1>
            <div className="form-control ">
                <label className="label">
                    Last name
                </label>
                <label className="input flex items-center gap-2 w-76">
                    <input className="grow"
                        type="text"
                        id="lastName"
                        placeholder="Last name"
                        required
                    />
                </label>
                <label className="label">
                    Surname
                </label>
                <label className="input flex items-center gap-2 w-76">
                    <input className="grow"
                        type="text"
                        id="surname"
                        placeholder="Surname"
                        required
                    />
                </label>
                <label className="label">
                    Email address
                </label>
                <label className="input flex items-center gap-2 w-76">
                    <input className="grow"
                        type="email"
                        id="email"
                        placeholder="Email address"
                        required
                    />
                </label>
            </div>
            <div className="form-control mt-6 flex items-center justify-center">
                <button type="submit" className="btn btn-success text-white" >Order It Now!</button>
            </div>
        </form>
    )
}

export default OrderForm