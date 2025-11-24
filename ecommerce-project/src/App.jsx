import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage.jsx"
import './App.css'

function App() {
  // We use the route to have multiple pages on the webste, to mark the empty generic home page, we use '/'
  // This is an SPA (Single Page Application): uses 1 HTML file using react to create multiple pages
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>Test Checkout Page</div>} /> 
    </Routes>
  )
  // For the homepage, instead of "/", we can use the prop index to do the same thing
}

export default App
