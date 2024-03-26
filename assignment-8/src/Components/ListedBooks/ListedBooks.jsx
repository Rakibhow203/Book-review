

const ListedBooks = () => {
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
    </div>
  );
};

export default ListedBooks;