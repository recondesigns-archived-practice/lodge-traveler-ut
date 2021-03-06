import React, { useContext } from 'react'
import styled from 'styled-components'
import { LodgeDataContext } from './context/LodgeData'
import Header from './components/Header'
import ListItem from './components/ListItem'

const Page = styled.main`
    box-sizing: border-box;
    padding: 0px 0px 40px 0px;
    min-height: 100vh;
    width: 100vw;
    // border: 4px solid lightcoral;
`

const ItemsWrapper = styled.div`
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    // border: 1px dashed dodgerblue;
`

export default function ListPage() {
    const [lodgeArr] = useContext(LodgeDataContext)   
    
    let list = lodgeArr.map((lodge) => {
        const { 
            name,
            number,
            address,
            city,
            state,
            zipcode,
            county,
            meetings
        } = lodge

        return (
            <ListItem 
                key={name} 
                name={name}
                number={number}
                address={address}
                city={city}
                state={state}
                zipcode={zipcode}
                county={county}
                meetings={meetings}
            />
        )
    })

    return (
        <Page>
            <Header title={'Salt Lake City'} subtitle={'Utah'} />
            <ItemsWrapper>
                {(lodgeArr !== null) ? list : <p>{'Still loading...'}</p>}
            </ItemsWrapper>
        </Page>
    )
}
