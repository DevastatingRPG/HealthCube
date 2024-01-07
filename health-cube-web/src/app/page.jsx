// 'use client'

import React from 'react'; 
import Image from 'next/image'
import RootLayout from './layout'
import {Button, ButtonGroup} from "@nextui-org/react";
import NavBar from './navbar';

export default function Home() {
    return (
        <NavBar>
            <Button color='primary'>Hello</Button>
            Hello there
        </NavBar>
    )
}
