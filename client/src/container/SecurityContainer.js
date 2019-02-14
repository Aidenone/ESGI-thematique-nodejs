import React from 'react';
import{Switch, Route} from 'react-router-dom';
import LoginForm from './LoginForm';

export default class SecurityContainer extends React.Component{

    handleSubmit = (data) => {
        console.log(data);
        const myheaders = new Headers({"Content-Type" : "application/json"});
        fetch('http://localhost:3000/login_check',
            {
                method:'POST',
                headers: myheaders,
                mode : "cors",
                body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => localStorage.setItem('token',data.token));
    }
     
    render(){
        return(
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
            </Switch>           
        );
    }
}