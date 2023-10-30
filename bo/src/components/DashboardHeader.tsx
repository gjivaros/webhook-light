export default function DashboardHeader() {
  return <div className="bg-white p-4 h-[80px] max-w-screen-2xl mx-auto rounded-md flex justify-between">
    <form action="" className="bg-slate-100 w-[500px] p-2 flex gap-2 items-center">
      <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>

      <input type="text" placeholder="Enter wehbook id here ..." className="p-2 bg-slate-100 outline-none w-[400px]" />
    </form>
    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    <svg className="w-3.5 h-3.5 mr-2  text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg>
  Generate id
</button>  </div>
}