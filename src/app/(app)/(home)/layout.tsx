

import React from 'react'
import Navbar from '@/components/Navbar'
import MobileNavbar from '@/components/MobileNavbar'


//Inteface lets us defice the shape of an object ...This is a TS specefic word
//By the line given below i am saying that all the Props must follow the same structure
interface Props{


  children : React.ReactNode 

  //This means that the Props object must have a property called children
  //The type of that children must be React.ReactNode

  //children is a special prop in React

  //Whatever we wrap inside a component gets automatically passed on to children 
  //React.ReactNode = "any valid thing you can put between React component tags."
}
const Layout = ({children}: Props ) => {
  return (
    <div className='flex flex-col min-h-screen '>
         {/* Desktop Navbar */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        {/* Mobile Navbar */}
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
      
      {children}
      <footer className='fixed bottom-0 left-0 w-full bg-gray-400 text-white py-4 text-center'>
        KartFlip.Inc 

      </footer>

    </div>
  )
}

export default Layout



//The layout page is always rebdered first
//So if we dont pass in children inside it like 



// import React from 'react'

// const Layout = () => {
//   return (
//     <div>Layout</div>
//   )
// }

// export default Layout



//Then this will only display layout on the page and the file name must be layout 
//It cannot be Layout or LAYOUT 
// Next js is a very strict framework


