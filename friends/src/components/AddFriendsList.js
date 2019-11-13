import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

export class AddFriendsList extends React.Component  {
    state = {
        addNewFriend:{
            name:'',
            age:'',
            email:'',
            id:Date.now()
        }
    };

    handleChange = e => {
        this.setState({
            addNewFriend: {
                ...this.state.addNewFriend,
                [e.target.name]: e.target.value
            }
        });
    };

    postFriend = e => {
        axiosWithAuth()
            .post('friends', this.state.addNewFriend)
            .then(res => {
                console.log('this is post a friend', res)
            })
            .catch(err=>console.log(err)); 
    };

   
    render(){
    
        return (
            <div className="addFriendForm"> 
                <h2>Add Friend</h2>
                <form className = "row-container" onSubmit={this.postFriend}>
                                        
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="name" 
                        value={this.state.addNewFriend.name}
                        onChange={this.handleChange}
                        />

                    <input 
                        type="text" 
                        name="age" 
                        placeholder="age"
                        value={this.state.addNewFriend.age}
                        onChange={this.handleChange}
                        />

                    <input 
                        type="text" 
                        name="email" 
                        placeholder="email"
                        value={this.state.addNewFriend.email}
                        onChange={this.handleChange}
                        />
                                                

                    <button type="submit">
                        Add Friend
                    </button> 
                </form>
            </div>
        );
    };
}
   