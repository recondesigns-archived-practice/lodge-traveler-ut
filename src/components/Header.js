import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    border: 4px solid #414141;
`

export default function Header() {
    return (
        <StyledHeader>
            <p>{'Header'}</p>
        </StyledHeader>
    )
}
