import { About, Hero, Gallery } from '../Components'

const Home = () => (
  <>
    <Hero />
    <div className='inline-flex items-center justify-center w-full'>
      <hr className='w-4/12 h-px my-2 bg-brand-red border-0' />
    </div>
    <About />
    <div className='inline-flex items-center justify-center w-full'>
      <hr className='w-4/12 h-px my-2 bg-brand-red border-0' />
    </div>
    <Gallery />
  </>
)

export default Home
