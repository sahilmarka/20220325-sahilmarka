import Text from 'components/atoms/Text'
import React from 'react'
import { Flex } from 'rebass'
import styled, { css } from 'styled-components'

const Footer = () => {
  return(
    <Container>
      <Flex flexDirection='column'>
        <Text fontFamily='Dancing Script' fontStyle='normal' fontWeight={700} fontSize='4.5rem' lineHeight='54px' >Your logo</Text>
        <Text 
          fontFamily='Ubuntu' 
          fontStyle='normal' 
          fontWeight={300} 
          fontSize='1.4rem' 
          lineHeight='1.8rem' mt='30px'
          width='80%'>
          © 2021 Company Name All rights reserved
        </Text>
      </Flex>
      <Flex justifyContent='space-evenly' width='60%' alignItems='center'>
        <List>Explore</List>
        <List>About Us</List>
        <List>Cities</List>
        <List br='10px' border={true}>Call</List>
      </Flex>
    </Container>
  )
}

const Container = styled(Flex)`
  padding: 6.1rem 9.7rem 3.7rem 9.1rem;
  justify-content: space-evenly;
`

const List = styled(Flex)`
font-family: 'Exo 2';
font-style: normal;
font-weight: 500;
font-size: 20px;
align-items: center;
text-align: center;
padding: 6px 14px;
${p => p.br && css` border-radius: ${p.br}`};
${p => p.border && css` border: 2px solid #000000`};
`

export default Footer