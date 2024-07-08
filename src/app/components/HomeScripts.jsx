
"use client"
import Script from 'next/script';

function HomeScripts() {
    return (
        <>
            <Script src="/assets/js/bootstrap.min.js" />
            <Script src="/assets/js/wow.min.js" />
            <Script src="/assets/js/custom-wow.js" />
        </>

    )
}

export default HomeScripts