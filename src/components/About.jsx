import Dashboard from './Dashboard';
import '../App.css'

export default function App() {
  return (
    <div>
      <Dashboard/>
      <div className="bg-[#63135ad0] fixed top-0 left-0 my-10 h-full w-full flex flex-row">
        <div className="bg-[#14152f] w-3/4 h-3/4  m-auto rounded-2xl flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-center text-white">
            Ini adalah website untuk TP SBD Modul 9
          </h1>
        </div>
      </div>
    </div>
  )
}
