export default function Navbar() {
    return (
        <nav className="bg-[#14152f] text-white p-4 outline-none outline-4 outline-black outline-offset-0 flex flex-1 items-center justify-between fixed top-0 left-0 w-full z-10 sm:max-h-5 md:max-h-10">
            <ul className="flex space-x-4 text-white text-xl flex-1">
                <a href="/home" className="text-white hover:text-[#525869] hover:scale-105 flex-1">Home</a>
                <a href="/contact" className="text-white hover:text-[#525869] hover:scale-105 flex-1">Contact</a>
                <a href="/profile" className="text-white hover:text-[#525869] hover:scale-105 flex-1">Profile</a>
                <a href="/about" className="text-white hover:text-[#525869] hover:scale-105 flex-1">About</a>
                <a href="/counter" className="text-white hover:text-[#525869] hover:scale-105 flex-1">Counter</a>
            </ul>
        </nav>
    );
}