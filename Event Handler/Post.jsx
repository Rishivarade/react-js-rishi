import React, { useEffect, useState } from 'react'


function Post() {
    const [value, setvalue] = useState([])
    const [page, setpage] = useState(1)
    const fetchdata = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
            .then((res) => res.json())
            .then((data) => {
                setvalue(data)
                console.log(data)
            })
            .catch((err) => console.log(err))       
    }
    useEffect(()=>{
        fetchdata()
    },[page])
    return (
        <>
            {value.map((el) => (
                <div key={el.id} style={{border:"2px solid aqua",width:"80%",margin:"auto",marginTop:"5px",paddingBottom:"10px",boxShadow:" 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <h1>{el.title}</h1>
                    <h3>{el.body}</h3>
                    
                </div>
            ))}
            <button className='btn' onClick={() => setpage(page - 1)} disabled={page === 1}>PREV</button>
            <span> {page} </span>
            <button className='btn' onClick={() => setpage(page + 1)} disabled={page === 10}>NEXT</button>
        </>
    )
}
export default Post;
