import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles, clearCurrentProfile } from '../../actions/profileActions';

class Profiles extends Component {

  componentDidMount() {
    this.props.getProfiles();
    this.props.clearCurrentProfile();
  }

  render() {

    const { profiles, loading } = this.props.profile;
    let profileItems;

    if (profiles === null || loading) {
      profileItems = <Spinner />
    } else {
      if (profiles.length > 0) {
        profileItems = profiles.map(profile => (
          <ProfileItem key={profile._id} profile={profile} />
        ))
      } else {
        profileItems = <h4>No profiles found...</h4>
      }
    }

    return (
      <div className="profiles mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-5 text-center">Musician Profiles</h1>
              <p className="text-center">
                Browse and connect with musicians
              </p>
              {profileItems}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  clearCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles, clearCurrentProfile })(Profiles);