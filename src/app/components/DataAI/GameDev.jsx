
const data = [
    {
        step: '1',
        image: '/assets/images/exhibition/web3/gameDev1.png',
        title: 'Register your Spend. In account.',
    },
    {
        step: '2',
        image: '/assets/images/exhibition/web3/gameDev2.png',
        title: 'Fill in the list of your business expenses.',
    },
    {
        step: '3',
        image: '/assets/images/exhibition/web3/gameDev3.png',
        title: 'Done, let’s continue the work.',
    },
    {
        step: '4',
        image: '/assets/images/exhibition/web3/gameDev3.png',
        title: 'Register your Spend. In account.',
    },
    {
        step: '5',
        image: '/assets/images/exhibition/web3/gameDev3.png',
        title: 'Fill in the list of your business expenses.',
    },
    {
        step: '6',
        image: '/assets/images/exhibition/web3/gameDev3.png',
        title: 'Done, let’s continue the work.',
    }
];


export default function GameDevelopment() {
    return (
        <>
            {data.map((item) => (
                <div className='col mb-3 position-relative' key={item.step}>
                    <div className="text-center p-2">
                        <div className="step_container purple-500">
                            <span className="content">{item.step}</span>
                        </div>
                        <img
                            src={item.image}
                            className="w-100 mb-4"
                            alt='Image' />
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </>
    );
};