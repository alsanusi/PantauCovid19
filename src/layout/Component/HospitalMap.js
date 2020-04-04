import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  mapDiv: {
    height: '87%',
    width: '100%',
    position: 'absolute',
    // top: '0',
    left: '0',
  },
})

const SimpleExample = () => {
  const classes = useStyles()
  const [zoom, setZoom] = useState(13)
  const [position, setPosition] = useState([51.505, -0.09])

  return (
    <Map center={position} zoom={zoom} className={classes.mapDiv}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  )
}

export default SimpleExample