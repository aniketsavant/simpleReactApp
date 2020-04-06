import React, {Component} from 'react';
import { credential } from '../../constants/constant';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            password:'',
            usernameForCheck: credential.username,
            passwordForCheck: credential.password
        }
        this.setStateValue = this.setStateValue.bind(this);
        this.onSubmitClick = this.onSubmitClick.bind(this);
    }

    setStateValue(event) {
        const key = event.target.id; 
        this.setState({
            [key]: event.target.value
        });
    }


    onSubmitClick(event) {
        if(this.state.username === this.state.usernameForCheck && this.state.password === this.state.passwordForCheck) {
            // return <h1>Heiiiii</h1>
            localStorage.setItem('isLogIn', true);
            this.props.history.push('/home');
        } else {
            alert ('Wrong Credintilas..!!');
        }
        event.preventDefault();
    }

    render() {
      return (
            <form onSubmit = {this.onSubmitClick} > 
                <input type = "text" id = "username" placeholder = "Username" onChange = {this.setStateValue}  value = {this.state.username} />
                <input type = "password" id = "password" placeholder = "Password" onChange = {this.setStateValue} value = {this.state.password} />
                <button type= "submit" >Login</button>
            </form>
        )
    }
} 

export default LoginComponent;