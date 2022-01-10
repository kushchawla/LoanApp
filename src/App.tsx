import React, {Component} from 'react';
import logo from './logo.svg';
import LoanApplications from './components/LoanApplications';
import {Route, useRoutes,  BrowserRouter as Router, Routes} from 'react-router-dom';
import DetailApplication from './components/DetailApplication';
import {store} from './redux/store';
import {Provider} from 'react-redux';
import ColleteralSecurity from './components/ColleteralSecurity';
import LeftMenu from './layout/leftMenu';
import Budget from './components/Budget';

class App extends Component {
  render(){

  return (
    <Provider store = {store}>
    <div className="App">
    <div>

<div className="clearfix"></div>

<section className="wizard-section">
<div className="container-box-form">
<div className="wrapper-box-form">
    <div className="row no-gutters">
        <div className="col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-md-12 d-flex form-content">
                        <LeftMenu />
      <Router>
        <Routes>
          <Route path="/" element={<LoanApplications />} />
          <Route path="/loan-application-detail/:id" element={<DetailApplication /> } />

          <Route path="/colleteral-list/:id" element={<ColleteralSecurity /> } />

          <Route path="/budget" element={<Budget /> } />
        </Routes>
    </Router>
    </div>
                                </div>
                     </div>
                </div>
            </div>
        </div>
    </section>    
    
       </div>
    </div>
    </Provider>
  );
}
}

export default App;
