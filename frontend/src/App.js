

import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from './components/getUser/User';
import Add from './components/addUser/Add';
import Edit from './components/updateUser/Edit';


function App() {

  const route = createBrowserRouter([
      {
        path:"/",
        element: <User/>,
      },
      {
        path:"/add",
        element: <Add/>,
      },
      {
        path:"/edit/:id",
        element: <Edit/>,
      },
  ])


  return (
    <div className="container">
        <h1>Crud-App</h1>
        <div className='App'>
            <RouterProvider router={route}>

            </RouterProvider>
        </div>
    </div>
  );
}

export default App;
