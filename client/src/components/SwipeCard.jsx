const SwipeCard = ({image, swipedLeft, swipedRight}) => {
    return ( 
        <div className={"relative h-[80vh] w-[42%] rounded-xl overflow-hidden mx-1"}>
            <img src={require(`../assets/image/${image}`)} alt={``} className="rounded-xl h-full w-full" />
        </div>
     );
}
 
export default SwipeCard;
