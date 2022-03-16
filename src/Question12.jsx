export default function Question12() {
  const list = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  return (
    <div className="App">
      <div>
        {list.map((data) => (
          <li>
            
            {data} <button>Like</button>{" "}
          </li>
        ))}
      </div>
    </div>
  );
}
