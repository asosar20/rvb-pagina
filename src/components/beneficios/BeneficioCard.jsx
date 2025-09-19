import React from "react"

const BeneficioCard = ({ Icon, title, description }) => {
    return (
        <div className="
      p-6 
      bg-gray-100 
      border 
      border-gray-300 
      rounded-xl 
      shadow 
      hover:shadow-xl 
      transition 
      text-left
    ">
            <Icon className="h-10 w-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {title}
            </h3>
            <p className="text-gray-600">
                {description}
            </p>
        </div>
    )
}

export default BeneficioCard
