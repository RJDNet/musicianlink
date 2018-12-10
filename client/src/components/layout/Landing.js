import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="mt-3 p-5">
              <div className="col-md-12 text-left">
                <h1 className="display-5 mb-4 pt-5 text-light">Musician Link</h1>
                <p className="lead text-light mb-4">Create your personal profile and find like minded musicians!</p>
                <hr />
                <Link to="/register" className="btn btn-primary p-2 mr-1" style={{ width: '100px' }}>Sign Up</Link>
                <Link to="/login" className="btn btn-secondary p-2 ml-1" style={{ width: '100px' }}>Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});


export default connect(mapStateToProps)(Landing);