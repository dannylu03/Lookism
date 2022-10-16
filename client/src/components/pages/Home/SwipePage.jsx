import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SwipeCard from "../../SwipeCard";
import { HStack, VStack } from "@chakra-ui/react";

function SwipePage ({ user }) {
    // const sleep = (ms) => {
    //     return new Promise(resolve => setTimeout(resolve, ms));
    // }
    // document.addEventListener('keydown', (e) => {
    //     if (e.key === "ArrowLeft"){
    //         swipeLeft();
    //         sleep(1500)
    //     }
    //     if(e.key === "ArrowRight"){
    //         swipeRight();
    //         sleep(1500)
    //     }
    // })
    const [userTags, setUserTags] = useState([]);
    const [cardBatch, setCardBatch] = useState([])
    const [numSwipe, setNumSwiped] = useState(0);
    const [swipedLeft, setSwipedLeft] = useState(false);
    const [swipedRight, setSwipedRight] = useState(false);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    };
    const swipeLeft = () => {
        setNumSwiped((numSwipe + 1) % 5);
        setSwipedLeft(true);
        setTimeout(() => {
            setSwipedLeft(false);
        }, 100)
    }
    const swipeRight = () => {
        axios.put(`http://localhost:8000/users/update/${user._id}`, {
            tags: userTags.slice().concat(...cardBatch[numSwipe].tags)
        }, config)
        .then(res => {
            setUserTags(userTags.slice(0).concat(...cardBatch[numSwipe].tags))
            setNumSwiped((numSwipe + 1) % 5);
            setSwipedRight(true);
            setTimeout(() => {
                setSwipedRight(false);
            }, 300)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        // GET 5 cards to start
        const Card1 = {
            name: "BTS",
            clotheslist: ["Jacket"],
            user: "634ae34fa67aa4f584cdaafc",
            tags: ['kpop', 'edgy', 'elegant'],
            img: "16-kpop.jpeg"
        }
        const Card2 = {
            name: "Chilling",
            clotheslist: ["Hoodie"],
            user: "634ae34fa67aa4f584cdaafc",
            tags: ["casual", "edgy", "skater"],
            img: "7-skater.jpeg"
        }
        const Card3 = {
            name: "Fighting",
            clotheslist: ["camouflage", "jacket"],
            user: "634ae34fa67aa4f584cdaafc",
            tags: ["military", "rave"],
            img: "13-military.jpeg"
        }
        const Card4 = {
            name: "Good Times",
            clotheslist: ["trench", "coat"],
            user: "634ae34fa67aa4f584cdaafc",
            tags: ["cosplay", "artsy"],
            img: "10-cosplay.jpeg"
        }
        const Card5 = {
            name: "YOLO",
            clotheslist: ["dress, pants"],
            user: "634ae34fa67aa4f584cdaafc",
            tags: ["rave", "artsy"],
            img: "17-rave.jpeg"
        }
        setCardBatch([Card1, Card2, Card3, Card4, Card5]);
        axios.get(`http://localhost:8000/users/${user._id}`, config)
        .then(res => {
            setUserTags(res.data.tags);
        })
        .catch(err => console.log(err))
    }, [user])


    return (
        <VStack>
            <h1 className="w-full text-center">"Swipe" Left or Right!</h1>
            <SwipeCard image={cardBatch[numSwipe]?.img || "0-minimalist.jpeg"} swipedLeft={swipedLeft} swipedRight={swipedRight}/>
            <HStack gap={100}>
                <button onClick={swipeLeft} className="bg-cultured rounded-[50%]"><img src={require(`../../../assets/image/left.png`)} alt="left" className="h-auto w-full"/></button>
                <button onClick={swipeRight} className="bg-cultured rounded-[50%]"><img src={require(`../../../assets/image/right.png`)} alt="right" className="h-auto w-full"/></button>
            </HStack>
        </VStack>
    )
}

export default SwipePage;
