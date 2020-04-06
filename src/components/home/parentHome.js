import React, {Component} from 'react';
import ChildHome from './childHome';

 class ParentHomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.onLogoutClick = this.onLogoutClick.bind(this);
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount() {
        this.setState( {
            count : this.state.count + 1
        })
    }

    decrementCount() {
        if(this.state.count !== 0) {
            this.setState({
                count : this.state.count -1
            })
        }
        
    }

    onLogoutClick(event) {
        localStorage.clear();
        this.props.history.push('/login');
    }

    render(){ 
        return (
            <div>
                <h1>Parent Component</h1>
                <button onClick = {this.incrementCount}>Increment Count</button>
                <button onClick = {this.decrementCount}>Decrement Count</button>
                <h1>Count = {this.state.count}</h1>
                <p>******************************************************************</p>
                <ChildHome count = {this.state.count}/>
                <button onClick = {this.onLogoutClick}>Logout</button>
            </div>
        )
    }
  
}


export default ParentHomeComponent