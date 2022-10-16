import React from 'react'
import { VStack, Image, Grid, GridItem } from '@chakra-ui/react'
import Card from './Card'

const Profile = () => {
  return (
    <VStack justifyContent={'center'} height={'100vh'}>
        <h1 className='font-bold text-cafe-noir text-3xl p-2'>Profile</h1>
        <Image shadow={'lg'} width={[50, 100, 150]} borderRadius={'full'} objectFit='cover' src="https://bit.ly/sage-adebayo" alt="Segun Adebayo"/>
        <h1 className='font-bold text-cafe-noir text-2xl p-2'>Your Styles</h1>
        <div className='overflow-y-auto h-screen'>
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

export default Profile;