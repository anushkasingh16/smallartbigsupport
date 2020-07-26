import React, {  Component  } from 'react';
// import './App.css';
import firebase from 'firebase';
import firebaseConfig from './firebaseconfig';
import './styles.css';
import logo from './Logo.jpg';

var client = firebaseConfig;
var provider = new firebase.auth.GoogleAuthProvider();
function signIn()
{
  client.auth().signInWithRedirect(provider);
}
class Home extends Component {
  render(){
    return (<div>

  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet"/>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous"/>
  <link rel="stylesheet" href="styles.css"/>

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossOrigin="anonymous"/>

  <section className="colored-section" id="title" height="100%">
    <div className="container-fluid">

      <nav className="navbar navbar-expand-lg navbar-dark" id="home">

        <a className="navbar-brand" href="/"><img src={require('./logo.png')} height="100" alt="logo"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="./profile.html"><i className="profile fas fa-user-circle"></i></a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row">
        <div className="col-lg-7">
          <h1 className="big-heading">We Connect Small Businesses With Local Artists</h1>
          <button type="button" className="get-started btn btn-lg btn-dark top-btn">Get Started</button>
          <button type="button" onClick={signIn} className="login btn btn-lg btn-outline-light top-btn">Login</button>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <img className="title-image" src="https://images.unsplash.com/photo-1594392174535-eb4b1043dad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="restaurant-wall"/>
        </div>
      </div>

    </div>
  </section>
  <p style={{textAlign: 'center', marginBottom:0, backgroundColor:"#006a71", paddingBottom:4+ "rem"}}></p>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossOrigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossOrigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossOrigin="anonymous"></script>
    </div>)
  }
}
export default Home;
