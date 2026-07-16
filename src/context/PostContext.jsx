import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(true);

  const [currentPage,setCurrentPage]=useState(1);

  const cardsPerPage=6;

  const [view,setView]=useState("list");

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{

      setTimeout(()=>{
        setPosts(data);
        setLoading(false);
      },5000);

    });

  },[]);

  return(

    <PostContext.Provider

      value={{

        posts,
        setPosts,

        loading,

        currentPage,
        setCurrentPage,

        cardsPerPage,

        view,
        setView

      }}

    >

      {children}

    </PostContext.Provider>

  );

};
