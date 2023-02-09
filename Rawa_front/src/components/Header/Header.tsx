const Header = () => {

    const grupos = [
        {
            image: "/weekend.png",
            description: "Check out the latest images from The Weekend"
        },
        {
            image: "/slipknot.png",
            description: "Slipknot New Tour?"
        },
        {   
            image: "/coldplay.png",
            description: "Flashbacks of Coldplay on Argentina"
        },
        {
            image: "/boris.png",
            description: "1 day in the life of Boris Brejcha"
        },
        {
            image: "/michael.png",
            description: "Relive the best of Dangerous Tour"
        }
    ]

    return(
        <header className=" md:pt-10 md:pb-10 md:pl-32 md:pr-32">
            <div>
                <h2 className="font-bold text-2xl text-black">New Media</h2>
            </div>
            <div className="md:flex md:flex-row md:pt-5">
                {grupos.map((artista, index)=>{
                    return(
                        <div style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 48.44%, #212121 100%), url(${artista.image})`, width: "20%", height: "350px", backgroundPosition: "center", backgroundSize: "cover"
                    }}
                        className="rounded-2xl relative"
                        >
                            <p className="text-white font-bold absolute -bottom-0 pb-5 pl-3"> {artista.description} </p>
                        </div>
                    )
                })}
                
            </div>
        </header>
    )
}

export default Header;