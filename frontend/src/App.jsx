import React from 'react'
import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreateNote";
import NotePage from "./pages/NotePage";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
         <Route path="/create" element={<CreatePage/>}/>
          <Route path="/note/:id" element={<NotePage/>}/>
      </Routes>
    </div>
  )
}

export default App
