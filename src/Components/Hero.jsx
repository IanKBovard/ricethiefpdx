const Hero = () => (
  <div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
    <div className='grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center'>
      <div className='lg:col-span-3'>
        <h1 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl'>
          Korean comfort food made from scratch
        </h1>
        <p className='mt-3 text-2xl text-gray-800'>
          Visit us at Hillsdale Farmers Market
        </p>
        <p className='text-2xl text-gray-800'>Sundays 9am -1pm</p>
        <div className='mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3'>
          <a
            className='w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'
            href='/menu'>
            View menu
          </a>
        </div>
      </div>
      <div className='lg:col-span-4 mt-10 lg:mt-0'>
        <img
          className='w-full rounded-xl'
          src='/images/mayak.svg'
          alt='Hero Image'
        />
      </div>
    </div>
  </div>
)

export default Hero
