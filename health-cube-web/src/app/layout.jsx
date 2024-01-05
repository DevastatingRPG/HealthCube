'use client'

import { Inter } from "next/font/google";
// import { Global, css } from '@emotion/react';
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({ children }) {
    return (
        <NextUIProvider>
            <div>{children}</div>
        </NextUIProvider>
    );
}
