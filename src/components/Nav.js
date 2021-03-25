import React, {Component} from 'react';
import NavItem from './NavItem'

class Nav extends Component {
    constructor(props){
        super(props)

    }

    // methods
    render(){
        return ( 
            <div>
           <NavItem item='Home' />
           <NavItem item='About' />
           <NavItem item='Gallery' />
           </div>

        )
    }
}

export default Nav;