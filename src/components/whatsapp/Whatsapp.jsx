import React from 'react'

const Whatsapp = () => {
    return (
        <div>
            <a
                href="https://wa.me/51912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg transition-transform duration-300 hover:scale-110 z-50"
            >
                <img
                    src="/img/whatsapp.svg"
                    alt="WhatsApp"
                    className="w-full h-full"
                />
            </a>
        </div>
    )
}

export default Whatsapp
