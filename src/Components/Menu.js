import React from "react";
import '../CSS/menu.css';
import burg from './menu.svg';
import { StyleSheet } from 'react-native'

class Menu extends React.Component{
    
    constructor(){
        super();
        this.myRef = React.createRef()
        
    }

     open_close_menu() {
        
        const node = this.myRef.current;
         let width = StyleSheet.flatten(node.props.style).display;

    }


    render() {

        return (


            <span>
    <img src={burg}  id={"ham"} onClick={this.open_close_menu}/>
        <span className={"navbar responsive"} ref={this.myRef} >

            <a  href="#">O NAS</a>
            <a  href="#">POKOJE</a>
            <a  href="#">GALERIA</a>
            <a  href="#">CENNIK</a>
            <a  href="#">KONTAKT</a>



    </span>
</span>

        );
    }

    
}

export default Menu;









