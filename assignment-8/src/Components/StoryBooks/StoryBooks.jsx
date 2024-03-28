import { useState, useEffect } from "react";
import { Story } from "../Story/Story";


const StoryBooks = () => {

  const [StoryBooks, setStoryBooks] = useState([]);

  useEffect(() => {
    fetch('bookReviews.json')
      .then(res => res.json())
      .then(data => setStoryBooks(data))
    
   

}, [])

  
  //  console.log(StoryBooks);
  
  return (
 <div className="max-w-[1280px] mr-auto p-4 ">
      
      <h1 className="text-5xl font-bold text-black text-center mb-5  mt-10">Books Review & Shire Your Story : {StoryBooks.length} </h1>
      
      <h1 className="text-center text-2xl font-bold mb-12 mt-12"> <span className="text-3xl font-extrabold text-green-600 ">LibraryThing </span>
<br /> A Home For Your Books.</h1>

      <div className="grid lg:grid-cols-2 text-xl font-medium gap-6  ">

        <div  className="border border-green-500 bg-slate-100 rounded-lg p-4">
          <li>
            LibraryThing is completely free.
          </li>
          <li>Add books, movies and music from Amazon, the Library of Congress and 4,941 other libraries.</li>
          <li>Track your reading progress, rate and review.</li>
          <li>See detailed charts and stats about your library and reading life.</li>
          <li>Find your new favorite book with personalized recommendations.</li>
        </div>
        
        <div className="border border-green-500 bg-slate-100 rounded-lg p-4">

<li>A warm and welcoming community of nearly three million book lovers.</li>
<li>Join groups and talk with other book lovers.</li>
<li>Our Early Reviewers program offers over 3,000 free, early-release books every month.</li>
<li>Apps for iPhone and Android.</li>
<li>LibraryThing is a free, library-quality catalog to track reading progress or your whole library.</li>


        </div>



      </div>



  <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-16 ">
{

StoryBooks.map(story => <Story key={story.ID} Story={story}></Story> )
      }
      
</div>

      </div>
  );
};

export default StoryBooks;