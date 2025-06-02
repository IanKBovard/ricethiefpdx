import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <nav>
      <section className='MOBILE-MENU flex lg:hidden scrollbar-hide'>
        <div
          className='HAMBURGER-ICON space-y-2 cursor-pointer'
          onClick={() => setIsNavOpen((prev) => !prev)}>
          <span className='block h-0.5 w-8 bg-brand-red'></span>
          <span className='block h-0.5 w-8 bg-brand-red'></span>
          <span className='block h-0.5 w-8 bg-brand-red'></span>
        </div>
        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            className='CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer'
            onClick={() => setIsNavOpen(false)}>
            <svg
              className='h-8 w-8 text-brand-red'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <line x1='18' y1='6' x2='6' y2='18' />
              <line x1='6' y1='6' x2='18' y2='18' />
            </svg>
          </div>
          <ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-3xl'>
            <li className='my-8 uppercase text-brand-red'>
              <NavLink
                to='/'
                onClick={() => setIsNavOpen(!isNavOpen)}>
                Home
              </NavLink>
            </li>
            <li className='my-8 uppercase text-brand-red'>
              <NavLink
                to='/menu'
                onClick={() => setIsNavOpen(!isNavOpen)}>
                Menu
              </NavLink>
            </li>
            <li className='my-8 uppercase text-brand-red'>
              <NavLink
                to='/contact'
                onClick={() => setIsNavOpen(!isNavOpen)}>
                contact
              </NavLink>
            </li>
            <li className='my-8 uppercase text-brand-red'>
              <NavLink
                to='/proudlysourcedingredients'
                onClick={() => setIsNavOpen(!isNavOpen)}>
                Proudly Sourced
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
      <ul className='DESKTOP-MENU hidden space-x-8 lg:flex items-center font-semibold'>
        <li>
          <NavLink
            className={({ isActive }) => {
              return `hover:underline text-brand-red ${isActive ? 'underline' : null}`
            }}
            to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return `hover:underline text-brand-red ${isActive ? 'underline' : null}`
            }}
            to='/menu'>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return `hover:underline text-brand-red ${isActive ? 'underline' : null}`
            }}
            to='/contact'>
            Contact
          </NavLink>
        </li>
        <li>
          <a
            className='w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-brand-red text-brand-white hover:text-brand-red hover:bg-brand-pink disabled:opacity-50 disabled:pointer-events-none'
            href='/proudlysourcedingredients'>
            Proudly Sourced Ingredients
          </a>
        </li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <div className='flex items-center justify-between border-b border-brand-red py-4 mb-4'>
      <a
        href='/'
        className='text-brand-red font-agbalumo-regular uppercase p-1 border hover:border-brand-red border-brand-bg text-5xl'>
        <span>Rice Thief</span>
        <p className='text-lg text-brand-black font-serif lowercase'>
          korean deli serving seasonal banchan
        </p>
      </a>
      <Nav />
    </div>
  )
}

export default Header
