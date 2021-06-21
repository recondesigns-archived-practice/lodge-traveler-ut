import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    // position: absolute;
    // top: 0px;
    z-index: 4;
    // background: white;
    padding: 80px 20px 8px 20px;
    // border: 4px solid #414141;
`

const Title = styled.h1`
    margin-bottom: 4px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 42px;
    line-height: 48px;
    color: #414141;
    // border: 1px dashed green;
`

const Subtitle = styled.h5`
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 40px;
    color: rgba(65, 65, 65, 0.6);
    // border: 1px dashed green;
`

export default function Header(props) {
    const { title, subtitle } = props

    return (
        <StyledHeader>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
        </StyledHeader>
    )
}
