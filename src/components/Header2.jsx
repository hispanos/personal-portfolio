import React from 'react'
import { NavBar, BtnNavBar, MainMenu, ItemMenu, LogoMenu } from './styled-components/HeaderStyles';

const Header2 = () => {

    const menu = [
        {
            label: "Hola",
            href: "#"
        },
        {
            label: "Proyectos",
            href: "#"
        },
        {
            label: "Testimonio",
            href: "#"
        },
        {
            label: "Contacto",
            href: "#"
        }
    ]

    return ( 
        <>
            <NavBar>
                <MainMenu>
                    <LogoMenu 
                        src = "https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/43287006_1833352526754790_2847444161970307072_n.png?_nc_cat=110&ccb=1-3&_nc_sid=6e5ad9&_nc_ohc=WKCFlRlBdfgAX-VGpg4&_nc_ht=scontent-bog1-1.xx&oh=3b01ed8ca49343ef7201d1fa2ff6eec7&oe=60D41E40"
                    />
                    {
                    menu.map(menu => {
                        return (
                            <ItemMenu 
                                key= {menu.label}
                                label = {menu.label}
                                href = {menu.href}
                            />
                        )
                    })
                    }
                </MainMenu>
                <BtnNavBar 
                    label = "Descargar CV"
                />
            </NavBar>
        </>
     );
}
 
export default Header2;