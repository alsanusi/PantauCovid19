import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'
import HospitalList from '../../api/HospitalList.json'

const useStyles = makeStyles({
  mapDiv: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
})

const SimpleExample = () => {
  const classes = useStyles()

  return (
    <Map center={[-0.8917, 119.8707]} zoom={6} className={classes.mapDiv}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        HospitalList.map((position, idx) =>
          <Marker key={`marker-${idx}`} position={position.loc}>
            <Popup>
              {position.name}
              <br />
              {position.phoneNumber}
              <br />
              {position.address} 
            </Popup>
          </Marker>
        )}
    </Map>
  )
}

export default SimpleExample