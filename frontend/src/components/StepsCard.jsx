import React from 'react'

function StepsCard({ selectedPart, steps }) {
    return (
        <div className="w-full overflow-x-auto">
            <ul className="steps steps-horizontal text-success flex justify-start md:justify-center px-2 md:px-4 min-w-max md:min-w-0">
                {steps.map((stepName, index) => (
                    <li
                        key={index}
                        className={`step step-sm md:step-md ${index <= selectedPart ? "step-success" : ""}`}
                    >
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StepsCard