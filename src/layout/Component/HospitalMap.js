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
  // Sulawesi Utara
  {
    name: "RSU Porf.Dr.RD Kandou",
    phoneNumber: "(0431) 8383058",
    address: "Jl. Raya Tanawangko No.56, Malalayang Satu Barat, Kec. Malalayang, Kota Manado, Sulawesi Utara",
    loc: [1.453692, 124.808145]
  },
  {
    name: "RSU Dr.Sam Ratulangi",
    phoneNumber: "(0431) 321171",
    address: "Jl. Suprapto No.123, Luaan, Tondano Tim., Kabupaten Minahasa, Sulawesi Utara",
    loc: [1.309694, 124.916583]
  },
  // Gorontalo
  {
    name: "RSU Porf.Dr.H.Aloei Saboe",
    phoneNumber: "(0435) 821218",
    address: "Jl. Profesor DR. H. Aloei Saboe, Wongkaditi, Kota Utara, Kota Gorontalo, Gorontalo 96115",
    loc: [-0.857597, 119.884025]
  },
  // Sulawesi Tengah
  {
    name: "RSUD Undata Palu",
    phoneNumber: "(0451) 4908020",
    address: "Jalan Trans Sulawesi Tondo, Talise, Mantikulore, Kota Palu, Sulawesi Tengah 94119",
    loc: [-0.857597, 119.884025]
  },
  {
    name: "RSUD Kab. Banggai Luwuk",
    phoneNumber: "(0461) 21820",
    address: "Jl. Imam Bonjol No.14, Bungin Tim., Luwuk, Kabupaten Banggai, Sulawesi Tengah 94711",
    loc: [-0.933825, 122.822164]
  },
  {
    name: "RSU Mokopido Toli-Toli",
    phoneNumber: "(0453) 21301",
    address: "Jl. Lanoni No.37, Baru, Baolan, Kabupaten Toli-Toli, Sulawesi Tengah 94514",
    loc: [1.035896, 120.822748]
  },
  {
    name: "RSUD Kolonodale",
    phoneNumber: "(0465) 21010",
    address: "Jalan W Monginsidi No.2, Kolonodale, Petasia, Kabupaten Morowali, Sulawesi Tengah 94971",
    loc: [-1.972287, 121.336927]
  },
  // Sulawesi Tenggara
  {
    name: "RSUD Kendari",
    phoneNumber: "-",
    address: "Jl. Z.A. Sugianto No. 39., Kambu, Kendari, Kota Kendari, Sulawesi Tenggara 93111",
    loc: [-3.990029, 122.533465]
  },
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
  },
  {
    name: "RSUD Lakipadada Toraja",
    phoneNumber: "(0423) 22264",
    address: "Jl. Pongtiku, Tambunan, Makale Utara, Kabupaten Tana Toraja, Sulawesi Selatan 91812",
    loc: [-3.073174, 119.867779]
  },
  {
    name: "RS Akademis Jaury Jusuf Putra",
    phoneNumber: "(0411) 3617344",
    address: "Jl. Jend. M. Jusuf No.57A, Pattunuang, Kec. Wajo, Kota Makassar, Sulawesi Selatan 90156",
    loc: [-5.131051, 119.414883]
  },
  {
    name: "RSUD Kab. Sinjai",
    phoneNumber: "(0482) 21132",
    address: "Jl. Jenderal Sudirman No.47, Biringere, Sinjai Utara, Kabupaten Sinjai, Sulawesi Selatan 92615",
    loc: [-5.128458, 120.249170]
  },
  // Maluku
  {
    name: "RSUD Dr.M.Haulussy",
    phoneNumber: "(0911) 344871",
    address: "Jl. Dr. Kayadoe, Benteng, Nusaniwe, Kel Benteng, Nusaniwe, Kota Ambon, Maluku",
    loc: [-3.708363, 128.165537]
  },
  // Maluku Utara
  {
    name: "RSUD Dr.Chasan Basoeri Ternate",
    phoneNumber: "(0921) 3121281",
    address: "Jl. Cempaka, Tanah Tinggi Bar., Ternate Sel., Kota Ternate, Maluku Utara",
    loc: [0.782180, 127.375722]
  },
  // Papua
  {
    name: "RSUD Dok II Jayapura",
    phoneNumber: "(0967) 533616 ext. 533781",
    address: "Jl. Kesehatan No.1, Dok II, Bayangkara, Jayapura Utara, Kota Jayapura, Papua",
    loc: [-2.534682, 140.710415]
  },
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