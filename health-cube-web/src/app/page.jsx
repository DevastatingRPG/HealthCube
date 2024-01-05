// 'use client'

import React from 'react'; 
import Image from 'next/image'
import RootLayout from './layout'
import {Button, ButtonGroup} from "@nextui-org/react";

export default function Home() {
    return (
        <RootLayout>
            <Button color='primary'>Hello</Button>
            Hello there
        </RootLayout>
    )
}
