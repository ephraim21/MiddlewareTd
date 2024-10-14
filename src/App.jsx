import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Chats from './components/chats'

function App() {
  return (
      <div class="flex h-screen antialiased text-gray-800">
        <div class="flex flex-row h-full w-full overflow-x-hidden">
          <SideBar />
          
          <Chats />
        </div>
      </div>
  )
}

export default App
