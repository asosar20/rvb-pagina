const BeneficioCard = ({ Icon, title, description }) => {
    return (
        <div className="lg:w-96  rounded-b-2xl shadow-xl transition text-center p-6 grid place-items-center">
            <div>
                <Icon className="h-10 w-10 text-[#0F70B7] mb-4" />
                <h3 className="text-xl font-title font-semibold text-[#0F70B7] mb-2">{title}</h3>
                <p className="text-gray-900 font-body">{description}</p>
            </div>
        </div>
    )
}

export default BeneficioCard
