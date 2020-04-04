import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  mapDiv: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
})

const position = [
  // Sulawesi Selatan
  {
    name: "RS Islam Faisal",
    phoneNumber: "(0411) 871942",
    address: "Jl. A. P. Pettarani, Banta-Bantaeng, Kec. Rappocini, Kota Makassar, Sulawesi Selatan 90222",
    loc: [-5.162666, 119.432329]
  },
  {
    name: "RSUD Andi Makkasau",
    phoneNumber: "(0401) 27643",
    address: "Jl. Nurussamawati No.9, Bumi Harapan, Kec. Bacukiki Bar., Kota Pare-Pare, Sulawesi Selatan 91122",
    loc: [-4.034919, 119.633957]
  },
  {
    name: "RSU Dr. Wahidin Sudirohusodo",
    phoneNumber: "(0401) 584677",
    address: "Jl. Perintis Kemerdekaan No.11, Tamalanrea Jaya, Kec. Tamalanrea, Kota Makassar, Sulawesi Selatan 90245",
    loc: [-5.134492, 119.493222]
  }
]

const SimpleExample = () => {
  const classes = useStyles()

  return (
    <Map center={[-0.8917, 119.8707]} zoom={6} className={classes.mapDiv}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        position.map((position, idx) =>
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