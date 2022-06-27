import React, { Component } from 'react'
import './navbar.css';
import logo from '../assets/images/logo.png';

class NavBar extends Component {



 
    state= {
      handleClick = () => {
        handleLoginClick();
      };
      handleLoginClick = () => {
        setIsShowLogin((isShowLogin) => !isShowLogin);
      }
}
    render(){
    return(

        
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          <img src={logo} alt="Logo" width={70} height={40}></img></a>
          <button class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent" >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" style={{ top: "50%"}}>
                <a class="nav-link active"  style={{ marginTop: "10px", font: "20px silent sans serif"  }} aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{ marginTop: "10px", font: "20px silent sans serif"}} aria-current="page" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" style={{ marginTop: "10px", font: "20px silent sans serif"}} aria-current="page" href="#">Contact Us</a>
              </li>
              
                
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"  style={{ marginTop: "10px"}}/>
              <button class="btn btn-outline-success" style={{ marginTop: "10px"}} type="submit">Search</button>
              <button class="loginicon btn-outline-success" onClick={handleClick} style={{ marginTop: "10px"}} type="submit">SignIn</button>
            </form>
          </div>
        </div>
      </nav>
    )
    }
  }
          
    
    


export default NavBar;