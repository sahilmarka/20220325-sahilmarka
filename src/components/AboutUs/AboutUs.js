import React from 'react'
import { Flex } from 'rebass'
import styled, {css} from 'styled-components'
import Text from 'components/atoms/Text'
import { imageThree, imageFour, imageFive, imageSix } from 'assets/images'
import Chapter from 'components/molecules/chapter'

const AboutUs = () => {
  return (
    <Container>
      <Cards>
        <Flex flexDirection='column' justifyContent='center'>
          <Text fontFamily='Exo 2' fontStyle='normal' fontWeight={700} fontSize='6.4rem'>
            About Us
          </Text>
          <Text fontFamily='Ubuntu' fontStyle='normal' fontWeight='400' fontSize='1.8rem' mt='21px' maxWidth='265px'>
              Allow us to tell you a short story...
          </Text>
          <CardHeader>
          <Card src={imageThree} mt='56px' width='400px' height='267px'/>
          <Chapter mainText='Chapter I' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' bottom='-9rem'/>
        </CardHeader>
        </Flex>
        <CardHeader>
          <Card src={imageFour} mt='223px' width='500px' height='334px'/>
          <Chapter mainText='Chapter II' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' />
        </CardHeader>
        <CardHeader>
          <Card src={imageFive} width='400px' height='503px'/>
          <Chapter mainText='Chapter III' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' bottom='-1rem'/>
        </CardHeader>
        <CardHeader>
          <Card src={imageSix} mt='75px' width='500px' height='500px'/>
          <Chapter mainText='Chapter IV' subText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun' />
        </CardHeader>
      </Cards>
    </Container>
  )
}

const Container = styled(Flex)`
  padding: 8rem 7rem;
  flex-direction: column;
  align-items: center;
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

const Card = styled(Flex)`
  width: ${p => p.width };
  height: ${p => p.height };
  border-radius: 25px;
  background-image: url(${p => p.src});
  background-repeat: no-repeat;
  background-size: cover;
  ${p => p.mt && css` margin-top: ${p.mt}`};
`
export default AboutUs