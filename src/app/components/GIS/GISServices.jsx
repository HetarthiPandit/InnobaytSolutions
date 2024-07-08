
const data = [
    {
        step: '1',
        image: '/assets/images/gis/data-collection.png',
        title: 'Data Collection',
    },
    {
        step: '2',
        image: '/assets/images/gis/gis-web-app.png',
        title: 'GIS Web & Mobile App Development',
    },
    {
        step: '3',
        image: '/assets/images/gis/remote-sensing.png',
        title: 'Remote Sensing',
    },
    {
        step: '4',
        image: '/assets/images/gis/image-processing.png',
        title: 'Image Processing',
    },
    {
        step: '5',
        image: '/assets/images/gis/indoor-outdoor.png',
        title: 'Indoor & Outdoor Navigation',
    },
    {
        step: '6',
        image: '/assets/images/gis/ai-ml-iot.png',
        title: 'AI, ML & IoT Development',
    }
];


export default function GISServices() {
    return (
        <>
            {data.map((item) => (
                <div className='col mb-3 position-relative' key={item.step}>
                    <div className="text-center p-2">
                        <div className="step_container purple-500  wow fadeInUp" data-wow-delay=".3s">
                            <span className="content">{item.step}</span>
                        </div>
                        <img
                            src={item.image}
                            className="w-100 mb-4  wow fadeInUp" data-wow-delay=".3s"
                            alt='Image' />
                        <p className='wow fadeInUp' data-wow-delay=".4s">{item.title}</p>
                    </div>
                </div>
            ))}
        </>
    );
};