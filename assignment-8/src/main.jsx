import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// https://github.com/programming-hero-web-course-4/b9a8-book-vibe-Rakibhow203

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Banner from './Components/Banner/Banner';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import MainLayout from './assets/MainLayout';
import Books from './Components/Books/Books';
import BookDetails from './BookDetails';



const router = createBrowserRouter([
  {
    path: "/",
    // element: <Root></Root>,
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: '/',
        element: <div>
          <div><Banner></Banner></div>
          <Books></Books>
          
        </div>,
      
      },

      {
        path: '/ListedBooks',
        element:<ListedBooks></ListedBooks>,
      },
      {
        path: '/PagesToRead',
        element: <PagesToRead></PagesToRead>,
      },
      {
  
        path: '/Book/:id',
        element: <BookDetails></BookDetails>,
loader:() => fetch('../books.json')


}

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
