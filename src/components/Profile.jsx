import Dashboard from './Dashboard';
import '../App.css'

export default function App() {
  return (
    <div className='relative'>
      <Dashboard/>
      <div className="bg-[#dc9729cc] fixed top-0 left-0 my-10 h-full w-full flex flex-row">
        <div className="bg-[#14152f] w-3/4 h-3/4  m-auto rounded-2xl flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center text-white">
            Maxwell Zefanya Ginting / 2306221200
          </h1>
        </div>
      </div>
    </div>
  )
}
