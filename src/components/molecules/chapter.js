import Text from 'components/atoms/Text'
import React from 'react'
import { Flex } from 'rebass'
import styled from 'styled-components'

const Chapter = ({ mainText, subText, ...props }) => {
  return (
    <Container {...props}>
      <Text fontFamily='Ubuntu' fontStyle='normal' fontWeight='700' fontSize='24px'>{mainText}</Text>
      <Text ontFamily='Ubuntu' fontStyle='normal' fontWeight='300' fontSize='14px' mt='13px'>{subText}</Text>
    </Container>
  )
}

const Container = styled(Flex)`
  background: linear-gradient(94.33deg, rgba(255, 255, 255, 0.6) 3.19%, rgba(255, 255, 255, 0.1) 99.26%);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  flex-direction: column;
  padding: 3rem 1.5rem;
  position: absolute;
  bottom: ${p => p.bottom ?? '-7rem'};
  width: 80%;
`

export default Chapter