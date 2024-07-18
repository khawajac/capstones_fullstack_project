import './App.css'
import { MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"

function App() {

  return (
    <>
   <MapContainer id='map' center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
</MapContainer>
    </>
  )
}
export default App