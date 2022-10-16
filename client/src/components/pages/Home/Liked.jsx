import React from 'react'
import { VStack, Image, Grid, GridItem } from '@chakra-ui/react'
import Card from './Card'

const Liked = () => {
  return (
    <VStack justifyContent={'center'} height={'100vh'}>
        <h1 className='font-bold text-cafe-noir text-3xl p-2'>Liked Styles</h1>
        <div className= 'overflow-y-auto'>
        <Grid templateColumns='repeat(2, 1fr)' gap={8} padding={'8'}>
            <Card img='1'/>
            <Card img='2'/>
            <Card img='3'/>
            <Card img='4'/>
            <Card img='5'/>
            <Card img='5'/>
            <Card img='5'/>
            <Card img='5'/>
            <Card img='5'/>
        </Grid>
        </div>
    </VStack>

  )
}

export default Liked