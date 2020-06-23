import React from 'react';
import logo from './logo.svg';
import './App.css';
import Topbar from "./Components/Topbar"
import Menu from "./Components/Menu"
import Content from "./Components/Content"
import FooterMenu from "./Components/FooterMenu"

function App() {

        const styles = {
            white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            topBarHeight: 40,
            footerMenuHeight: 50
        };
    const menuItems = [
        { icon: `O nas`, text: "Item 1" },
        { icon: `Pokoje`, text: "Item 2" },
        { icon: `Galeria`, text: "Item 3" },
        { icon: `Cennik`, text: "Item 4" },
        { icon: `Kontakt`, text: "Item 5" }
    ];



    return (
            <div
                style={{
                    backgroundColor: styles.black(0.05),
                    minHeight: "100vh",
                    position: "relative"
                }}
            >
                <Topbar styles={styles} />
                <Menu menuItems={menuItems} styles={styles} />
                <Content styles={styles} />
                <FooterMenu menuItems={menuItems} styles={styles} />
            </div>




  );
}

export default App;
