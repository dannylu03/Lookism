import React from 'react'
import { VStack, Image, Grid, GridItem } from '@chakra-ui/react'
import Card from './Card'

const Liked = () => {
  return (
    <VStack justifyContent={'center'} height={'100vh'}>
        <h1 className='font-bold text-cafe-noir text-3xl p-2'>Liked Styles</h1>
        <div className= 'overflow-y-auto'>
        <Grid templateColumns='repeat(2, 1fr)' gap={8} padding={'8'}>
        <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/0-minimalist.jpeg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/juan.jpg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/terry.jpg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/danny.jpg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/friends1.jpg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/friends2.jpg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/16-kpop.jpeg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/12-wild-west.jpeg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/11-elegant.jpeg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
              <div className={"relative h-full w-full rounded-xl overflow-hidden mx-1 transition-all duration-500 ease"}>
                <img src={require(`../../../assets/image/4-vintage.jpeg`)} alt={``} className="rounded-xl h-auto w-full" />
              </div>
        </Grid>
        </div>
    </VStack>

  )
}

export default Liked