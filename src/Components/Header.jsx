import { useState } from 'react'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <nav>
      <section className='MOBILE-MENU flex lg:hidden'>
        <div
          className='HAMBURGER-ICON space-y-2 cursor-pointer'
          onClick={() => setIsNavOpen((prev) => !prev)}>
          <span className='block h-0.5 w-8 bg-gray-800'></span>
          <span className='block h-0.5 w-8 bg-gray-800'></span>
          <span className='block h-0.5 w-8 bg-gray-800'></span>
        </div>
        <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
          <div
            className='CROSS-ICON absolute top-0 right-0 px-8 py-8 cursor-pointer'
            onClick={() => setIsNavOpen(false)}>
            <svg
              className='h-8 w-8'
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
            <li className='border-gray-800 my-8 uppercase '>
              <a href='/'>Home</a>
            </li>
            <li className='border-gray-800 my-8 uppercase'>
              <a href='/events'>Events</a>
            </li>
            <li className='border-gray-800 my-8 uppercase'>
              <a href='/contact'>Contact</a>
            </li>
            <li className=' border-gray-800 my-8 uppercase'>
              <a href='/menu'>Menu</a>
            </li>
          </ul>
        </div>
      </section>
      <ul className='DESKTOP-MENU hidden space-x-8 lg:flex items-center'>
        <li>
          <a className='hover:underline' href='/'>
            Home
          </a>
        </li>
        <li>
          <a className='hover:underline' href='/events'>
            Events
          </a>
        </li>
        <li>
          <a className='hover:underline' href='/contact'>
            Contact
          </a>
        </li>
        <li>
          <a
            className='w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
            href='/menu'>
            Menu
          </a>
        </li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <div className='flex items-center justify-between border-b border-gray-800 py-4  text-gray-800'>
      <a href='/'>
        <span>Rice Thief</span>
      </a>
      <Nav />
    </div>
  )
}

export default Header
