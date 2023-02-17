const CardMedia = ({info}) => {
    return(
        <div className="flex flex-col col-auto cursor-pointer">
            <div className="w-full rounded-2xl"
            style={{backgroundImage: `url(${info.image})`, backgroundSize: "cover", height: "150px",
            backgroundPosition: "center"
            }}
            >
            </div>
            <h4 className="font-bold mt-2">{info.isNew === true ? <strong className="text-priColor">New </strong> : ""}{info.title}</h4>
        </div>
    )
}

export default CardMedia