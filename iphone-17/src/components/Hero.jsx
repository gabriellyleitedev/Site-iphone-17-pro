

function Hero() {

    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute top-18 bottom-0 right-0 left-0 z-0">
                <img src="/img/hero.jpg" className="w-full h-full object-cover opacity-90"></img>
                <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/80"></div> 
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>

            </div>
        </section>
    )
}

export default Hero