import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  
  const {image, bookName, author, rating,category,tags,tags2 } = book;
  return (
   
    <div>
      {/* <img src={image} alt="" /> */}



<div className="card w-96 p-5 bg-white shadow-xl border border-red-300">
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
      </div>  


</div>


  );
};

export default Book;