
import Card from '@/components/common/Card';
const Home: React.FC = () => {
    const Cards = [
        {title: 'Card 1', content: 'Content 1'},
        {title: 'Card 2', content: 'Content 2'},
        {title: 'Card 3', content: 'Content 3'}
    ];
    return (
        <div className='container mx-auto p-6'>
            <h1 className='text-3xl font-bold mb-6'>Welcome to the Homepage</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {Cards.map((card, index) => (
                    <Card key={index} title={card.title} content={card.content} />
                ))}
            </div>
        </div>
};
export default Home;