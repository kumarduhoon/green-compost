import Home from "./pages/Home"
import Layout from './Layout';
import About from "./pages/About"
import OurProduct from "./pages/OurProduct"
import SiteMap from "./pages/SiteMap"
import ContactUs from "./pages/ContactUs"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<OurProduct />} />
          <Route path="site-map" element={<SiteMap />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
