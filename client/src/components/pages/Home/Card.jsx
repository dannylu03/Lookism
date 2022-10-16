import React from "react";
import {VStack, Image, Grid, GridItem} from "@chakra-ui/react";

const Card = ({img}) => {
    return (
        <GridItem borderRadius={'30'} bg='blue.200' width={[100, 200, 300]} height={[150, 250, 350]} shadow={'xl'}>{img}</GridItem>
    )
}

export default Card