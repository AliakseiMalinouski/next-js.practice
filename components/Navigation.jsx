'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';


const Navigation = ({navLinks}) => {

    const pathname = usePathname();

    return (
        <>
            {
                navLinks.map(({label, href}) => <Link key={label}
                href={href}
                style={{color: href === pathname ? 'red' : 'white'}}
                >
                {label}
                </Link>)
            }
        </>
    )
}

export {Navigation};