import { extensions } from "./data/extensions";

function App() {
  return (
    <div>
      {extensions.map((extension) => (
        <div key={extension.name}>
          <img src={extension.logo} alt="" />
          <h2>{extension.name}</h2>
          <p>{extension.description}</p>
          <p>Status: {extension.isActive ? "Active" : "Inactive"}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
