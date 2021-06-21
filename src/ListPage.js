import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import ListItem from './components/ListItem'

import firebase from './firebase'

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
    gap: 40px;
    // border: 1px dashed dodgerblue;
`

export default function ListPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [lodges, setLodges] = useState([])
    const ref = firebase.firestore().collection('lodges')

    // function getLodges() {
    //     if (isLoading === false) {
    //         setIsLoading(true)
    //     }

    //     ref.onSnapshot((snapShot) => {
    //         const items = []
    //         snapShot.forEach((doc) => {
    //             items.push(doc.data())
    //         })

    //         setLodges(items)
    //     })
    // }

    useEffect(() => {
        function getLodges() {
            if (isLoading === false) {
                setIsLoading(true)
            }
    
            ref.onSnapshot((snapShot) => {
                const items = []
                snapShot.forEach((doc) => {
                    items.push(doc.data())
                })
    
                setLodges(items)
            })
        }
        getLodges()
    }, [isLoading, ref])
    
    let list = lodges.map((lodge) => {
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
                {(lodges !== null) ? list : <p>{'Still loading...'}</p>}
            </ItemsWrapper>
        </Page>
    )
}
