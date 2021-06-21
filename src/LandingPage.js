import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import Header from './components/Header'
import Button from './components/Button'

const Page = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 0px 0px 0px;
    height: 100vh;
    width: 100vw;
    // border: 4px solid lightcoral;
`

export default function LandingPage() {
    const history = useHistory()

    function handleClick() {
        history.push('/map')
    }

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
