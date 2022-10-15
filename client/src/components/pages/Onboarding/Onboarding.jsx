import axios from "axios";
import { useState } from "react";
import Gallery from "../../Gallery";
import { useNavigate } from "react-router-dom";

const Onboarding = ({ user }) => {
    const navigate = useNavigate();
    const [userStyles, setStyles] = useState([])
    const updatingUser = () => {
        axios.put(`http://localhost:8000/users/update/${user._id}`, {
            username: user.name,
            tags: userStyles
        })
            .then(res => {
                navigate("/home");
            })
            .catch(err => console.log(err))
    }
    return ( 
        <div className="bg-cultured w-screen h-screen flex flex-col justify-center items-center">
            <p className='absolute top-0 left-0 p-3 text-timberwolf'>Lookism</p>
            <div className="bg-timberwolf w-4/5 h-5/6 rounded-xl relative">
                <h1 className="text-cafe-noir p-3 font-serif">Choose styles that you like</h1>
                <Gallery userStyles = {userStyles} setStyles = {setStyles}/>
            </div>
            <button onClick={updatingUser} className="w-1/4 bg-camel text-white font-serif text-xl rounded-3xl p-2 mt-2">Continue</button>
        </div>
     );
}
 
export default Onboarding;