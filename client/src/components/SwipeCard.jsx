const SwipeCard = ({image, swipedLeft, swipedRight}) => {
    return ( 
        <div className={"relative h-[80vh] w-[42%] rounded-xl overflow-hidden mx-1 transition-all duration-500 ease" + (swipedLeft && " -translate-x-full opacity-0") + (swipedRight && "translate-x-full opacity-0")}>
            <img src={require(`../assets/image/${image}`)} alt={``} className="rounded-xl h-full w-full" />
        </div>
     );
}
 
export default SwipeCard;
