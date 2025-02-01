import "./App.css";
import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <div className="cards p-4">
      <Card
        tittle="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content"
        buttonText="GO someWhere"
        imageUrl="https://avatars.mds.yandex.net/i?id=7b17c3fdaf60d9f551607764a9a030439d967941bf39164b-12439486-images-thumbs&n=13"
      ></Card>
      <Card tittle="Card title TWO" text="some" buttonText="GO"></Card>
    </div>
  );
};

export default App;
