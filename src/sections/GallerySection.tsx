const GalleryImagePlaceholder = () => (
  <div className='flex h-64 w-full items-center justify-center rounded-lg bg-gray-300'>
    <span className='text-gray-500'>Result Image</span>
  </div>
);

export default function GallerySection() {
  return (
    <section id='gallery' className='bg-gray-50 py-20'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-gray-900'>
          Gallery
        </h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3'>
          <GalleryImagePlaceholder />
          <GalleryImagePlaceholder />
          <GalleryImagePlaceholder />
          <GalleryImagePlaceholder />
          <GalleryImagePlaceholder />
          <GalleryImagePlaceholder />
        </div>
      </div>
    </section>
  );
}
