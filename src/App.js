import React, { useState } from 'react'
import LandingPage from './LandingPage'
// import designIcon from './assets/icons/design-icon.svg'
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
  console.log(555, selectedLodge)
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 30.7582, lng: -98.2284 }}
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

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default function App() {

  return (
    <LandingPage />
    // <div style={{ width: '100vw', height: '100vh' }}>
    //   <h1>{'Lodge Traveler - UT'}</h1>
    //   <WrappedMap
    //     googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    //     loadingElement={<div style={{ height: '100%' }} />}
    //     containerElement={<div style={{ height: '100%' }} />}
    //     mapElement={<div style={{ height: '100%' }} />}
    //   />
    // </div>
  )
}
