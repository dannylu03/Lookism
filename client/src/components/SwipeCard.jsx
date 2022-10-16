const SwipeCard = ({image, swipedLeft, swipedRight}) => {
    return ( 
        <div className={"h-full w-4/6 rounded-xl overflow-hidden mx-1"}>
            <img src={require(`../assets/image/${image}`)} alt={``} className="rounded-xl h-full w-full" />
        </div>
     );
}
 
export default SwipeCard;
