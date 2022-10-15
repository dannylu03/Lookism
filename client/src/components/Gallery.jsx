import Card from "./Card";

const Gallery = ({ userStyles, setStyles}) => {
    const styles = [["minimalist", "edgy"], ["casual", "business-casual"], ["vintage", "biker"], ["athletic", "skater"], ["artsy", "classic"], ["cosplay", "elegant"], ["wild-west", "military"], ["nerdy",  "traditional"], ["kpop", "rave"], ["boho", "hippie"]];

    return ( 
        <div className="h-5/6 w-3/5 m-auto flex flex-col overflow-scroll">
            {
                styles.map((val, i) => 
                    <div className="flex justify-around w-full h-1/2 mb-2">
                        <Card style={val[0]} index={i * 2} key={i * 2} userStyles={userStyles} setStyles={setStyles}/>
                        <Card style={val[1]} index={i * 2 + 1} key={i * 2 + 1} userStyles={userStyles} setStyles={setStyles}/>
                    </div>
                )
            }
        </div>
     );
}
 
export default Gallery;