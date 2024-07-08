

const data = [
    {
        title: 'Cloud Migration Services',
        image: '/assets/images/exhibition/cloud-consultancy/1.svg',
        description:
            'Are you looking to migrate your workloads from one cloud to another? Or planning to move your on - prem apps and services to the cloud for better performance, more reliability and scalability ? Reach out to us today!',
    },
    {
        title: 'Cloud Security Consultation',
        image: '/assets/images/exhibition/cloud-consultancy/2.svg',
        description:
            'While cloud service providers manage cloud security 24x7 for your workloads, you are still responsible for configuring your solution on the cloud for high security without which your services remain highly vulnerable to attacks.',
    },
    {
        title: 'Cloud Cost Optimization',
        image: '/assets/images/exhibition/cloud-consultancy/3.svg',
        description:
            'Although cloud is meant to be cost effective, if not managed well cloud costs can overshoot your estimated numbers drastically.It is imperative to design your cloud architecture for optimal consumption while hosting your critical workloads.',
    },
    {
        title: 'Azure DevOps Consultation',
        image: '/assets/images/exhibition/cloud-consultancy/1.svg',
        description:
            'From task management on Kanban board to complete automation of your CI / CD pipelines – our Azure DevOps Certified Engineers can help design your DevSecOps environment in the most secure & scalable fashion.',
    },
    {
        title: 'Architecture Review Services',
        image: '/assets/images/exhibition/cloud-consultancy/2.svg',
        description:
            'The success of your cloud hosted solution lies in how it is architected for high scalability, resilience, reliability, and security.Reach out to us to conduct well architected framework review for your Azure and AWS solutions.',
    },
    {
        title: 'Digital Transformation Consultancy',
        image: '/assets/images/exhibition/cloud-consultancy/3.svg',
        description:
            'Don`t know where to start your cloud transformation journey? Reach out to us for guidance & support on designing your cloud roadmap and our experts will be by your side to support you through each step of the journey!',
    },
];

const Services = () => {
    return (
        <>
            {data.map((item) => (
                <div className='col p-3' key={item.title}>
                    <div className='d-flex gap-3'>
                        <div className="wow fadeInUp" data-wow-delay=".2s">
                            <img
                                src={item.image}
                                width={50}
                                alt='Image'
                            />
                        </div>
                        <div className='d-flex flex-column'>
                            <h3 className='h6 fw-bold wow fadeInUp' data-wow-delay=".3s">{item.title}</h3>
                            <p className="wow fadeInUp" data-wow-delay=".4s">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Services;
