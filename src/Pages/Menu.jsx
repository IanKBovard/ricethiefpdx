const Menu = () => (
  <section className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
    <div className='max-w-3xl mx-auto text-center mb-4'>
      <h2 className='font-bold text-3xl lg:text-5xl text-center'>
        farmers market menu
      </h2>
    </div>
    <div className='max-w-5xl mx-auto mt-2'>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row mt-2'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0'>
          seasonal banchan by the jar
        </p>
        <p className=' sm:text-left lg:text-2xl'>
          <span className='italic'>
            small-batch preserved & pickled dishes made lovingly from
            scratch with local market veggies
          </span>

          <p>
            <span className='font-semibold'>kimchi (v+, gf)</span> -
            spicy fermented vegetables
          </p>
          <p>
            <span className='font-semibold'>jangajji (v+)</span> -
            Korean sweet soy pickle
          </p>
        </p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row mt-2'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0 text-nowrap'>
          deli counter
        </p>
        <p className='lg:text-2xl sm:text-left'>
          <span className='italic'>
            rotating selection of salads, noodle dishes, and delicate
            hyperseasonal preparations of banchan meant to be enjoyed
            within the week
          </span>

          <p>
            <span className='font-semibold'>geotjeori (v+, gf)</span>{' '}
            - fresh kimchi salad
          </p>
          <p>
            <span className='font-semibold'>muchim (v+, gf)</span> -
            toasted sesame salad
          </p>
          <p>
            <span className='font-semibold'>dubu jorim (v+)</span> -
            sweet soy braised tofu
          </p>
          <p>
            <span className='font-semibold'>“mayak” egg (v)</span> -
            36-hr jammy, sweet soy marinated egg
          </p>
          <p>
            <span className='font-semibold'>bibimguksu (v)</span> -
            spicy kimchi noodle salad
          </p>
        </p>
      </div>
      <div className='flex flex-col pt-2 sm:gap-10 sm:flex-row mt-2'>
        <p className='sm:w-[200px] text-lg lg:text-2xl font-semibold sm:text-right shrink-0 tex'>
          scratch-made sauces
        </p>
        <p className='sm:text-left w-full lg:text-2xl'>
          <span className='italic'>
            {' '}
            no fillers or preservatives - just antioxidant-rich
            cold-pressed oils and quality non-GMO ingredients
          </span>

          <p>
            <span className='font-semibold'>gg sauce (v+, gf)</span> -
            short for gochu ganjang - bright, savory, spicy
          </p>
          <p className='mt-8 text-sm lg:text-xl'>
            v = vegetarian / v+ = vegan / gf = gluten-free
          </p>
        </p>
      </div>
    </div>
  </section>
)
export default Menu
