import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { LodgeDataContext } from './context/LodgeData'
// import mapStyles from './mapStyles'
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
} from 'react-google-maps'

function Map() {
    const [lodgeArr] = useContext(LodgeDataContext)
    const [selectedLodge, setSelectedLodge] = useState(null)

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 40.76184803898829, lng: -111.89785924085847 }}
        defaultOptions={{disableDefaultUI: true}}
        // defaultOptions={{styles: mapStyles}}
      > 
  
      {lodgeArr.map((lodge) => {
        const { name, lat, lng } = lodge

        return (
          <Marker
            key={name}
            position={{ lat: lat, lng: lng }}
            onClick={() => setSelectedLodge(lodge)}
            // icon={{
            //   url: designIcon,
            //   scaledSize: new window.google.maps.Size(18, 18)
            // }}
          />
        )
      })}
  
      {selectedLodge && (
        <InfoWindow position={{lat: selectedLodge.lat, lng: selectedLodge.lng}} onCloseClick={() => setSelectedLodge(null)}>
          <div>
            <h4>{`${selectedLodge.name} No.${selectedLodge.number}`}</h4>
          </div>
        </InfoWindow>
      )}
      </GoogleMap>
    )
  }

const Page = styled.main`
    position: relative;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
    // border: 4px solid lightcoral;
`

const Title = styled.h1`
    padding-left: 20px;
    position: absolute;
    top: 80px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 36px;
    color: #414141;
    z-index: 1;
    // border: 1px dashed green;
`

const Subtitle = styled.h1`
    padding-left: 20px;
    position: absolute;
    top: 120px;
    font-family: Open Sans Condensed;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 40px;
    color: rgba(65, 65, 65, 0.6);
    z-index: 1;
    // border: 1px dashed green;
`
  
const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function MapPage() {
  const history = useHistory()

  function handleClick() {
      history.push('/')
  }

  return (
      <Page>
          <Title>{'Salt Lake City'}</Title>
          <Subtitle onClick={() => handleClick()}>{'Utah'}</Subtitle>
          <WrappedMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapElement={<div style={{ height: '100%' }} />}
          />
      </Page>
  )
}