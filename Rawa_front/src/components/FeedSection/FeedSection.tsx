import FacebookIcon from "../../Icons/FacebookIcon"
import InstagramIcon from "../../Icons/InstagramIcon"
import SpotifyIcon from "../../Icons/SpotifyIcon"
import TwitterIcon from "../../Icons/TwitterIcon"
import YoutubeIcon from "../../Icons/YoutubeIcon"
import { PostType } from "../../types/ArtistTypes"
import Post from "../Post/Post"

const FeedSection = ({artistId}) => {

    const post: Array<PostType> = [
        {
            artist: artistId,
            content: "Waiting for the concert!!"
        },
        {
            artist: artistId,
            content: "What did you think of this tour?"
        },
        {
            artist: artistId,
            content: "Another day listening to Passionfruit"
        }
    ]

    return(
        <div className="flex h-full w-full">
            <div className="h-full w-full">
                {post.map((p, index)=>{
                    return(
                        <Post post={p} key={index}/>
                    )
                })}
            </div>
            <div className="w-6/12">
                <div
                className="w-full bg-black rounded-2xl md:mb-3"
                style={{height: "60%", backgroundImage: `url(/${artistId}.png)`,
                backgroundSize: "cover"
                }}
                >
                </div>
                <div className="w-full h-40 rounded-2xl">
                    <div className="flex flex-col justify-center items-center w-full bg-gray-800 p-3 rounded-2xl">
                        <p className="text-white">Looking for unique experiences and exclusive privileges? Join our 
                        <strong className="text-priColor"> Platinum Pass</strong>
                        </p>
                        <button className="bg-white rounded-2xl text-priColor p-3 font-bold mt-2">Platinum Pass</button>
                    </div>
                    <div className="flex flex-col p-4">
                        <div className="flex flex-col mb-2">
                            <ul className="flex items-center justify-between font-bold">
                                <li className="cursor-pointer">Privacy Settings</li>
                                <li className="cursor-pointer">Language</li>
                            </ul>
                            <ul className="flex items-center justify-between font-bold">
                                <li className="cursor-pointer">Cockie Settings</li>
                                <li className="cursor-pointer">Terms of Use</li>
                            </ul>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <FacebookIcon/>
                            <TwitterIcon color={"#212121"}/>
                            <YoutubeIcon/>
                            <InstagramIcon/>
                            <SpotifyIcon/>
                        </div>
                        <div className="flex justify-center items-center">
                            <strong className="mr-3">@rawateam</strong>
                            <small>Ver 1.0</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedSection