
const data = [
    {
        image: '/assets/images/exhibition/DataAI/c1.png',
        title: 'RegisteFAQ bot (QnA bot service)',
        desc: 'Easily build FAQ (QnA) bots that can point to any data source of frequently asked questions & responses.'
    },
    {
        image: '/assets/images/exhibition/DataAI/c2.png',
        title: 'Custom Bot Scenarios',
        desc: 'More complex bots to meet custom scenarios such as customer / sales support, technical support, appointment booking etc.'
    },
    {
        image: '/assets/images/exhibition/DataAI/c3.png',
        title: 'Healthcare bot',
        desc: 'Highly scalable AI-powered chatbots customized for healthcare industry meeting compliance requirements & privacy protected to HIPAA standards'
    },
    {
        image: '/assets/images/exhibition/DataAI/c4.png',
        title: 'Cognitive Chatbots',
        desc: 'Conversational bots where your customers can interact using natural language powered by Azure Cognitive Services.'
    }
];


export default function ChatBotDevelopment() {
    return (
        <>
            {data.map((item, key) => (
                <div className='col mb-3 position-relative' key={key}>
                    <div className="text-center p-2">
                        <img
                            src={item.image}
                            className="mb-4 wow fadeInUp" data-wow-delay=".2s"
                            alt='Image' width={50} />
                        <h3 className="h4 mb-4 wow fadeInUp" data-wow-delay=".3s">{item.title}</h3>
                        <p className="wow fadeInUp" data-wow-delay=".6s">{item.desc}</p>
                    </div>
                </div>
            ))}
        </>
    );
};