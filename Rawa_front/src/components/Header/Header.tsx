import {Link} from "react-router-dom"

const Header = () => {

    const grupos = [
        {
            image: "/weekend.png",
            description: "Check out the latest images from The Weekend",
            route: "/artist/theweekend"
        },
        {
            image: "/slipknot.png",
            description: "Slipknot New Tour?",
            route: "/artist/slipknot"
        },
        {   
            image: "/coldplay.png",
            description: "Flashbacks of Coldplay on Argentina",
            route: "/artist/coldplay"
        },
        {
            image: "/boris.png",
            description: "1 day in the life of Boris Brejcha",
            route: "/artist/boris"
        },
        {
            image: "/michael.png",
            description: "Relive the best of Dangerous Tour",
            route: "/artist/michael"
        }
    ]

    return(
        <header className=" md:pt-10 md:pb-10 md:pl-32 md:pr-32">
            <div>
                <h2 className="text-2xl text-black font-moch">New Media</h2>
            </div>
            <div className="md:flex md:flex-row md:pt-5">
                {grupos.map((artista, index)=>{
                    return(
                        <div key={artista.description} style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 48.44%, #212121 100%), url(${artista.image})`, width: "20%", height: "350px", backgroundPosition: "center", backgroundSize: "cover"
                            }}
                        className="rounded-2xl relative"
                        >
                            <Link to={artista.route}>
                                <p className="text-white font-bold absolute -bottom-0 pb-5 pl-3"> {artista.description} </p>
                            </Link>
                        </div>
                    )
                })}
                
            </div>
        </header>
    )
}

export default Header;