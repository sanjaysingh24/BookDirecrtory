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


  return (
    <div>
       <div class="container">
        <div class="row">
          
                    
                  {respons.map((books)=>{
                   return(
                    <div key ={books._id} class="col-lg-3 mt-4">
                   
                    <div class="book_card ">
                       <div class="book_img">
                       
                       </div>
                  
                       <div class="title ">
                          <b>Title: </b> {books.title}
                       </div>
                       <div class="subtitle">
                           <b>Subtitle:</b>  {books.subtitle}
                       </div>
                       <div class="author">
                           <b>Author:</b> {books.author}
                       </div>
                       <div class="publisher">
                           <b>Publisher:</b>{books.publisher}
                       </div>
                       <div class="pages">
                           <b>Pages:</b>{books.pages}
                       </div>
                       <div class="website">
                        
                       </div>
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
