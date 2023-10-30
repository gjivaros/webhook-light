import DashboardHeader from '../components/DashboardHeader'
import '../theme/dashboard.scss'
export default function Dashboard() {
  return <div className="Dashboard h-full w-full pt-2">
    <DashboardHeader />
    
    <section className='max-w-screen-2xl mx-auto mt-4'>
    <div className='flex justify-between'>
      <div className='bg-white h-screen w-1/4'></div>
      <div className='bg-white h-screen w-3/5'></div>
    </div>
    </section>
  </div>
}