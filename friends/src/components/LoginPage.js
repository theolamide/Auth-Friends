import React from 'react';


  class Login extends React.Component  {
    state = {
        credentials:{
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        axiosWithAuth()
            .post('login', this.state.credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/protected');
            })
            .catch(err=>console.log(err));
    };

    render(){
    
        return (
            <div className="LoginForm"> 
                <h2>Login Page</h2>
                <form className = "row-container">
                                        
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="username" 
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        />

                    <input 
                        type="text" 
                        name="password" 
                        placeholder="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                                                

                    <button type="submit">
                        Login
                    </button> 
                </form>
            </div>
        );
    };
}
   