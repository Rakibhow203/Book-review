import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredHandleRead } from "../../Utility/LocalStorage";
import { CiLocationOn } from "react-icons/ci";
import { MdMan } from "react-icons/md";
import { MdContactPage } from "react-icons/md";
// import ReadBooks from "../ReadBooks/ReadBooks";

const ListedBooks = () => {

  const read = useLoaderData();
  
  const [handleRead, setHandleRead] = useState([]);

  useEffect(() => {
  
    const storedRedIds = getStoredHandleRead();
    if (read.length > 0) {
      const readHanle = read.filter(red => storedRedIds.includes(red.id))
      

      setHandleRead(readHanle);

      // console.log(readHanle);
    }



  }, [])


  return (



    <div className="max-w-[1280px] mr-auto p-4 mt-12">



      <h1 className="text-4xl text-center font-extrabold text-black border p-4 bg-slate-300 rounded-lg">Books</h1>

<div className=" text-center mt-24">

<div className="dropdown">
  <div tabIndex={0} role="button" className="btn w-52 m-1 bg-green-500 text-white">Sort By</div>
  <ul tabIndex={0} className=" font-bold dropdown-content z-[1] menu p-2 shadow bg-white rounded-box w-52 text-black">
    <li className=""><a>Rating</a></li>
    <li><a>Number of pages</a></li>
    <li><a>publisher year</a></li>
  </ul>
</div>

      </div>

<div className="text-2xl"> toal Stored: {handleRead.length} </div>

      <div>

        {
          

          handleRead.map(read => <li key={read.id}>
          
            
            <div>

<div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<ul className="flex flex-col divide-y dark:divide-gray-300">
		<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
			<div className="flex w-full space-x-2 sm:space-x-4">
				<img className="flex-shrink-0 object-cover w-11 h-14 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src= {read.image}  alt="Polaroid camera" />
				<div className="flex flex-col justify-between w-full pb-4">
					<div className="flex justify-between w-full pb-2 space-x-2">
						<div className="space-y-1">
							<h3 className="text-lg font-semibold leading-snug sm:pr-8"> {read.bookName} </h3>
                            <p className="text-sm dark:text-gray-600">By: {read.author} </p>

<div className="flex gap-3">

                            <div className="flex gap-3">
                              <p>Tag</p>
                              <p className="flex gap-5 font-bold text-green-500">
                              <p> {read.tags} </p>
                                <p> {read.tags2} </p>
                                </p>
                            </div>
                            
                                <div>
<p>
                                <p className="">
                                
                                  
                                  <p className="flex gap-2"> {<CiLocationOn />} Your of Publishing: {read.yearOfPublishing} </p>
                                </p>
                                </p>
                              </div>
                              
                              </div>
						</div>
						
					</div>
					
                        <div className="flex gap-5">


                          <p className="flex gap-2"> {<MdMan />} Publisher: {read.publisher} </p>
                          
                          <p className="flex gap-2"> {<MdContactPage />} Page { read.totalPages } </p>


                        </div>

                        <hr />
                        


                        <div className="flex mt-2 gap-2">


                          <div className="flex gap-3">
                            
                            <p>Category: {read.category}  </p>
                            <p>Rating: {read.rating} </p>
                          </div>
                          
                          <div>
                            <button className="btn-primary rounded-lg text-center bg-green-600 text-white font-normal"> View Details</button>
                          </div>



                        </div>


				</div>
			</div>
		</li>
	
		
	</ul>

	
</div>

            </div>

          </li>)  
          
          // handleRead.map(read => <ReadBooks  key={read.id} read={read} ></ReadBooks>)
          
          
}


      </div>

    </div>
  );
};

export default ListedBooks;







