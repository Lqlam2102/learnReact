
import { useEffect, useState } from 'react';

const tabs = ['posts', 'comments', 'albums']
function Content(){
    const [value,setValue] = useState(document.title)
    const [posts,setPosts] = useState([])
    const [type,setType] = useState('post')
    console.log(type);
    useEffect(() => {
        document.title = value; 
        // fetch('https://jsonplaceholder.typicode.com/posts').then(res=> res.json())
        // .then(posts => {setPosts(posts)})
    },[value])
    
    return (
        <div>
            <h1>Hi anh em</h1>
            <input style = {{outline: 'none',
             border: 'none',
             boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',}} type="text" placeholder = "Hi anh em" onChange={(e) => setValue(e.target.value)}/>
             {tabs.map(tab => (
                <button key ={tab}
                onClick = {() => setType(tab)}
                >
                    {tab}
                </button>
             ))}
            <ul>
             {posts.map(post => (
                <li key = {post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </li>
             ))}
             </ul>
        </div>
    )
}
export default Content