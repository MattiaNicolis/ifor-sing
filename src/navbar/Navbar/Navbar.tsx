import NavbarItem from '../NavbarItem/NvabarItem'
import './Navbar.css'

const navbarElements = [
        {label:'Home', href: '/'},
        {label:'Componenti', href: '/components'},
        {label:'Risorse', href: '/components'}
    ]

function Navbar() {
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                {navbarElements.map(e => {
                    return(
                        <NavbarItem key={e.href}
                                    href={e.href} 
                                    label={e.label} 
                            />
                    )
                })}
            </ul>
        </nav>
    )
}

export default Navbar