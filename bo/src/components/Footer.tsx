export default function Footer() {
  return <footer className="h-[300px] bg-blue-900 text-white">
    <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto p-4 mb-4">
      <div>
        <h2 className="text-3xl">Join our newsletter</h2>
        <p>We'll send you a nice letter once per week, No spam.</p>
      </div>
      <form className="bg-gray-300 flex justify-between">
        <input type="email" required className="bg-gray-300 h-[40px] border-none" placeholder="Enter your email ..." />
        <button type="submit" className="text-sm px-4 py-2 md:px-5 md:py-2.5 bg-blue-700">Suscribe</button>
      </form>
    </div>
    <div className="flex flex-wrap justify-between items-center max-w-screen-xl mx-auto p-4">
      <div>
        <h3 className="mb-2">HELP & SUPPORT</h3>
        <ul>
          <li>Contact us</li>
          <li>Work with us</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-2">FOLLOW US</h3>
        <ul>
          <li>Github</li>
          <li>Twitter</li>
        </ul>
      </div>

      <div>
        <h3 className="mb-2">LEGAL</h3>
        <ul>
          <li>License</li>
          <li>Pivacy policy</li>
        </ul>
      </div>
    </div>
  </footer>
}