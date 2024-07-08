import React from 'react'
import parser from 'html-react-parser';
import Link from 'next/link';
import Footer from '../../components/Footer'
import Script from 'next/script';
import MainNav from '@/app/components/MainNav';
// import DateFormatter from '@/app/components/DateFormatter';

export default async function page({ params }: { params: { postId: string } }) {
    let postId = params.postId;
    const res = await fetch(`${process.env.API_URL}blogs/${postId}`);
    const { data } = await res.json();
    return (
        <>
            {/* <div>{data.title}</div>
            <img src={data.imgpath} alt={data.title} />
            <div>{data.description}</div> */}
            <MainNav />

            <header className='vh-100 ibmh-500'>
                <div className='ib_blog-header h-100 ' style={{
                    background: `url('${data.imgpath}') no-repeat scroll center center / cover`,
                }}>
                    <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-10 d-flex align-items-end">
                                <div className="header-content mx-auto pb-5">
                                    <span className='btn btn-light btn-sm mb-3'>Web Development</span>
                                    <h1 className="mb-3 text-white fw-800 h1">Advantages of choosing the right Software Development Partner/Company</h1>
                                    <span className='text-white'><i className='fa fa-clock'></i> 10-09-2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section className='py-5'>
                <div className="container mt-4">
                    <div className="row">
                    <main className="col-lg-8 order-lg-2">
                        <div className="mb-4">
                        {parser(data.description)}
                        </div>
                    </main>

                    <aside className="col-lg-4 order-lg-1">
                        <div className="mb-5">
                            <p className="text-muted small">Discover a Universe of Knowledge with Our Advanced Blog Search</p>
                        <input type="search" className="form-control" placeholder="Search for posts" />
                        </div>
                        <div className="mb-4">
                        <h3 className='h5 fw-700'>Popular Articles</h3>
                        <ul className="list-group list-group-flush px-0">
                            <li className="list-group-item d-flex align-items-center px-0 mb-3 border-0">
                                <img
                                    src={data.imgpath}
                                    alt="Article Thumbnail"
                                    className="rounded float-left"
                                    style={{ maxWidth: '25%', maxHeight: 'auto' }}
                                />
                                <div className="ps-3" style={{ maxWidth: '75%' }}>
                                    <a href="#">{data.title}</a>
                                    {/* <p className="text-muted">Date: October 26, 2023</p> */}
                                </div>
                            </li>
                            <li className="list-group-item d-flex align-items-center px-0 mb-3 border-0">
                                <img
                                    src={data.imgpath}
                                    alt="Article Thumbnail"
                                    className="rounded float-left"
                                    style={{ maxWidth: '25%', maxHeight: 'auto' }}
                                />
                                <div className="ps-3" style={{ maxWidth: '75%' }}>
                                    <a href="#">{data.title}</a>
                                    {/* <p className="text-muted">Date: October 26, 2023</p> */}
                                </div>
                            </li>
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
