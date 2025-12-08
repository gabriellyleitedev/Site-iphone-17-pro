

function NavBar() {

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
                <a href="#design" className="hover:text-gray-300">Design</a>
                <a href="#camera" className="hover:text-gray-300">Câmera</a>
                <a href="#performance" className="hover:text-gray-300">Performance</a>
                <a href="#cores" className="hover:text-gray-300">Cores</a>

                <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-full">Comprar</button>
            </div>
        </nav>
    )
}

export default NavBar