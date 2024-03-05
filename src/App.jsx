import { Contact, Events, ErrorPage, Home, Menu } from './Pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Header, Footer } from './Components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/events',
    element: <Events />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
])

const App = () => {
  return (
    <div className='container mx-auto mb-8 px-8'>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
