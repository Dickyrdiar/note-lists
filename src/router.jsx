import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import App from "./container/App"
import DetailNote from "./container/DetailNote"

const AppIndex = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/detail-note/:id" element={<DetailNote />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppIndex