import React from 'react'
import { Flex } from 'rebass'
import styled, {css} from 'styled-components'
import Text from 'components/atoms/Text'
import { imageOne, imageTwo } from 'assets/images'
import CardFooter from 'components/molecules/cardFooter'

const Explore = () => {
  return (
    <Container>
      <Cards>
      <Flex flexDirection='column' justifyContent='center'>
        <Text fontFamily='Exo 2' fontStyle='normal' fontWeight={700} fontSize='6.4rem'>
          Explore
        </Text>
        <Text fontFamily='Ubuntu' fontStyle='normal' fontWeight='400' fontSize='1.8rem' mt='21px' maxWidth='265px'>
          From one-guest rooms to penthouses with pools and gardens
        </Text>
          <CardHeader>
            <Card src={imageOne} mt='56px'/>
            <CardBody>
              <CardFooter text='Room with one king-size bed' price={25} views={28}/>
            </CardBody>
          </CardHeader>
          </Flex>
        <CardHeader>
          <Card src={imageTwo} mt='190px'/>
          <CardBody>
            <CardFooter text='Penthouse for 8 person' price={2039} views={438}/>
          </CardBody>
        </CardHeader>
      </Cards>
    </Container>
  )
}

const Container = styled(Flex)`
  padding: 8rem 7rem;
  flex-direction: column;
  justify-content: space-evenly;
`
const Cards = styled(Flex)`
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const CardHeader = styled(Flex)`
  position: relative;
  justify-content: center;
`

const CardBody = styled(Flex)`
  position: absolute;
  bottom: -50px;
  align-items: center;
`

const Card = styled(Flex)`
  width: 500px;
  height: 300px;
  border-radius: 25px;
  background-image: url(${p => p.src});
  ${p => p.mt && css` margin-top: ${p.mt}`};
`

export default Explore