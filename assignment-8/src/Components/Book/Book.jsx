import { CiStar } from "react-icons/ci";

import { Link } from "react-router-dom";

const Book = ({ book }) => {
  
  const { image, bookName, author, rating, category, tags, tags2, id } = book;
  
  console.log(book);
  return (
   
    

    <div>

      

      
      <div className="card w-96 p-5  shadow-xl border border-[#23BE0A]">
        <Link to= {`/Book/${id}`}> <button></button>
  <figure><img className=" h-52 p-7 bg-[#F3F3F3] " src= {image} alt="book" /></figure>
  <div className="card-body">
          <div className="flex gap-12 text-[#23BE0A] text-xl font-bold"> 
            <h2 className="border rounded-lg text-center  bg-slate-50 p-1">{tags}</h2>
            <h2 className="border rounded-lg text-center bg-slate-50 p-1"> {tags2} </h2> 
    </div>
          <p className="text-black font-bold text-xl">{ bookName}</p>
          <p className="text-black "> by : {author}</p>
          <hr />

          <div className="flex text-black">

            
              <p>{category}</p>
            <p className="flex gap-3">
              <h1 className="flex justify-center items-center gap-2 text-xl" >{rating} <span className="text-2xl" ><CiStar /></span></h1>
              
            </p>
          </div>
        </div>
        </Link>
      </div>  


</div>


  );
};

export default Book;