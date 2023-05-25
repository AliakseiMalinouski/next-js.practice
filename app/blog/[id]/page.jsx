async function getPost (id) {
    const response = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    const data = (await response).json();
    return data;
}

export async function generateMetadata ({params}) {

    const data = await getPost(params.id);

    return {
        title: data.title
    }
}


export default async function Post ({params}) {

    const post = await getPost(params.id);

    return (
        <>{post.title}</>
    )
}