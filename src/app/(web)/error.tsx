'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className='container mx-auto'>
      <h2 className='font-heading text-red-800 mb-10'>Something went wrong!</h2>

      <button onClick={() => reset()} className=' px-6 md:px-[50px] lg:px-[72px] py-2 md:py-5 bg-[#038C7F] rounded-lg md:rounded-2xl shadow-sm shadow-[#038C7F] text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all;'>
        Try Again
      </button>
    </div>
  );
}
