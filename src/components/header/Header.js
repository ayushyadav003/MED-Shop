import React, { useContext } from 'react'
import './header.css'
import SideHeader from './SideHeader';
import { Drawer } from '@material-ui/core';
import { openContext } from '../context/Provider';


export default function Header() {

    const{ open, onOpenClick } = useContext(openContext) 

    return (
            <div className="header">
                <div className="headerItem" onClick={onOpenClick} >
                    <p>Enjoy complimentary carbon neutral shipping on all orders. </p>
                    <p className="ml3">+</p>
                </div>
                <Drawer
                    open={open}
                    onClose={onOpenClick}
                >
                    {<SideHeader />}
                </Drawer>
            </div>
    )
}
