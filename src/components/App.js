// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/Header';
import NavBar from './client/NavBar';
import {connect} from 'react-redux';
import '../styles/Homepage.css';

// class App extends React.Component {
//   render() {
//     return (
//       <div className="container-fluid">
//         <Header
//           loading={this.props.loading}
//         />
//         {this.props.children}
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <NavBar/><br/> */}
        <div >
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
