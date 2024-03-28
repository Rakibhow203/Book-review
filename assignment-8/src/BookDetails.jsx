
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from "react-router-dom";
import { saveHandleRead } from './Utility/LocalStorage';


const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  // const idInt = parseInt(id);
  const book = books.find(book => book.id === id);
  // console.log(book);

  const handleWishlist = () => {
    toast('You have Wishlist successfully');

  };

  const handleRead = () => {
    saveHandleRead(id);
    toast ('You have Read successfully')
  }

  

  return (
    <div className="mt-20 max-w-[1280px] mr-auto p-4">
     
      
<div className="card bg-base-100 shadow-xl ">
    <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-center items-center gap-x-20">
        <div>    <figure><img className="w-92 h-96" src={book.image} alt="Movie" /></figure></div>
        
  <div className="card-body">
          <h2 className="card-title">{ book.bookName}</h2>
          <p>By: {book.author} </p>
          <hr />
          <p>  {book.category} </p>
          <hr />
          <p><span className="font-bold">Review:</span> {book.review} </p>

          <div>
            
            <div className="flex p-8">

            <p className=""> Tag: {book.tags} </p>
              <p>  {book.tags2} </p>
              </div>
</div>

          <hr />

          
          <div className="my-3">
            <p className="flex gap-x-28 my-2">Number of Pages:
              <p className="text-black  font-extrabold ">
                {book.totalPages}</p>
            </p>
            

<p className="flex gap-x-40 my-2">Publisher:
              <p className="text-black  font-extrabold ">
                {book.publisher}</p>
            </p>


            <p className="flex gap-x-28 my-2">Year of Publishing:
              <p className="text-black  font-extrabold ">
                {book.yearOfPublishing}</p>
            </p>

             <p className="flex gap-x-48 my-2">Rating:
              <p className="text-black  font-extrabold ">
                {book.rating}</p>
            </p>
          

          </div>
<div className="grid grid-cols-2
  ">
          <div className="card-actions ">
      <button  onClick={handleRead} className="btn btn-primary text-white ">Read</button>
          </div>

      <div className="card-action">
      <button   onClick={handleWishlist} className="btn btn-primary text-white">Wishlist</button>
            </div>

            </div>
  </div>
</div>
      </div>
        <ToastContainer />
    </div>
  );
};

export default BookDetails;