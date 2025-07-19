import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind css test
      </h1>
      <div className="flex space-x-4">
        <Card
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          text="This is a short description of the card content. Tailwind makes styling easy and flexible."
          heading="Card 1"
        />
        <Card
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          text="This is a short description of the card content. Tailwind makes styling easy and flexible."
          heading="Card 2"
        />
      </div>
    </>
  );
}

export default App;
