export default function Menu() {
  return <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
  <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
      <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">Home</a>
      </li>
      <li>
          <a href="#features" className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">Feature</a>
      </li>
      <li>
          <a href="#how-it-work" className="block py-2 pl-3 pr-4 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0" aria-current="page">How it work</a>
      </li>
  </ul>
</div>
}