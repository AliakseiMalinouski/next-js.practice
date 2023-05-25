

import Link from "next/link";

async function getData() {
    const response = fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60,
        }
    });

    const data = (await response).json();
    return data;
}

export const metadata = {
    title: "Blog"
}


export default async function Blog () {

    const posts = await getData();

    return (
        <>
            <h1>Blog</h1>
            <ul>
                {
                    posts && posts.map(elem => (
                        <li key={elem.id}>
                            <Link href={`/blog/${elem.id}`}>{elem.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}