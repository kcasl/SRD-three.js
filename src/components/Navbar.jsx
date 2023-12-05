import { NavLink } from "react-router-dom";
import mark from "../assets/images/Hana_mark.png"
import banner from "../assets/images/Hana_logo.png"

const Navbar = () => {
    return (
        <header className="header">
            <nav className="flex text-lg gap-10 font-medium">
                <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
                    <p className="text-emerald-400">SRD</p>
                </NavLink>
                <NavLink to="https://www.hana.hs.kr/main.do" className="w-20 h-10 rounded-lg bg-neutral-100 items-center justify-center flex font-bold shadow-md">
                    <img className='logo' src={banner} />
                </NavLink>
            </nav>
            <nav className="flex text-lg gap-10 font-medium">
                <NavLink to="/about" className={({isActive}) => isActive ? 'text-black-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to="/projects" className={({isActive}) => isActive ? 'text-black-500' : 'text-black'}>
                    Projects
                </NavLink>
                {/* <NavLink to="/contact" className={({isActive}) => isActive ? 'text-black-500' : 'text-black'}>
                    contact
                </NavLink> */}
            </nav>
        </header>
    )
}

export default Navbar;