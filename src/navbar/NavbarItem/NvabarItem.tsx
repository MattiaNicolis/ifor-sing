import { NavLink } from "react-router"

type NavbarItemProps = {
    href: string,
    label: string
}

function NavbarItem(props: NavbarItemProps) {
    return(
        <NavLink to={props.href}>
            <li>
                <a>{props.label}</a>
            </li>
        </NavLink>
    )
}

export default NavbarItem