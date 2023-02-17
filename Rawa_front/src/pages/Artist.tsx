import { useParams } from "react-router-dom";
import { useState } from "react";
import FeedSection from "../components/FeedSection/FeedSection";
import MediaSection from "../components/MediaSection/MediaSection";

const Artist = () => {

    const {id} = useParams()

    const [isFeed, setIsFeed] = useState<Boolean>(true)

    return(
        <div className="md:pl-64 md:pr-64 md:pt-10">
            <div className="flex md:flex-row">
                <img src={`/${id}.png`} alt={id}/>
                <div className="md:pl-10">
                    <h2 className="font-bold md:text-4xl">{id?.toUpperCase()}</h2>
                    <p className="md:mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia totam voluptas amet, quod explicabo, expedita cumque facere eveniet eligendi architecto sint illum aliquid hic dolore rerum distinctio corporis saepe accusamus eaque ipsa quae natus esse perspiciatis. Qui, perferendis! Tempora, accusamus!</p>
                </div>
            </div>
            <div className="mt-10 mb-10">
                <div className="border-b-8 flex md:flex-row items-center justify-around md:mb-10">
                    <h3 
                    className={isFeed ? "cursor-pointer text-priColor border-b-8 border-priColor font-bold text-4xl" : "cursor-pointer font-bold text-4xl"}
                    onClick={()=>setIsFeed(!isFeed)}
                    >Feed</h3>
                    <h3 
                    className={isFeed ? "cursor-pointer font-bold text-4xl" : "cursor-pointer text-priColor border-b-8 border-priColor font-bold text-4xl"}
                    onClick={()=>setIsFeed(!isFeed)}
                    >Media</h3>
                </div>
                {isFeed ? <FeedSection artistId={id}/> : <MediaSection/>}
            </div>
        </div>
    )
}

export default Artist;