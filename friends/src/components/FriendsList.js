import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

class FriendsList extends React.Component{
    constructor(){
        super();
        this.state={
            friends:[]
        }
    }

    getData = () => {
        axiosWithAuth()
            .get('/friends')
            .then(res => {
                console.log(res.data)
                this.setState({friends: res.data})
            })
            .catch(err => console.log(err))
    }
    
    componentDidMount(){
        this.getData();
    } 
   


    render(){
        const friends = this.state.friends;
        return(
           <div className='CardContainers'>
                {friends.map(item =>(
                    <div key={item.id} className='IndividualCards' >
                            <h2>Name: {item.name}</h2>
                            <p>Age: {item.age}</p>
                            <p>email: {item.email} </p>
                    </div>
                ))}
           </div>
        )//closes return
    }//closes render
}//closes component

export default FriendsList;