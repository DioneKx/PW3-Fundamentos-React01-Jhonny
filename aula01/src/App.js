import './App.css';
// import bookCapeCav from './assets/imgs/books/cavernas_aco.jpg';
// import bookCapeRobo from './assets/imgs/books/robos_alvorada.jpg';
// import bookCapeSol from './assets/imgs/books/sol_desvelado.jpg';
import BookCard from './components/BookCard/index'

// const desc = "As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais."

function App() {
  return (
    <div className="App">
      <BookCard/>
    </div>
  );
}

export default App;
