import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
// import mapStyles from './mapStyles'
import { 
    GoogleMap, 
    withScriptjs, 
    withGoogleMap, 
    Marker,
    InfoWindow
} from 'react-google-maps'

const lodgeData = [
    {
      name: 'burnet',
      title: 'Burnet, TX',
      paragraph: 'Not really liking it here anymore.',
      coordinates: {
        lat: 30.7582,
        lng: -98.2284
      }
    },
    {
      name: 'austin',
      title: 'Austin, TX',
      paragraph: 'Would be coold to do the downtown thing here in the winter.',
      coordinates: {
        lat: 30.2672,
        lng: -97.7431
      }
    }
  ]

function Map() {
    const [selectedLodge, setSelectedLodge] = useState(null)

    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 30.7582, lng: -98.2284 }}
        defaultOptions={{disableDefaultUI: true}}
        // defaultOptions={{styles: mapStyles}}
      > 
  
      {lodgeData.map((lodge) => {
        return (
          <Marker
            key={lodge.name}
            position={lodge.coordinates}
            onClick={() => setSelectedLodge(lodge)}
            // icon={{
            //   url: designIcon,
            //   scaledSize: new window.google.maps.Size(18, 18)
            // }}
          />
        )
      })}
  
      {selectedLodge && (
        <InfoWindow position={selectedLodge.coordinates} onCloseClick={() => setSelectedLodge(null)}>
          <div>
            <h4>{selectedLodge.title}</h4>
            <p>{selectedLodge.paragraph}</p>
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
            <Title>{'Choose a lodge'}</Title>
            <Subtitle onClick={() => handleClick()}>{'for more details'}</Subtitle>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '100%' }} />}
                mapElement={<div style={{ height: '100%' }} />}
            />
        </Page>
    )
}