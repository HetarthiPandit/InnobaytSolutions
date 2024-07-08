
'use client'

import Image from "next/image";
import Link from "next/link"
import { useState } from "react"

export default function SidebarSearch(props) {
    const [query, setQuery] = useState('')
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Pixel GIF code adapted from https://stackoverflow.com/a/33919020/266535
    const keyStr =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

    const triplet = (e1, e2, e3) =>
        keyStr.charAt(e1 >> 2) +
        keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
        keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
        keyStr.charAt(e3 & 63)

    const rgbDataURL = (r, g, b) =>
        `data:image/gif;base64,R0lGODlhAQABAPAA${triplet(0, r, g) + triplet(b, 255, 255)
        }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            setLoading(true)
            const response = await fetch(`${props.url}blogs?page=1&pageSize=2&search=${query}`, { next: { revalidate: 0 } });

            if (response.ok) {
                const fetchedPosts = await response.json();
                // console.log(fetchedPosts.data.rows)
                setPosts(fetchedPosts.data.rows);
                setTimeout(() => {
                    // console.log(posts)
                }, 1000)
                setSearchTerm(query)
                setLoading(false)
            } else {
                // console.error('Failed to fetch posts');
                setLoading(false)
                setPosts([]); // Reset posts to an empty array in case of an error
                throw new Error(`Error! status: ${response.status}`);
            }

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <div className="text-center my-20">
                <form onSubmit={handleSubmit}>
                    <div className="search">
                        <input type="text" className="search-input" placeholder="Search articles" name="" value={query} onChange={(e) => setQuery(e.target.value)} />
                        {/* <input className="text-black border-2 border-black rounded-full px-3 py-2" type="text" placeholder="Search coin..." value={query} onChange={(e) => setQuery(e.target.value)} /> */}
                        <button className="search-icon border-0 bg-white" type="submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
            {loading && <p className="mt-2 text-muted"><small>Loading...</small></p>}

            {posts.length > 0 ? (
                <div className="mb-4 text-left mt-4">
                    <h3 className='h5 fw-700'>Search for: <em>&apos;{searchTerm}&apos;</em></h3>
                    <ul className="list-group list-group-flush px-0">
                        {posts.map((post, index) => (
                            <li key={index} className="list-group-item d-flex align-items-center px-0 mb-3 border-0">
                                <Image
                                    src={post?.imgpath || 'https://via.placeholder.com/150'}
                                    alt={post?.title}
                                    placeholder="blur"
                                    blurDataURL={rgbDataURL(237, 181, 6)}
                                    className="rounded float-left"
                                    style={{
                                        width: '25%',
                                        height: 'auto',
                                        maxHeight: 'auto',
                                        objectFit: 'contain',
                                    }}
                                    width={'100'}
                                    height={'100'}
                                    loading="lazy"
                                // style={{ maxWidth: '25%', maxHeight: 'auto' }}
                                />
                                <div className="ps-3" style={{ maxWidth: '75%' }}>
                                    <Link href={`/posts/${post?.url}`} className='link-dark fw-bold small'>{post?.title}</Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (<p className="mt-2 text-muted"><small>
                {searchTerm && loading === false ? `No results found for '${searchTerm}'` : ''}
            </small></p>)}
        </>
    )
}