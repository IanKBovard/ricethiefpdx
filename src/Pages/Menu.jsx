const Menu = () => (
  <section className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
    <div className='max-w-3xl mx-auto text-center mb-4'>
      <h2 className='font-bold text-2xl lg:text-4xl text-center'>
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
              36-hr marinated local mayak egg (v)
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
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row mt-2'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0'>
          seasonal banchan by the jar
        </p>
        <p className='text-justify sm:text-left lg:text-lg'>
          small-batch preserved & pickled dishes made lovingly from
          scratch with local market veggies
          <p className='mt-1'>
            <span className='font-semibold'>kimchi</span> - fermented
            & probiotic-rich (v+ gf)
          </p>
          <p className=''>
            <span className='font-semibold'>jangajji</span> - sweet
            soy pickle (v+)
          </p>
          <p className=''>
            <span className='font-semibold'>muchim</span> - seasoned
            sesame salad (v+ gf)
          </p>
          <p className=''>
            <span className='font-semibold'>jorim</span> - sweet soy
            braise (v+)
          </p>
        </p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row mt-2'>
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
