import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
    
    
}, [])

  return (
   
   <div className="max-w-[1280px] mr-auto p-4">
      
      <h1 className="text-5xl font-bold text-black text-center mb-5 mt-10">Books: {books.length} </h1>
      

      <div className="grid grid-cols-3 gap-8">
      
        {
          
books.map(book => <Book  key={book.id} book={book}> </Book>)

      }
      
      </div> 


      


      </div>
  );
};

export default Books;


