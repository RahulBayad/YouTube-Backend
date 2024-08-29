import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import { Layout } from './components/Layout/Layout';
import { Rough } from './components/Rough';





function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Rough/>} />
    </Route>
  ))
  return (
  <>
    <RouterProvider router={router} />
  </>
  )
}

export default App
