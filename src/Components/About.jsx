const About = () => (
  <section className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-8'>
    <h2 className='font-bold text-2xl sm:text-3xl lg:text-4xl text-center text-nowrap'>
      Ingredients you can feel good about
    </h2>
    <div className='gap-16 items-center mx-auto xl:grid xl:grid-cols-5'>
      <div className='grid grid-cols-2 gap-4 mt-8 lg:col-span-3'>
        <img
          className='xl:mt-4 w-full rounded-lg'
          src='images/jjang-jars.jpg'
          alt='office content 1'
        />
        <img
          className='mt-0 w-full xl:mt-14 rounded-lg'
          src='images/chef-csa.jpg'
          alt='office content 2'
        />
      </div>
      <div className='text-brand-black lg:col-span-2 mt-4'>
        <p className='text-justify md:text-2xl'>
          Rice Thief celebrates the deep yet sometimes unspoken love
          behind the food we cook for others. Inspired by the Korean
          food of her childhood, Chef Anna Lee lovingly prepares all
          food from scratch in service of a simple mission: to share
          delicious, heart-warming Korean food using quality local,
          non-GMO ingredients that you can feel good about.
        </p>
        <br />
        <p className='text-justify md:text-2xl italic'>
          Rice Thief, or bap do duk (밥도둑), refers to food so
          delicious that it steals the rice you must eat with it.
        </p>
      </div>
    </div>
  </section>
)

export default About
