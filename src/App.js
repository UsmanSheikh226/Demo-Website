import React, { Component } from 'react'
import './App.css';
import LoginForm from './components/LoginForm';
import NavBar from './components/navbar';

class App extends Component {
  constructor(){
    super();
    this.state = {checked:''}
  }


  
  

  textChange(e){
    this.setState({input: e.target.checked })
  }



  handleLoginClick = () => {
    this.props.LoginForm.setIsShowLogin((isShowLogin) => !isShowLogin);
  };
  
  
 
  state = {

    const:     [isShowLogin, setIsShowLogin] = useState(true);
 

  }

  render()
  {

    
    
  const myStyle={
    backgroundImage: 
"url('https://as1.ftcdn.net/v2/jpg/05/08/26/42/1000_F_508264224_8R6k3PSZcLqUD2g8hwNstbRZTahbkYLj.jpg')",
    height:'100vh',
    marginTop:'-70px',
    fontSize:'25px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
};


return (


  <div style={myStyle}>
    <h1>hello</h1>

  
    <NavBar/>
    <div class="container">
      
     
    <div class="text-center">
      <ul>

    <li><input type="checkbox" onChange={this.textChange.bind(this)} />
      <em style={{color: "white"}}>Are you 18 years old or above?</em></li>
      
  <li><button  disabled={!this.state.input}  class="btnn btn btn-lg btn-outline-success" style={{ font: "50px sans serif"}} data-modal="modalOne" type="button" >Buyer</button>
  
  <button disabled={!this.state.input} class="btnn btn btn-lg btn-outline-success" style={{ font: "50px silent sans serif"}} data-modal="modalOne" type="button">Seller</button></li></ul>


  
      
      <LoginForm isShowLogin={this.LoginForm.isShowLogin} /> 
  

   




    </div>
  </div> 
</div>


      


);
}}
  



export default App;
