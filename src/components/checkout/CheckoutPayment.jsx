import React, { useState } from 'react'

const CheckoutPayment = () => {
    const [selected, setSelected] = useState("card");

    const paymentMethods = [
        {
            id: "card",
            label: "Credit/Debit Card",
            description: "Pay securely using your credit or debit card.",
        },
        {
            id: "paypal",
            label: "PayPal",
            description: "Checkout quickly with your PayPal account.",
        },
        {
            id: "cod",
            label: "Cash on Delivery",
            description: "Pay with cash when your order is delivered.",
        },
    ];




    return (

        <div >
            <h2 className="font-poppins font-semibold text-4xl leading-11.5 text-secondary mb-10">Payment Method</h2>
            <div className="flex flex-col gap-8">
                {paymentMethods.map((item) => (
                    <label
                        key={item.id}
                        className={`p-4 w-216 rounded-lg border cursor-pointer transition flex items-center
                            ${selected === item.id ? "border-orange-500 bg-orange-50 shadow" : "border-gray-300 bg-white"}`}>
                        <input
                            type="radio"
                            name="payment"
                            value={item.id}
                            checked={selected === item.id}
                            onChange={() => setSelected(item.id)}
                            className="form-radio h-5 w-5 text-orange-500 accent-orange-500"
                        />
                        <div className="ml-4">
                            <div className="font-poppins text-xl font-semibold">{item.label}</div>
                            <p className="font-montserrat text-base text-gray-600">{item.description}</p>
                        </div>
                    </label>
                ))}
            </div>
            {/* Card details form (show only if card is selected) */}
            {
                selected === "card" && (
                    <div className="mt-6 space-y-8">
                        <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full border font-montserrat text-base border-gray-300 rounded px-4 py-7"
                        />
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="w-1/2 border font-montserrat text-base border-gray-300 rounded px-4 py-7"
                            />
                            <input
                                type="text"
                                placeholder="CVC"
                                className="w-1/2 border font-montserrat text-base border-gray-300 rounded px-4 py-7"
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Name on Card"
                            className="w-full border font-montserrat text-base border-gray-300 rounded px-4 py-7"
                        />
                    </div>
                )
            }
            {/* <button className="mt-8 w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition">Pay Now</button> */}
        </div>


    )
}

export default CheckoutPayment