import Dashboard from './Dashboard';
import Card from './Card';
import Counter from './Counter'
import { useNavigate } from "react-router-dom";
import '../App.css'

export default function App() {
  const navigate = useNavigate();
    return (
      <div className='bg-[#092038] fixed top-0 left-0 h-full w-full'>
        <Dashboard/>
        <div className="relative top-0 left-0 h-full w-full flex flex-col items-center justify-center text-center overflow-y-auto">
          <Card/>
        </div>
      </div>
      
    )
}
