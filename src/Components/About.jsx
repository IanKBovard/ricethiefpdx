const About = () => (
  <section className='bg-white'>
    <div className='gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
      <div className='grid grid-cols-2 gap-4 mt-8'>
        <img
          className='w-full rounded-lg'
          src='images/gimbap.jpg'
          alt='office content 1'
        />
        <img
          className='mt-4 w-full lg:mt-10 rounded-lg'
          src='images/chef.jpg'
          alt='office content 2'
        />
      </div>
      <div className='font-light text-gray-800 sm:text-lg'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold'>
          Non-GMO + local ingredients
        </h2>
        <p className='mb-4 text-2xl'>
          Rice Thief is a celebration of the deep yet sometimes
          unspoken love behind the food we cook for others. Inspired
          by the Korean food of her childhood, Chef Anna Lee lovingly
          prepares all food from scratch in service of a singular
          mission: to share her inspired take on delicious,
          heart-warming Korean food using quality, local, non-GMO
          ingredients you can feel good about.
        </p>
        <p className='text-2xl'>
          Rice Thief, or bap do duk (밥도둑), refers to food so
          delicious that it “steals” the rice you must eat with it.
        </p>
      </div>
    </div>
  </section>
)

export default About
