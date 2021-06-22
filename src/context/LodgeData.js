import React, { useState, useEffect } from 'react'
import firebase from '../firebase'

export const LodgeDataContext = React.createContext()

export default function LodgeData({ children }) {
    const [lodgeArr, setLodgeArr] = useState([])

    useEffect(() => {
        const ref = firebase.firestore().collection('lodges')

        function getLodges() {
            ref.onSnapshot((snapShot) => {
                const items = []
                snapShot.forEach((doc) => {
                    items.push(doc.data())
                })
    
                setLodgeArr(items)
            })
        }

        getLodges()
      },[])

    return (
        <LodgeDataContext.Provider value={[lodgeArr, setLodgeArr]}>
            { children }
        </LodgeDataContext.Provider>
    )
}
