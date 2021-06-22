import React, { useState, useEffect, useCallback } from 'react'
// import firebase from './firebase'
import firebase from '../firebase'

export const LodgeDataContext = React.createContext()

export default function LodgeData({ children }) {
    const [lodgeArr, setLodgeArr] = useState([])
    // const [isLoading, setIsLoading] = useState(false)
    // const [lodges, setLodges] = useState([])
    const ref = firebase.firestore().collection('lodges')

    const getLodges = useCallback(() => {
        ref.onSnapshot((snapShot) => {
            const items = []
            snapShot.forEach((doc) => {
                items.push(doc.data())
            })

            setLodgeArr(items)
        })
    }, [])

    useEffect(() => {
        // const getLodges = () => {
        //     ref.onSnapshot((snapShot) => {
        //         const items = []
        //         snapShot.forEach((doc) => {
        //             items.push(doc.data())
        //         })
    
        //         setLodgeArr(items)
        //     })
        // }

        // function getLodges() {
        //     if (isLoading === false) {
        //         setIsLoading(true)
        //         console.log('its not loading.')
        //     }
    
        //     ref.onSnapshot((snapShot) => {
        //         const items = []
        //         snapShot.forEach((doc) => {
        //             items.push(doc.data())
        //         })
    
        //         setLodgeArr(items)
        //     })
        // }

        getLodges()
      },[getLodges])

    //   console.log(9999, lodgeArr)

    return (
        <LodgeDataContext.Provider value={[lodgeArr, setLodgeArr]}>
            { children }
        </LodgeDataContext.Provider>
    )
}
