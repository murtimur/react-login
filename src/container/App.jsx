import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
