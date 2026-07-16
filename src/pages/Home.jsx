import { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import Loader from "../components/Loader";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Sidebar from "../components/Sidebar";
import FeedbackModal from "../components/FeedbackModal";
import "./Home.css";

function Home() {

  const {
    posts,
    setPosts,
    loading,
    currentPage,
    cardsPerPage
  } = useContext(PostContext);

  const [showModal,setShowModal]=useState(false);

  if(loading){
    return <Loader/>
  }

  const indexOfLast=currentPage*cardsPerPage;
  const indexOfFirst=indexOfLast-cardsPerPage;
  const currentPosts=posts.slice(indexOfFirst,indexOfLast);

  const handleDelete=(id)=>{
      const updatedPosts=posts.filter((post)=>post.id!==id);
      setPosts(updatedPosts);
  }

  return(

    <div className="container">

        <Sidebar
        openFeedback={()=>setShowModal(true)}
        />

        <div className="content">

        {
          currentPosts.map((post)=>(
            <Card
            key={post.id}
            post={post}
            onDelete={handleDelete}
            />
          ))
        }

        <Pagination/>

        </div>

        <FeedbackModal
        show={showModal}
        close={()=>setShowModal(false)}
        />

    </div>

  )

}

export default Home;