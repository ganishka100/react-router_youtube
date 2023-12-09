import React from 'react'

import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
       <nav className="navbar navbar-expand-sm navbar-white bg-white fixed-top">
          <div className="container">
          <img src="Images/menu.png" className="menu" alt=""/>   
            <img src="Images/youtube-logo.png" className="logo ms-3" alt=""/>
            <Link className="navbar-brand fw-bold fs-4" to="/">YouTube</Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="/collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                {/* <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" aria-current="page">About <span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/gallery" aria-current="page">Gallery <span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/dropdown" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <Link className="dropdown-item" to="/">Action 1</Link>
                            <Link className="dropdown-item" to="/">Action 2</Link>
                        </div>
                    </li>
                </ul> */}
                <form className="d-flex gap-2 col-6 form">
                    <input className="form-control rounded-5" type="text" placeholder="Search"/>
                    <img src="Images/search.png" className="search mt-2" alt=""/>
                </form>

                <img src="Images/voice-search.png" className="voice-search" alt=""/>
                <img src="Images/upload.png" className="upload ms-auto" alt="upload-img"/>
                <img src="Images/more.png" className="more ms-5" alt="more-img"/>
                <img src="Images/notification.png" className="notification ms-5" alt="notification"/>
                <img src="https://img.freepik.com/premium-vector/golden-letter-b-symbol-black-background-icon-4_95164-5542.jpg?size=626&ext=jpg&uid=R124317384&ga=GA1.1.555161482.1698136723&semt=ais" className="letter" alt=""/>
            </div>
         </div>
       </nav>
       
       {/* ---------------------------sec-1------------------------------ */}
       {/*------------------------------------- sidebar------------------------------ */}

       <div className="sidebar fixed-left position-absolute">
        <div className="shortcut-links">
            <Link to="/"><img src="Images/home.png" alt=""/><p>Home</p></Link>
            <Link to="/"><img src="Images/explore.png" alt=""/><p>Explore</p></Link>
            <Link to="/"><img src="Images/subscriprion.png" alt=""/><p>Subscription</p></Link>
            <Link to="/"><img src="Images/library.png" alt=""/><p>Library</p></Link>
            <Link to="/"><img src="Images/history.png" alt=""/><p>History</p></Link>
            <Link to="/"><img src="Images/playlist.png" alt=""/><p>Playlist</p></Link>
            <Link to="/"><img src="Images/messages.png" alt=""/><p>Messages</p></Link>
            <Link to="/"><img src="Images/show-more.png" alt=""/><p>Show More</p></Link>
            <hr/>
        </div>

        <div class="subscribed-list">
            <h3>SUBSCRIBED</h3>
            <Link to="/"><img src="Images/Jack.png" alt=""/><p>Jack Nichol</p></Link>
            <Link to="/"><img src="Images/simon.png" alt=""/><p>Simon Baker</p></Link>
            <Link to="/"><img src="Images/tom.png" alt=""/><p>Tom Hardy</p></Link>
            <Link to="/"><img src="Images/megan.png" alt=""/><p>Megan Ryan</p></Link>
            <Link to="/"><img src="Images/cameron.png" alt=""/><p>Cameron Diaz</p></Link>
        </div>
    </div>
    
           {/* ---------------------------sec-2------------------------------ */}
       {/*-------------------------------------container------------------------------ */}

<div className="sec-2 mt-3 pt-5">
    <div className="container">
        <div className="row">
            <div className = "col-md-12">
        <ul className="navbar-nav d-flex flex-row buttons mt-3">
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-danger text-white btn-outline-dark active" to="/" aria-current="page">All <span className="visually-hidden">(current)</span></Link>
                 </li> 
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-light text-black" to="/lordkrishna" aria-current="page">Lord Krishna <span className="visually-hidden">(current)</span></Link>
                 </li> 
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-light text-black" to="/latestcars" aria-current="page">Latest Cars <span className="visually-hidden">(current)</span></Link>
                 </li>  
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-light text-black" to="/latestbikes" aria-current="page">Latest Bikes <span className="visually-hidden">(current)</span></Link>
                 </li> 
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-light text-black" to="/festivals" aria-current="page">Festivals <span className="visually-hidden">(current)</span></Link>
                 </li> 
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-light text-black" to="/music" aria-current="page">Music <span className="visually-hidden">(current)</span></Link>
                 </li>
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-light text-black" to="/movies" aria-current="page">Movies <span className="visually-hidden">(current)</span></Link>
                 </li>
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-light text-black" to="/cooking" aria-current="page">Cooking <span className="visually-hidden">(current)</span></Link>
                 </li>
                 <li className="nav-item mx-auto">
                        <Link className="btn btn-light text-black" to="/bollywood" aria-current="page">Bollywood <span className="visually-hidden">(current)</span></Link>
                 </li>
                </ul>  
               
            </div>
        </div>
    </div>


    </div>
       </div>
  )
}
