const Menu = () => (
  <section className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
    <div className='max-w-3xl mx-auto text-center'>
      <h2 className='text-2xl font-semibold text-brand-black'>
        Menu For Hillsdale Farmers' Market
      </h2>
    </div>
    <div className='max-w-3xl mx-auto mt-2'>
      <div className='flex flex-col  pt-4 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[150px] text-lg font-semibold sm:text-right shrink-0'>
          mayak egg & <br />
          bacon sandwich
        </p>
        <p className='text-justify sm:text-left'>
          Jammy soy-marinated local organic egg (v), bacon, market
          salad (v), & pickled onion on a multigrain English muffin
          <p className='font-semibold'>sub vegan (v+) bacon 2</p>
        </p>
        <p className='font-semibold'>11</p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[150px] text-lg font-semibold sm:text-right shrink-0 text-nowrap'>
          vegetarian gimbap
        </p>
        <p className='text-justify sm:text-left'>
          Seaweed & sesame rice roll w/braised Ota tofu, assorted
          organic seasonal veg, sweet egg, braised burdock root,
          danmuji, & perilla. Served w/homemade banchan (v+)
        </p>
        <p className='font-semibold'>10</p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[150px] text-lg font-semibold sm:text-right shrink-0'>
          bulgogi gimbap
        </p>
        <p className='text-justify sm:text-left'>
          Seaweed & sesame rice roll w/Korean BBQ marinated rib eye,
          assorted organic seasonal veg, sweet egg, braised burdock
          root, danmuji, & perilla. Served w/homemade banchan (v+)
        </p>
        <p className='font-semibold'>12</p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[150px] text-lg font-semibold sm:text-right shrink-0'>
          kkoma bowl
          <br />
          (for kids)
        </p>
        <p className='text-justify sm:text-left'>
          Choice of soy-marinated rib eye* or braised tofu (v+), rice,
          & homemade sweet pickle. Served w/Korean yogurt beverage
        </p>
        <p className='font-semibold'>8</p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[150px] text-lg font-semibold sm:text-right shrink-0'>
          banchan (v+)
        </p>
        <p className='text-justify sm:text-left'>
          Korean side dishes made lovingly from scratch - rotated
          weekly and/or seasonally using locally sourced produce
        </p>
        <p className='font-semibold'>9</p>
      </div>

      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row'>
        <p className='sm:w-[150px] text-lg font-semibold sm:text-right shrink-0'>
          boricha
        </p>
        <p className='text-justify sm:text-left w-full'>
          Roasted barley tea - served hot or cold
        </p>
        <p className='font-semibold'>2</p>
      </div>
    </div>
  </section>
)
export default Menu
