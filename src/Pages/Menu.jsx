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
          gimbap (v+)
        </p>
        <p className='text-justify lg:text-lg sm:text-left'>
          toasted seaweed & sesame rice roll w/Korean BBQ Ota Tofu,
          braised burdock, seasonal namul, seasonal pickle, sautéed
          kimchi, ssamjang, perilla - served w/housemade dipping sauce
          <p className='mt-1'>
            <span className='font-semibold'>
              + side seasonal banchan (2 oz)
            </span>
          </p>
          <p className=''>
            <span className='font-semibold'>
              {' '}
              + extra dipping sauce
            </span>
          </p>
        </p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row mt-2'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0'>
          boricha
        </p>
        <p className='text-justify sm:text-left w-full lg:text-lg'>
          house-roasted barley tea made w/organic locally sourced
          grains (no caffeine, unsweetened)
          <p className='mt-1'>
            <span className='font-semibold'>
              + Cloudforest vanilla infused oat milk
            </span>
          </p>
        </p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row mt-2'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0'>
          seasonal banchan by the jar (v+)
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
    </div>
  </section>
)
export default Menu
