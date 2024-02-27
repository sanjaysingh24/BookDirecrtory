import React from 'react'
import './Style.css'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Home = () => {
const[respons,setResponse]  = useState([]); 
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchdata = async()=>{
  try{
    const data = await axios.get('http://localhost:4000/books/getAllbook');
    const result= data.data;
 
    setResponse(result);
  }catch(e){
    setError(e.message);
  }
  finally{
    setLoading(false);
  }

  
   
}

useEffect(()=>{
 
fetchdata();

},[])

if(loading){
       return <div>Loading...</div> 
}
if (error) {
    return <div>Error: {error}</div>;
  }
  // let id = '65c3511a71429ad2afcc55d8';

  const handleclick = async (id) => {
    try {
        const dd = await axios.delete(`http://localhost:4000/books/deleteBook/${id}`);
        console.log(`Book with ID ${id} deleted successfully`);
        fetchdata();
      } catch (error) {
        console.error(`Error deleting book with ID ${id}:`, error.message);
      }
    }
  return (
    <div>
       <div className="container">
        <div className="row">
          
                    
                  {respons.map((books)=>{
                   return(
                    <div key ={books._id} className="col-lg-3 mt-4">
                   
                    <div className="book_card ">
                       <div className="book_img">
                       
                       </div>
                  
                       <div className="title ">
                          <b>Title: </b> {books.title}
                       </div>
                       <div className="subtitle">
                           <b>Subtitle:</b>  {books.subtitle}
                       </div>
                       <div className="author">
                           <b>Author:</b> {books.author}
                       </div>
                       <div className="publisher">
                           <b>Publisher:</b>{books.publisher}
                       </div>
                       <div className="pages">
                           <b>Pages:</b>{books.pages}
                       </div>
                        <button onClick={()=>handleclick(books._id)} type = "submit" className='btn btn-primary   mt-2'>delete</button>
                   </div>
   
               </div>
       
                   )
                  })}
         
        </div>
    </div>
</div>
  )
}

export default Home
