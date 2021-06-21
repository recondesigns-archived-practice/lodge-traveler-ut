import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'

const Page = styled.main`
    box-sizing: border-box;
    // padding: 200px 0px 0px 0px;
    height: 100vh;
    width: 100vw;
    border: 4px solid lightcoral;
`

export default function MapPage() {
    return (
        <Page>
            {/* <Header title={'Please select a lodge'} subtitle={'for more details'} /> */}
            <p>{'Map page'}</p>
        </Page>
    )
}
