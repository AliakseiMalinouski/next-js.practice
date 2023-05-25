'use client';

import { getPosts } from "@/services/getPosts";
import Link from "next/link";
import { useEffect, useState } from "react";


export const metadata = {
    title: "Blog"
}


export default function Blog () {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getPosts().then(d => setPosts(d)).finally(() => setLoading(false))

    }, []);

    const searchPost = async() => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
        const data = await response.json();
        setPosts(data);
    }

    return (
        <>
            <h1>Blog</h1>
            <input type="text" value={search} onChange={(eo) => setSearch(eo.target.value)}/>
            <button onClick={searchPost}>Start</button>
            <ul>
                {
                    !loading ? posts.map(elem => (
                        <li key={elem.id}>
                            <Link href={`/blog/${elem.id}`}>{elem.title}</Link>
                        </li>
                    )) : <div>
                        ...loading
                    </div>
                }
            </ul>
        </>
    )
}