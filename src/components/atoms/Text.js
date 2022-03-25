import styled, { css } from "styled-components";
import { Flex } from "rebass";

const Text = styled(Flex)`
  ${({ color, fontSize, fontWeight, fontStyle, fontFamily }) => css`
    color: ${ color };
    font-size: ${ fontSize };
    font-weight: ${ fontWeight };
    font-style: ${ fontStyle };
    font-family: ${fontFamily };
  `}
  ${({mt}) => mt && css` margin-top: ${mt}`};
  ${p => p.maxWidth && css ` mx-width: ${p.maxWidth}`};
`
Text.defaultProps = {
  color: '#000'
}
export default Text