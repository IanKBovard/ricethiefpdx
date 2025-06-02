const Menu = () => (
  <section className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
    <div className='max-w-3xl mx-auto text-center mb-4'>
      <h2 className='font-bold text-2xl lg:text-4xl text-center text-nowrap'>
        PSU Portland Farmers Market Menu
      </h2>
    </div>
    <div className='max-w-3xl mx-auto mt-2'>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0 text-nowrap'>
          bokkeum bap bowl
        </p>
        <p className='text-justify lg:text-lg sm:text-left'>
          toasted sesame rice, spicy soy dressed market greens,
          seasonal banchan, roasted seaweed, & choice of:
          <p className='mt-1'>
            <span className='font-semibold'>
              36-hr marinated local mayak egg
            </span>
          </p>
          <p className=''>
            <span className='font-semibold'>
              {' '}
              korean bbq ota tofu (v+)
            </span>
          </p>
        </p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0'>
          banchan (v+)
        </p>
        <p className='text-justify sm:text-left lg:text-lg'>
          korean side dishes lovingly made from scratch - rotated
          weekly/seasonally using locally sourced ingredients
          <p className='mt-1'>
            <span className='font-semibold'>kimchi</span> - fermented
            & probiotic-rich
          </p>
          <p className=''>
            <span className='font-semibold'>jangajji</span> - sweet
            soy pickle
          </p>
          <p className=''>
            <span className='font-semibold'>muchim</span> - seasoned
            sesame salad
          </p>
          <p className=''>
            <span className='font-semibold'>jorim</span> - sweet soy
            braise
          </p>
        </p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0'>
          boricha
        </p>
        <p className='text-justify sm:text-left w-full lg:text-lg'>
          roasted barley tea - served hot or cold
        </p>
      </div>
    </div>
  </section>
)
export default Menu
