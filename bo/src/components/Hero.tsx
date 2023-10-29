
import heroImage from '../assets/Work_7.jpg'
export default function Hero() {
  
  return <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4 ">
    <div className=''>
      <h3 className='text-7xl mb-4'>WEBHOOK-LITE </h3>
      <h4 className='text-2xl'>Test your webhook integrations with ease.</h4>
      <p className='mb-4'>Effortlessly test, monitor, and manage webhook integrations with our user-friendly platform.</p>
      <div className='flex gap-2'>
        <button type='button' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none'>Sign Up for Free</button>
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Quick start</button>
      </div>
    </div>
    <figure className="max-w-lg">
      <img className="h-auto max-w-full" src={heroImage} alt="image description"/>
      <figcaption className="text-sm text-center text-gray-300">Image caption</figcaption>
    </figure>
  </div>
}