import "./App.css";

const Box = (props) => {
  return <div className="box">Box will be here</div>;
};

function App() {
  return (
    <div className="App">
      <div>
        <h2>{props.name}</h2>
        <p>Title:{props.title}</p>
        <p>Age: {props.age}</p>
      </div>
      <header>
        <h1>Logo</h1>
      </header>
      <main>
        <Box name="Dawood" title="CEO" age="29" />
        <Box name="Katie" title="Desiner" age="39" />
        <Box name="Ibra" title="SEO" age="29" />
      </main>
      <footer>
        <p>
          <small>Copyrights</small>
        </p>
      </footer>
    </div>
  );
}

export default App;
