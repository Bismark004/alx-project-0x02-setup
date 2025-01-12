
import Header from "../components/layout/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to the Home Page</h1>
      </div>
    </div>
  );
};

export default Home;
