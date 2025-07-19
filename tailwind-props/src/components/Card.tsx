function Card(props: any) {
  console.log("props", props);
  return (
    <>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
        <img className="w-full" src={props.src} alt="Card Image" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{props.heading}</h2>
          <p className="text-gray-600 text-sm mb-4">{props.text}</p>
          <button className="text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
