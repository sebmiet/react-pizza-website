import React from 'react'
import {
    SidebarContainer, 
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SideBarElements';

function SideBar({isOpen, toggle}) {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon  onClick={toggle}/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizze</SidebarLink>
                <SidebarLink to="/">Desery</SidebarLink>
                <SidebarLink to="/">Pełne Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Złóż zamówienie</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default SideBar
