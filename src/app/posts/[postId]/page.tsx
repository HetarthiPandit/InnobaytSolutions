import React from 'react'
import parser from 'html-react-parser';
import Link from 'next/link';
import Footer from '../../components/Footer'
import Script from 'next/script';
import MainNav from '@/app/components/MainNav';
import SidebarSearch from '@/app/components/SidebarSearch';
// import DateFormatter from '@/app/components/DateFormatter';


export default async function page({ params }: { params: { postId: string } }) {

    let postId = params.postId;
    const res = await fetch(`${process.env.API_URL}blogs/${postId}`, { next: { revalidate: 0 } });
    const { data } = await res.json();

    async function getBlogs() {
        try {
            const res = await fetch(`${process.env.API_URL}blogs?page=1&pageSize=10`, { next: { revalidate: 0 } })
            return res.json()

        } catch (error) {
        }
    }

    const popularPosts = await getBlogs();


    return (
        <>
            {/* <div>{data.title}</div>
            <img src={data.imgpath} alt={data.title} />
            <div>{data.description}</div> */}
            <MainNav />

            <header className='vh-100 ibmh-500 position-relative'>
                {/* <div className='aaaa'></div> */}
                <div className='ib_blog-header position-relative h-100 ' style={{
                    background: `url('${data?.imgpath}') no-repeat scroll center center / cover`,
                }}>
                    <div className="overlay"></div>
                    <div className="container h-100 position-relative z_index_2">
                        <div className="row h-100">
                            <div className="col-lg-10 d-flex align-items-end">
                                <div className="header-content mx-auto pb-5">
                                    <span className='btn btn-light btn-sm mb-3'>{data?.metakeywords}</span>
                                    <h1 className="mb-3 text-white fw-800 h1">{data?.title}</h1>
                                    <span className='text-white'><i className='fa fa-clock'></i> {data?.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className='py-5'>
                <div className="container mt-4">
                    <div className="row g-5">
                        <main className="col-lg-8 order-lg-2">
                            <h3 className='fw-bold mb-3'>
                                {data?.title}
                            </h3>
                            <div className="mb-4">
                                {parser(data?.description)}
                            </div>
                        </main>

                        <aside className="col-lg-4 order-lg-1">
                            <div className="mb-5">
                                <p className="text-muted small">Discover a Universe of Knowledge with Our Advanced Blog Search</p>
                                {/* <input type="search" className="form-control" placeholder="Search for posts" /> */}
                                {/* <div className="search">
                                    <input type="text" className="search-input" placeholder="Search articles" name="" />
                                    <a href="#" className="search-icon"> <i className="fa fa-search"></i> </a>
                                </div> */}

                                <SidebarSearch url={process.env.API_URL} />
                            </div>
                            <div className="mb-4">
                                <h3 className='h5 fw-700'>Popular Articles</h3>
                                <ul className="list-group list-group-flush px-0">

                                    {popularPosts.data.rows.map((blog: any) => (
                                        <li key={blog.id} className="list-group-item d-flex align-items-center px-0 mb-3 border-0">
                                            <img
                                                src={blog?.imgpath || 'https://via.placeholder.com/150'}
                                                alt="Article Thumbnail"
                                                className="rounded float-left"
                                                style={{ maxWidth: '25%', maxHeight: 'auto' }}
                                            />
                                            <div className="ps-3" style={{ maxWidth: '75%' }}>
                                                <a href={`/posts/${blog.url}`} className='link-dark fw-bold small'>{blog.title}</a>
                                            </div>
                                        </li>

                                        // <div className="col-md-4 mb-5 d-flex" key={blog.id}>
                                        //     <a href={`/posts/${blog.id}`}>
                                        //         <div className="card h-100 border-0 wow fadeInUp shadow" data-wow-delay=".4s">
                                        //             <img src={blog.imgpath} className="card-img-top" alt={blog.title} />
                                        //             <div className="card-body p-4">
                                        //                 <h5 className="card-title lh-base">{blog.title}</h5>
                                        //                 <p className="card-date mb-3">{blog.date}</p>
                                        //                 <p className="card-text">{blog.metadescription}</p>
                                        //             </div>
                                        //         </div>
                                        //     </a>
                                        // </div>
                                    ))}


                                </ul>
                                {/* <div className="card">
                            <div className="card-body">
                            <a href="#">Recent post 1</a>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                            <a href="#">Recent post 2</a>
                            </div>
                        </div>
                        <div className="card mt-3">
                            <div className="card-body">
                            <a href="#">Recent post 3</a>
                            </div>
                        </div> */}
                            </div>
                        </aside>
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

