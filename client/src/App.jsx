import './App.css'
import AddUser from './addUser/AddUser'
import User from './getuser/User'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import UpdateUser from './updateUser/UpdateUser'


function App() {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />
    },
    {
      path: "/add",
      element: <AddUser />
    },
    {
      path: "/update/:id",
      element: <UpdateUser />
    }

  ])

  return (
    <div className='app'>
      <RouterProvider router={route} />
    </div>
  )
}

export default App
