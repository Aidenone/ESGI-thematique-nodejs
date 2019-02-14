import React from 'react';
import Banner from "../components/Banner";
import {connect} from "react-redux";
import {logUser} from "../redux/actions/security";

class ProfilBanner extends React.Component {

    render() {
        const {user, isLogged} = this.props;
        return <Banner content={isLogged ? user.name : 'Not Connected'} />
    }
}

const mapStateToProps = function(state, ownProps){
    const {security:{user, isLogged}} = state;
    return{
        user,
        isLogged
    }
}

const mapDispatcherToProps = function(dispatch)  {
    return {
        logUser: (username, password) => dispatch(logUser(username, password, dispatch))
    }
}

const connectGenerator = connect(mapStateToProps, mapDispatcherToProps);
const ConnectedProfilBanner = connectGenerator(ProfilBanner);

export default ConnectedProfilBanner;