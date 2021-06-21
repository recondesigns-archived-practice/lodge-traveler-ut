import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Button from './components/Button'

const Page = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    // position: relative;
    box-sizing: border-box;
    padding: 0px 0px 0px 0px;
    height: 100vh;
    width: 100vw;
    // border: 4px solid lightcoral;
`

function handleClick() {
    console.log('button fired')
}

export default function LandingPage() {
    return (
        <Page>
            <Header title={'Lodge Traveler'} subtitle={'Utah edition'} />
            <Button
                label={'Find a lodge'}
                onClick={() => handleClick()}
            /> 
        </Page>
    )
}
