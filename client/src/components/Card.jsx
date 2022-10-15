import { useState } from "react";

const Card = ({ style, index, userStyles, setStyles }) => {
    const [darkened, darkenCard] = useState(false)
    const selectCard = () => {
        darkenCard(!darkened);
        if(darkened){
            const remove = userStyles.indexOf(style);
            setStyles(userStyles.slice(0, remove).concat(userStyles.slice(remove + 1)))
        }
        else{
            setStyles(userStyles.concat(style))
        }
    }
    return ( 
        <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease" + (darkened && "filter brightness-[60%]")} onClick={selectCard}>
            <img src={require(`../assets/image/${index}-${style}.jpeg`)} alt={``} className="rounded-xl h-auto w-full" />
            <div className="absolute top-4 z-10 inline-block m-auto text-white text-sm bg-camel rounded-xl p-2">{style.split('-')[0][0].toUpperCase() + style.split('-')[0].slice(1)}</div>
        </div>
     );
}
 
export default Card;