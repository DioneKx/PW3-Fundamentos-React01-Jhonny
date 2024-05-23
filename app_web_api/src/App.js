import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { NavBar } from './components/NavBar';
import { Container } from './components/Container';

import { Home } from './pages/Home'
import { Books } from './pages/Books'
import { NewBook } from './pages/NewBook'
import { BookEdit } from './pages/BookEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path='/' element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path='/newbooks' element={<NewBook />} />
              <Route path='/books' element={<Books />} />
              <Route path='/editBook/:id' element={<BookEdit />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
