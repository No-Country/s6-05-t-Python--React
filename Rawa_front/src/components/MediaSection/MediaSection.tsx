import SearchIcon from "../../Icons/SearchIcon"
import FacebookIcon from "../../Icons/FacebookIcon"
import InstagramIcon from "../../Icons/InstagramIcon"
import SpotifyIcon from "../../Icons/SpotifyIcon"
import TwitterIcon from "../../Icons/TwitterIcon"
import YoutubeIcon from "../../Icons/YoutubeIcon"
import CardMedia from "../CardMedia/CardMedia"

const MediaSection = ({artistId}) => {

    const mediaList = [
        {
            image: `/${artistId}.png`,
            title: "PhotoStep in L.A",
            isNew: true
        },
        {
            image: `/${artistId}.png`,
            title: "PhotoStep in L.A",
            isNew: true
        },
        {
            image: `/${artistId}.png`,
            title: "PhotoStep in L.A",
            isNew: true
        }
    ]

    return(
        <div className="flex">
            <div
            style={{background: "linear-gradient(90deg, #212121 2.41%, rgba(33, 33, 33, 0.62) 97.72%)"}} 
            className="flex flex-col items-center justify-around w-4/12 bg-red-600 p-5">
                <div
                className="border"
                style={{backgroundImage: `url(/${artistId}.png)`, width: "200px", height: "250px"
                , backgroundSize: "cover", borderRadius: "20px", backgroundRepeat: "no-repeat", backgroundPosition: "center"
            }}
                ></div>
                <ul className="flex flex-col text-white text-2xl mt-5 font-moch">
                    <li className="mb-5 cursor-pointer">Popular</li>
                    <li className="mb-5 cursor-pointer">Latest</li>
                    <li className="mb-5 cursor-pointer">All</li>
                    <li className="cursor-pointer">Lives</li>
                </ul>
                <div className="flex items-center bg-gray-800 p-3 mt-5 rounded-2xl">
                    <SearchIcon color={"#21D19F"}/>
                    <input type="text" style={{backgroundColor: "transparent", border: "none", outline: "none"}}/>
                </div>
                <h4 className="text-white font-bold mt-5">Support the artist</h4>
                <div className="flex items-center justify-between mb-2 w-full mt-5">
                    <FacebookIcon color={"#FFF"}/>
                    <TwitterIcon color={"#FFF"}/>
                    <YoutubeIcon color={"#FFF"}/>
                    <InstagramIcon color={"#FFF"}/>
                    <SpotifyIcon color={"#FFF"}/>
                </div>
            </div>
            <div className="h-full w-full p-4">
                <div className="grid grid-cols-3 gap-4 p-4">
                    {mediaList.map((m, index)=>{
                        return(
                            <CardMedia info={m} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MediaSection