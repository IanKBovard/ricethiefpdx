import {
  Contact,
  ProudlySourcedIngredients,
  Home,
  Menu,
} from './Pages'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import { Header, Footer } from './Components'

const App = () => {
  return (
    <div className='mx-auto mb-8 px-8 font-lora-regular'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route
            path='/proudlysourcedingredients'
            element={<ProudlySourcedIngredients />}
          />
          <Route path='/menu' element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
