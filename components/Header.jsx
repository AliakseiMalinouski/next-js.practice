import Link from "next/link";
import { Navigation } from "./Navigation";

const navItems = [
    {label: 'Home', href: '/'},
    {label: 'Blog', href: '/blog'},
    {label: 'About', href: '/about'}
]

const Header = () => {
    return (
        <header>
            <div className="container">
                <Navigation navLinks={navItems}/>
            </div>
        </header>
    )
}

export {Header};