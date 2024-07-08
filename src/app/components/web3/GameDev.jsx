const data = [
    {
        step: '1',
        image: '/assets/images/web3/mobile.png',
        title: 'Mobile',
    },
    {
        step: '2',
        image: '/assets/images/web3/vr.png',
        title: 'AR/VR',
    },
    {
        step: '3',
        image: '/assets/images/web3/desktop.png',
        title: 'Desktop',
    },
    {
        step: '4',
        image: '/assets/images/web3/console.png',
        title: 'Console',
    },
    {
        step: '5',
        image: '/assets/images/web3/tablet.png',
        title: 'Tablet',
    }
];


export default function GameDevelopment() {
    return (
        <>
            {data.map((item) => (
                <div className='col mb-3 position-relative' key={item.step}>
                    <div className="text-center p-2">
                        <div className="step_container purple-500 wow fadeInUp" data-wow-delay=".6s">
                            <span className="content ">{item.step}</span>
                        </div>
                        <img
                            src={item.image}
                            className="w-100 mb-4 wow fadeInUp" data-wow-delay=".3s"
                            alt='Image' />
                        <p className='wow fadeInUp' data-wow-delay=".5s">{item.title}</p>
                    </div>
                </div>
            ))}
        </>
    );
};