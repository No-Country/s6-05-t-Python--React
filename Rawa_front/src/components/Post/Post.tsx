import ComentIcon from "../../Icons/ComentIcon";
import LikeIcon from "../../Icons/LikeIcon";

const Post = ({post}) =>{

    return(
        <div className="border-b-2 md:p-4">
            <div className="md:flex">
                <div style={{width:"80px", height: "80px", borderRadius: "50%", backgroundImage: `url(/${post.artist}.png)`
                , backgroundPosition: "center", backgroundSize: "cover"
                }}></div>
                <div className="md:ml-5">
                    <h3 className="font-bold">{post.artist}Post</h3>
                    <p> {post.content} </p>
                </div>
            </div>
            <div className="flex md:mt-3 md:mb-3">
                <LikeIcon/>
                <ComentIcon/>
            </div>
        </div>
    )
}

export default Post;