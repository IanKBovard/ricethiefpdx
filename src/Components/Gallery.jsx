const Gallery = () => (
  <div>
    <h2 className='mb-8 text-4xl tracking-tight font-extrabold text-center'>
      Follow me on Instagram
    </h2>
    <div className='grid grid-cols-3 md:grid-cols-3 gap-4'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/p/Cw8iiBFSACV/'>
        <img
          className='max-h-full max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer'
          src='/images/instaPost5.svg'
          alt=''
          target='_blank'
          rel='noopener noreferrer'
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/p/CuFqh4vSLEI/'>
        <img
          className='max-h-full max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer'
          src='/images/instaPost4.svg'
          alt=''
          target='_blank'
          rel='noopener noreferrer'
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/p/Cst2cFYv6BR/'>
        <img
          className='max-h-full max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer'
          src='/images/instaPost3.svg'
          alt=''
          target='_blank'
          rel='noopener noreferrer'
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://instagram.com/p/Cr4roIqL6fJ/'>
        <img
          className='max-h-full max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer'
          src='/images/instaPost2.svg'
          alt=''
          target='_blank'
          rel='noopener noreferrer'
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/p/CrhIMmNvf_Z'>
        <img
          className='max-w-full rounded-lg transition duration-300 ease-in-out hover:scale-105 cursor-pointer object-cover'
          src='/images/instaPost1.svg'
          alt=''
        />
      </a>
    </div>
  </div>
)

export default Gallery
