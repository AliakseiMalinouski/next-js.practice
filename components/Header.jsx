import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="container">
                <Link href="/">Home</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/about">About</Link>
            </div>
        </header>
    )
}

export {Header};