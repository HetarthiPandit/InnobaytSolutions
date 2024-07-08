
const data = [
    {
        title: 'NFT Development',
        image: '/assets/images/exhibition/cloud-consultancy/1.svg',
        description:
            'Frontend, backend and smart contract development for building NFT marketplaces.',
    },
    {
        title: 'Blockchain Development',
        image: '/assets/images/exhibition/cloud-consultancy/2.svg',
        description:
            'We build blockchain solutions on Hyper - ledger, Ethereum, Solana and more!',
    },
    {
        title: 'DeFi & Dapp Development',
        image: '/assets/images/exhibition/cloud-consultancy/3.svg',
        description:
            'Our experienced developers can help build cutting edge Decentralized Apps.',
    },
    {
        title: 'Digital Wallet Integration',
        image: '/assets/images/exhibition/cloud-consultancy/1.svg',
        description:
            'Integrate with popular crypto wallets such as Phantom, Metamask, Coinbase etc.',
    },
    {
        title: 'Digital Twin Development',
        image: '/assets/images/exhibition/cloud-consultancy/2.svg',
        description:
            'Design digital twins of your physical assets to monitor real time data.',
    },
    {
        title: 'Game Development',
        image: '/assets/images/exhibition/cloud-consultancy/3.svg',
        description:
            'Our experienced game developers can help create games beyond your imagination!',
    },
];


export default function Web3Services() {
    return (
        <>
            {data.map((item) => (
                <div className='col p-3' key={item.title}>
                    <div className='d-flex gap-3'>
                        <div>
                            <img
                                src={item.image}
                                width={50}
                                alt='Image'
                                className='wow fadeInUp' data-wow-delay=".3s"
                            />
                        </div>
                        <div className='d-flex flex-column'>
                            <h3 className='h6 fw-bold wow fadeInUp' data-wow-delay=".5s">{item.title}</h3>
                            <p className='wow fadeInUp' data-wow-delay=".6s">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};