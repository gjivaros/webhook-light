import Menu from "./Menu";

export default function Header() {
  return <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
          <a href="#" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap">WEBHOOK<svg className="h-20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"/>
      </svg>LITE</span>
          </a>
          <div className="flex items-center md:order-2">
              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 focus:outline-none">Sign Up for Free</a>
          </div>
          <Menu/>
      </div>
  </nav>
  
}