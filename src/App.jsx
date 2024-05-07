import React from 'react'
import './App.css'
import Box from './Box'

function App() {
  const objects = [
    {
      name: "Object 1",
      description: "Description of object 1",
      image: "https://shorturl.at/krzY7"
    },
    {
      name: "Object 2",
      description: "Description of object 2",
      image: "https://static.gettyimages.com/display-sets/creative-landing/images/GettyImages-1907862843.jpg"
    },
    {
      name: "Object 3",
      description: "Description of object 3",
      image: "https://p0.pxfuel.com/preview/440/625/255/cosmos-flower-cosmos-plant-pink-flowers-pictures-of-flowers-royalty-free-thumbnail.jpg"
    },
    {
      name: "Object 4",
      description: "Description of object 4",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3yGIrdRV9iMWyK0Q2iWeJSBR1XkRlArOREngcdMzoA&s"
    },
    {
      name: "Object 5",
      description: "Description of object 5",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwTbInm8a8IZMXnuEHx9I5OvEnXjxWvX4tEBIv4BcY6g&s"
    },
    {
      name: "Object 6",
      description: "Description of object 6",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnmKe1Zyw3Og7BzuX_R5Vs7EhdcmIxKpxmhu4uYBv-wQ&s"
    },
    {
      name: "Object 7",
      description: "Description of object 7",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfifkW_ALqf2pkgcW4ykwAIaktmhwh1nzVbr3esPxFg&s"
    },
    {
      name: "Object 8",
      description: "Description of object 8",
      image: "https://cdn.esawebb.org/archives/images/screen/weic2218a.jpg"
    },
    {
      name: "Object 9",
      description: "Description of object 9",
      image: "https://i.pinimg.com/236x/c2/fc/9d/c2fc9d585f744fdc86993f2d062848b1.jpg"
    },
    {
      name: "Object 10",
      description: "Description of object 10",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr-AeL1xrwDKusuCnShfYYZAsC1Miw2xwmifsv-MUNfQ&s"
    }
  ];
  
  console.log(objects);
  

  return (
    <>
      <h1 className='header'>All Cards Here</h1>
      <div className="main_container">
           <div className="hover_man">
           
      {objects && objects.map((item)=>{
       return (
        <div className="boxes">
 <div className="boxi">
 <Box name ={item.name} description ={item.description} image={item.image} className="border"/>
 </div>
        
        </div>
       )
      })}
    
    </div>
      </div>
    </>
  )
}

export default App
