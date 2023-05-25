export const getPosts = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if(response.ok) {
            const data = await response.json();
            return data;
        }
    }
    catch {
        console.log('error')
    }
}