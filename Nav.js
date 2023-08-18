import React from 'react'

function Navbar(){
    return(
        <header>
            <nav>
                <div  className='logo'>webCreation</div>
                <div>
                 <ul>
                   <a href="#"><li>Home</li></a> 
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Gallery</li></a>
                   <a href="#"> <li>Contact</li></a>
                 </ul>
                </div>
                
            </nav>

        </header>
    )
}
export default Navbar;