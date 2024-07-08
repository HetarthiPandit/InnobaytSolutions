'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function FooterLink(props) {
    const pathname = usePathname();
    const path = pathname.split('/')[1];
    return (
        <>
            {path == 'innobayt-for-startup' ? (<a href={`/${props.linkTo}`} > {props.label}</a>) : (<Link href={`/${props.linkTo}`}>{props.label}</Link>)}
        </>
    )
}

export default FooterLink