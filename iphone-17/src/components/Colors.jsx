import { useState } from "react";


function Colors() {
    const colors = [
        { id: 'blue', name: 'Titânio Azul', Image: '../img/iphone-blue.jpg', colorClass: 'bg-blue-500' },
        { id: 'silver', name: 'Titânio Natural', Image: '../img/iphone-silver.jpg', colorClass: '<bg-gray-300' },
        { id: 'orange', name: 'Titânio Laranja', Image: '../img/iphone-orange.jpg', colorClass: 'bg-orange-500' }
    ];

    const models = [
        { name: 'Pro Max', screen: '6.9 polegadas', Storage: '256gb 512GB ou 1TB', baterry: '33h de vídeo', weight: '221g' },
        { name: 'Pro', screen: '6.3 polegadas', Storage: '128gb 256GB ou 512GB', baterry: '29h de vídeo', weight: '199g' }
    ]; 

    const [selectedColor, setSelectedColor] = useState('blue')

    return (
        <section id="colors" className="bg-black py-20 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl mb:text-6xl font-bold mb-4">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio espetaculares</p>
                </div>

                <div className="flex justify-center mb-12">
                    <div className="relative w-full max-w-3xl">
                        <div className="relative flex items-center justify-center min-h-[500px]">
                            <img src={colors.find(color => color.id === selectedColor).Image} alt="iphone 17"
                                className="max-w-full max-h-[600px] mx-auto right-25 relative"></img>
                        </div>

                        <div className="absolute bottom-8 left-0 right-0 text-center">
                            <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                                <h3 className="text-2xl font-semibold">{colors.find(color => color.id === selectedColor).name}</h3>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center align-items gap-4">
                    {colors.map(color => (
                        <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className={'relative transition-all duration-300 cursor-pointer'}>

                            <div className={`w-16 h-16 rounded-full ${color.colorClass} ${selectedColor === color.id ? 'border-white' : 'border-gray-600'} border-2`}></div>

                        </button>

                    ))}
                </div>
            </div>

            <div className="grid gap-8 mt-20 grid-cols-2">
                {models.map ( (model, index) => (
                    <div key={index} className="bg-linear-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800">
                        <div className="text-4xl mb-4">📱</div>
                        <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                        <p className="text-gray-400 mb-4">{model.screen}</p>
                        
                        <ul className="space-y-2 text-gray-300">
                            <li>{model.Storage}</li>
                            <li>{model.baterry}</li>
                            <li>{model.weight}</li>
                        </ul>
                    </div>
                ))}
            </div>

            <div className="text-center mt-16">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 mb-2 hover:scale-105 shadow-lg shadow-orange-500/50 cursor-pointer">
                    Compre agora a partir de R$ 10.499,00
                </button>
                <p>Ou em até 12x de R$ 874,90 sem juros</p>
            </div>
        </section>

    )
}

export default Colors

