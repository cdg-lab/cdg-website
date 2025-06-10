export default function NewsSection() {
  return (
    <section id='news' className='py-20'>
      <div className='layout'>
        <h2 className='mb-12 text-center text-3xl font-bold text-gray-900'>
          News
        </h2>
        <div className='mx-auto max-w-4xl space-y-8'>
          <div className='border-b pb-4'>
            <p className='text-sm text-gray-500'>October 26, 2023</p>
            <h3 className='mt-1 text-xl font-semibold'>
              Group receives best paper award at conference!
            </h3>
            <p className='mt-2 text-gray-600'>
              More details about the news item can go here. It can be a brief
              summary of the achievement or event.
            </p>
          </div>
          <div className='border-b pb-4'>
            <p className='text-sm text-gray-500'>September 15, 2023</p>
            <h3 className='mt-1 text-xl font-semibold'>
              New research on [topic] accepted to [journal/conference]
            </h3>
            <p className='mt-2 text-gray-600'>
              Brief description of the paper and its contributions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
