import Post from "../Post/Post"

const FeedSection = ({artistId}) => {

    const post = [
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
                backgroundSize: "cover", backgroundPosition: "center"
            }}
                >
                </div>
                <div className="bg-red-600 w-full h-40">

                </div>
            </div>
        </div>
    )
}

export default FeedSection