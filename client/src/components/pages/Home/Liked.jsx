import React from 'react'
import { VStack, Image, Grid, GridItem } from '@chakra-ui/react'
import Card from './Card'

const Liked = () => {
  return (
    <VStack justifyContent={'center'}>
        <h1 className='font-bold text-cafe-noir text-3xl p-2'>Liked Styles</h1>
        <Grid templateColumns='repeat(2, 1fr)' gap={5} padding={'10'}>
            <Card img='1'/>
            <Card img='2'/>
            <Card img='3'/>
            <Card img='4'/>
            <Card img='5'/>
        </Grid>
    </VStack>

  )
}

export default Liked