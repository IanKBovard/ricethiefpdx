const Hero = () => (
  <section className='max-w-[85rem] mx-auto px-4 lg:px-8 py-8'>
    <div className='grid lg:grid-cols-8 lg:gap-x-16 lg:items-center'>
      <div className='lg:col-span-5'>
        <h1 className='text-3xl font-bold text-brand-black sm:text-5xl md:text-5xl text-wrap'>
          Seasonally inspired banchan made from scratch
        </h1>
        <p className='mt-2 text-brand-black md:text-3xl text-wrap'>
          Farmers market and kitchen pickup now available
        </p>
        <div className='mt-4'>
          <a
            target='blank'
            rel='noopener noreferrer'
            className='w-autoc py-3 px-4 inline-flex justify-center items-center gap-x-2 text-xl font-semibold rounded-lg border border-transparent bg-brand-red text-brand-white hover:text-brand-red hover:bg-brand-pink disabled:opacity-50 disabled:pointer-events-none'
            href='https://ricethiefpdx.square.site/'>
            ORDER NOW
          </a>
        </div>
      </div>
      <div className='lg:col-span-3 mt-10 lg:mt-0'>
        <img
          className='w-full rounded-xl'
          src='/images/kimchi-hero.svg'
          alt='Hero Image'
        />
      </div>
    </div>
  </section>
)

export default Hero
