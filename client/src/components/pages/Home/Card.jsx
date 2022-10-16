import React from "react";
import {VStack, Image, Grid, GridItem} from "@chakra-ui/react";

const Card = ({img}) => {
    return (
        <GridItem borderRadius={'30'} bg='blue.200' width={[25, 125, 225]} height={[75, 175, 275]} shadow={'xl'}></GridItem>
    )
}

export default Card