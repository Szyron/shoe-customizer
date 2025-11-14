import React from 'react'

function StepsCard({ selectedPart, steps }) {
    return (
        <ul className="steps ml-10 text-success flex justify-center">
            {steps.map((stepName, index) => (
                <li
                    key={index}
                    className={`step ${index <= selectedPart ? "step-success" : ""}`}
                >
                </li>
            ))}
        </ul>
    )
}

export default StepsCard