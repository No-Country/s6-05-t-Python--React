const Divider = () => {

    return(
        <section 
        style={{backgroundImage:"url(/divider.png)", backgroundRepeat: "no-repeat", backgroundSize:"cover", backgroundPosition:"center"}}
        className="flex flex-row w-full h-40 relative justify-center items-center">
            <div>
                <h2
                className="text-white text-3xl font-moch">Music brings us together</h2>
            </div>
        </section>
    )
}   

export default Divider;