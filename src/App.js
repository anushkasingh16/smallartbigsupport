import React, {  Component  } from 'react';
import './App.css';
import { BrowserRouter, Route,Switch} from 'react-router-dom';
import firebase from 'firebase';
import firebaseConfig from './firebaseconfig';
import './styles.css';
import './dashboard.css';
import './index.css';
var profileinfo;
var client = firebaseConfig;
var database = client.firestore();
var provider = new firebase.auth.GoogleAuthProvider();
function signIn()
{
  client.auth().signInWithRedirect(provider);
}
class App extends Component{
  render(){
    return(<div>
    <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/profile" component={profile} />
          <Route exact={true} path="/dashboard" component={dashboard}/>
        </Switch>
   </BrowserRouter></div>)
  }
  };
class Home extends Component {
  render(){
    return (<div>
       
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet"/>

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
  <link rel="stylesheet" href="styles.css"/>

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"/>

  <section className="colored-section" id="title">
    <div className="container-fluid">

      <nav className="navbar navbar-expand-lg navbar-dark" id="home">
        <img alt="Logo" src="./Logo.jpg"width="240" height="130"/>
        <a className="navbar-brand" href="">Small Art Big Support</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="./profile"><i class="profile fas fa-user-circle"></i></a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="row">
        <div className="col-lg-7">
          <h1 className="big-heading">We Connect Small Businesses With Local Artists</h1>
          <button type="button" class="get-started btn btn-lg btn-dark top-btn">Get Started</button>
          <button type="button" onClick={signIn} class="login btn btn-lg btn-outline-light top-btn">Login</button>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <img className="title-image" src="https://images.unsplash.com/photo-1594392174535-eb4b1043dad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" alt="restaurant-wall"/>
        </div>
      </div>

    </div>
  </section>


  <section className="white-section" id="features">
    <div className="container-fluid">
      <div className="row features-row">

        <div className="feature-box col-lg-4">
          <i className="features-icon fas fa-check"></i>
          <h3 className="features-title">Simple Setup.</h3>
          <p className="features-desc">Easily find an artist to collaborate with.</p>
        </div>

        <div className="feature-box col-lg-4">
          <i className="features-icon fas fa-people-carry"></i>
          <h3 className="features-title">Support Locally.</h3>
          <p className="features-desc">Collaborate with artists in your area.</p>
        </div>

        <div className="feature-box col-lg-4">
          <i className="features-icon fas fa-clock"></i>
          <h3 className="features-title">Find work faster.</h3>
          <p className="features-desc">Get matched with artists who are eager to start working.</p>
        </div>

      </div>

    </div>
  </section>

  <section className="colored-section" id="cta">
    <div className="container-fluid">
      <h3 className="big-heading">Collaborate with local businesses and artists</h3>
      <button className="btn btn-lg btn-dark get-started top-btn" type="button">Get Started Today</button>
    </div>
  </section>
  <footer className="white-section" id="footer">
    <div className="container-fluid">
      <i className="footer-icon fab fa-twitter"></i>
      <i className="footer-icon fab fa-facebook-f"></i>
      <i className="footer-icon fab fa-instagram"></i>
      <i className="footer-icon fas fa-envelope"></i>
      <p>© Copyright 2020</p>
    </div>
  </footer>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </div>)
  }
}
class profile extends Component {
  render(){
    return( <div>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet"/>


  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>
  <link rel="stylesheet" href="styles.css"/>

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"/>

  <section className="colored-section" id="navigation">
    <div className="container-fluid">

      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/profile">My Profile</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a  href="./"><img alt="Home" src="./Home.jpg"
                width="150" height="85"/></a>
            </li>
          </ul>
        </div>
      </nav>

    </div>
  </section>

  <br />
  <section class="profile_2">
    <label for="fname">First Name</label>
    <input type="text" name="fname" id="fname"/><br/>
    <label for="lname">Last Name</label>
    <input type="text" name="lname" id="lname"/><br/>
    <label for="email">Email</label>
    <input type="text" name="email" id="email"/><br/>
    <label for="city">City</label>
    <input type="text" name="city" id="city"/><br/>
    <label for="state">State</label>
    <input type="text" name="state" id="state"/><br/>
    <label for="country">Country</label>
    <input type="text" name="country" id="country"/><br/>
    <label for="portfolio">Portfolio URL</label>
    <input type="text" name="portfolio" id="portfolio"/><br/>
  </section><br/>

  <section class="profile_2">
    <span>Skills</span>
    <br />
    <input type="checkbox" name="skill" id="portraits" value="portraits"/>
    <label for="portraits">Portraits</label>
    <input type="checkbox" name="skill" id="signs" value="signs"/>
    <label for="signs">Signs</label>
    <input type="checkbox" name="skill" id="banners" value="banners"/>
    <label for="banners">Banners</label>
    <br />
    <input type="checkbox" name="skill" id="brochure" value="brochure"/>
    <label for="brochure">Brochure</label>
    <input type="checkbox" name="skill" id="digital" value="digital"/>
    <label for="digital">Digital Art</label>
    <input type="checkbox" name="skill" id="other" value="other"/>
    <label for="other">Other</label>
  </section><br />

  <section className="profile_2">
    <label for="bio">Bio</label> <br />
    <textarea id="extra" name="extra" rows="5" cols="40"></textarea>
  </section><br />
  <section class="colored-section" id="cta">
    <button type="button" class="get-started btn btn-lg btn-dark top-btn">Save</button>
  </section>

  <footer className="white-section" id="footer">
    <div className="container-fluid">
      <i className="footer-icon fab fa-twitter"></i>
      <i className="footer-icon fab fa-facebook-f"></i>
      <i className="footer-icon fab fa-instagram"></i>
      <i className="footer-icon fas fa-envelope"></i>
      <p>© Copyright 2020</p>
    </div>
  </footer>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </div>)
  }
}
class dashboard extends Component{
  render(){
    return (<div>
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans&family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet"/>
      

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous" />
        <link rel="stylesheet" href="styles.css"/>
        <link rel="stylesheet" href="dashboard.css"/>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous"/>
        <section className="colored-section" id="navigation">
          <div className="container-fluid">

            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="">COMPANY</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#footer"><i class="profile fas fa-user-circle"></i></a>
                  </li>
                </ul>
              </div>
            </nav>
      
          </div>
        </section>
      
        <section>
          <div className="container-fluid">
            <h1>Welcome Back!</h1>
            <p className="lead">
              Based on your business' needs and the designer's skillset, we've curated a list of potential local freelancers for you to collaborate with.
            </p>
            <hr />
            <div className="results">

              <div className="card">
                <div className="card-header">
                  <h4>Jane Smith</h4>
                </div>
                <div className="card-body">
                  <h6 className="card-title"><i class="fas fa-map-marker-alt"></i> Los Angeles, CA 90024</h6>
                  <h6 className="card-title"><i class="fas fa-star"></i> $30/hour</h6>
                  <p className="card-text"><strong>Open to work on:</strong> Signs, Banners, and Brochures</p>
                  <p>Hi, my name is Jane and I am a freelance graphic designer based in LA.
                    I have experience in designing fliers and pamphlets for print.
                    I also love chalk-lettering, so if you'd like to put up a menu or signage,
                    I'm here for you! Looking forward to connect!</p>
                  <a href="#" className="btn btn-info">Connect with Jane</a>
                  <a href="#" className="btn btn-outline-info">View Jane's Portfolio</a>
                </div>
              </div>
      
            </div>
          </div>
        </section>
      

        <footer className="white-section" id="footer">
          <div className="container-fluid">
            <i className="footer-icon fab fa-twitter"></i>
            <i className="footer-icon fab fa-facebook-f"></i>
            <i className="footer-icon fab fa-instagram"></i>
            <i className="footer-icon fas fa-envelope"></i>
            <p>© Copyright 2020</p>
          </div>
        </footer>

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
      </div>)
  }
}
export default App;