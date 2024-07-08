import Link from "next/link"

async function getBlogs() {
    const res = await fetch(`${process.env.API_URL}blogs?page=1&pageSize=3`, { next: { revalidate: 0 } })
    return res.json()
}

export default async function BlogList() {
    try {

        let blogs = await getBlogs()
        return (
            <>
                {blogs.data.rows.map((blog) => (
                    <div className="col-md-4 mb-5 d-flex" key={blog.id}>
                        <a href={`/posts/${blog.url}`}>
                            <div className="card h-100 border-0 wow fadeInUp shadow" data-wow-delay=".4s">
                                <img src={blog.imgpath} className="card-img-top" alt={blog.title} />
                                <div className="card-body p-4">
                                    <h5 className="card-title lh-base">{blog.title}</h5>
                                    <p className="card-date mb-3">{blog.date}</p>
                                    <p className="card-text">{blog.metadescription}</p>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </>
        )

    } catch (err) {
        return (
            <>
                <div className="col-md-12">
                    <div className="card h-100 wow fadeInUp" data-wow-delay=".4s">
                        <div className="card-body">
                            <h5 className="card-title">Error</h5>
                            <p className="card-text">Error loading blog posts</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}