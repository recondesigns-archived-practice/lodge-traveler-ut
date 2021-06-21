import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin-bottom: 80px;
    padding: 8px 28px 8px 28px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
    background: #414141;
    border-radius: 12px;
    border: none;
`

export default function Button(props) {
    const { label, onClick, className } = props
    return <StyledButton onClick={onClick}>{label}</StyledButton>
}
