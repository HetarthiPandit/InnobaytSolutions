import Link from "next/link"
// import DateFormatter from "./DateFormatter"


async function getBlogs() {
    const res = await fetch(`${process.env.API_URL}blogs?page=1&pageSize=3`)
    return res.json()
}

export default async function BlogList() {
    try {

        function truncateString(str, maxLength = 60) {
            if (str.length > maxLength) {
                return str.substring(0, maxLength - 3) + '...';
            } else {
                return str;
            }
        }

        // Example usage:
        // const longString = "This is a long string that needs to be truncated.";
        // const truncated = truncateString(longString, 20);
        // console.log(truncated); // Output: "This is a long strin..."


        let blogs = await getBlogs()
        return (
            <>
                {blogs.data.rows.map((blog) => (
                    <div className="col-md-4 mb-5" key={blog.id}>
                        <Link href={`/posts/${blog.url}`}>
                            <div className="card h-100 wow fadeInUp" data-wow-delay=".4s">
                                <img src={blog.imgpath} className="card-img-top" alt={blog.title} />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title" title={blog.title}>{truncateString(blog.title)}</h5>
                                    {/* <p className="card-date"><DateFormatter inputDate={blog.date} /></p> */}
                                    <p className="card-date">{blog.date} </p>
                                    <p className="card-text pb-3">{truncateString(blog.metadescription, 150)}</p>
                                    <div className="mt-auto">
                                        <span className="main-btn"><i className="fa-solid fa-arrow-right"></i></span>
                                    </div>
                                </div>
                            </div>
                        </Link>
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