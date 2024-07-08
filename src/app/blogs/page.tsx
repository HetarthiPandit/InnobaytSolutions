
'use client'
import React, { use, useEffect, useState } from 'react'
import parser from 'html-react-parser';
import Link from 'next/link';
import Footer from '@/app/components/Footer'
import Script from 'next/script';
import MainNav from '@/app/components/MainNav';
import NavIcon from '@/../public/assets/images/blogs/link.svg';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
// import DateFormatter from '@/app/components/DateFormatter';

export default function Page() {
    const [data, setData] = useState({} as any);
    const [categories, setCategories] = useState([] as any);
    const [category, setCategory] = useState(useSearchParams().get('category'));
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [fetchUrl, setFetchUrl] = useState(
        category !== null && category !== undefined && category !== ''
            ? `${process.env.NEXT_PUBLIC_API_URL}blogs?page=1&pageSize=9&category=${category}`
            : `${process.env.NEXT_PUBLIC_API_URL}blogs?page=1&pageSize=9`
    );
    const [fetchCategoriesUrl, setFetchCategoriesUrl] = useState(`${process.env.NEXT_PUBLIC_API_URL}blogs/categories`);

    console.log(fetchUrl);
    useEffect(() => {
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setData(data.data)
                setLoading(false)
            })
            .catch((err) => {
                setError(true)
                setErrorMessage(err)
                setLoading(false)
            })

        fetch(fetchCategoriesUrl)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.data)
                setLoading(false)
            })
            .catch((err) => {
                setError(true)
                setErrorMessage(err)
                setLoading(false)
            })
    }, [category])

    // useSearchParams when category is clicked
    // useEffect(() => {
    //     const searchParams = useSearchParams()
    //     let category = searchParams.get('category')
    //     let fetchUrl = `${process.env.NEXT_PUBLIC_API_URL}blogs?page=1&pageSize=9`;
    //     if (category !== null && category !== undefined) {
    //         fetchUrl = fetchUrl + `&category=${category}`;
    //     }
    //     fetch(fetchUrl)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setData(data.data)
    //             setLoading(false)
    //         })
    //         .catch((err) => {
    //             setError(true)
    //             setErrorMessage(err)
    //             setLoading(false)
    //         })
    // }, ["category"])

    // if (isLoading) return <p>Loading...</p>
    if (!data) { return <p>No profile data</p> }
    else {
        // console.log(data)
    }

    // if (categories) { console.log(categories) }


    // const searchParams = useSearchParams()
    // let category = searchParams.get('category')
    // let fetchUrl = `${process.env.NEXT_PUBLIC_API_URL}blogs?page=1&pageSize=9`;
    // if (category !== null && category !== undefined) {
    //     fetchUrl = fetchUrl + `&category=${category}`;
    // }
    // const res = await fetch(fetchUrl, { next: { revalidate: 5 } });
    // const cats = await fetch(`${process.env.NEXT_PUBLIC_API_URL}blogs/categories`, { next: { revalidate: 5 } });
    // let categories = await cats.json();
    // categories = categories.data; // ["Apps & Innovation", "Cloud Computing", "Data & Artificial Intelligence (AI)", "Internet of Things (IoT)", "Gaming & Web 3.0", "Cybersecurity", "Events & Updates"]
    // const { data } = await res.json();

    // useEffect(() => {
    //     document.title = 'Blogs | Innovatus'
    // }, [])

    return (
        <>
            {/* <div>{data.title}</div>
            <img src={data.imgpath} alt={data.title} />
            <div>{data.description}</div> */}
            <MainNav />

            <header className='py-5'>
                <div className="container h-100 pt-5">
                    <div className="row h-100">
                        <div className="col-lg-10 d-flex align-items-end text-center mx-auto">
                            <div className="header-content mx-auto">
                                <h1 className="mb-3 text-black fw-800 display-3">Innovate. Build. Defend</h1>
                                <p className='legend text-black col-lg-8 text-center mx-auto'> Explore insightful articles, expert analyses, and in-depth narratives that showcase our commitment to not only building transformative digital solutions but also defending them against the ever-evolving threats of the cyber landscape. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className='py-5 ib__blogs_container'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ul className='list-unstyled ms-3 legend lh-lg'>
                                {/* <li>Apps & Innovation</li>
                                <li>Cloud Computing</li>
                                <li>Data & Artificial Intelligence (AI)</li>
                                <li>Internet of Things (IoT)</li>
                                <li>Gaming & Web 3.0</li>
                                <li>Cybersecurity</li>
                                <li>Events & Updates</li> */}
                                {categories && categories.map((item: any) => (
                                    <li key={item}><a href={`/blogs?category=${item}`} className='text-dark'>{item}</a></li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-md-9">
                            <div className="row">
                                {loading ?
                                    // add skeleton loader here
                                    <p>Loading...</p>

                                    : error ?
                                        <p>{errorMessage}</p>

                                        : data?.rows?.map((item: any) => (
                                            <div className="col-md-4 mb-3" key={item.id}>
                                                <div className="card border-0 rounded-0 h-100">
                                                    <Link href={`/posts/${item?.url}`}>
                                                        <div className="card-body px-0 d-flex flex-column">
                                                            <Image className="card-img-top rounded-0 mb-3" width={300} height={200} quality={100} src={item?.imgpath} alt="..." style={{ objectFit: 'cover', height: 'auto' }} />
                                                            <h5 className="card-title lh-base fw-700 text-black">{item.title}</h5>
                                                            <div>
                                                                <Image src={NavIcon} alt='nav-icon' className='blog_link_icon' />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section>
                <div className="container mt-5 pt-5">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <article className="mt-5">
                                <header className="mb-4">
                                    <a className="text-uppercase text-primary fw-bolder mb-1 small" href="#!">{data.metakeywords}</a>
                                    <h1 className="fw-bolder fs-2 mb-1">{data.title}</h1>

                                     <div className="text-muted fst-italic mb-2">Posted on January 1, 2023 by Start Bootstrap</div> 
                                     <a className="badge bg-secondary text-decoration-none link-light" href="#!">Freebies</a> 
                                </header>
                                <figure className="mb-4"><img className="img-fluid rounded"
                                    src={data.imgpath} alt={data.title} /></figure>
                                <div className="text-muted fst-italic mb-2">Posted on: {data.date} </div>
                                <section className="mb-5">
                                    {parser(data.description)}
                                </section>
                            </article>

                        </div>
                    </div>
                </div>
            </section> */}
            <Footer />

        </>
    )

}
