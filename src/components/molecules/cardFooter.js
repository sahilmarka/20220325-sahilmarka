import React from 'react'
import { Flex } from 'rebass'
import styled, { css } from 'styled-components'
import Text from 'components/atoms/Text'

const CardFooter = ({text, price, views}) => {
  return (
    <Container>
      <Flex flexDirection='column'>
        <Text fontFamily='Ubuntu' fontStyle='normal' fontWeight={400} fontSize='18px'>{text}</Text>
        <ButtonContainer>
          <Button>{price}$</Button>
          <Button>{views}m</Button>
        </ButtonContainer>
      </Flex>
      <Button fontSize='18px' width='100px' height='50px' alignSelf='end' cursor='pointer'>Book!</Button>
    </Container>
  )
}

const Container = styled(Flex)`
padding: 22px 21px 15px 27px;
background: linear-gradient(94.33deg, rgba(255, 255, 255, 0.6) 3.19%, rgba(255, 255, 255, 0.1) 99.26%);
backdrop-filter: blur(10px);
border-radius: 15px;
width: 100%;
justify-content: space-between;
width: 424px;
`

const ButtonContainer = styled(Flex)`
  padding-top: 13px;
  gap: 36px;
`

const Button = styled(Flex)`
  background: linear-gradient(90deg, #FF594C 0%, #FAC527 100%);
  border-radius: 6px;
  padding: 5px 25px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  width: ${p => p.width ?? '80px'};
  height: ${p => p.height ?? '30px'};
  ${p => p.cursor && css`cursor: ${p.cursor}`};
`

export default CardFooter