import './style.css';
import json from '../../assets/books.json'

import img1 from '../../assets/imgs/books/cavernas_aco.jpg'
import img2 from '../../assets/imgs/books/sol_desvelado.jpg'
import img3 from '../../assets/imgs/books/robos_alvorada.jpg'
import img4 from '../../assets/imgs/books/robos_imperio.jpg'
import img5 from '../../assets/imgs/books/poeira_estrelas.jpg'
import img6 from '../../assets/imgs/books/correntes_espaco.jpg'
import img7 from '../../assets/imgs/books/pedra_ceu.jpg'
import img8 from '../../assets/imgs/books/fundacao_preludio.jpg'
import img9 from '../../assets/imgs/books/fundacao_origem.jpg'
import img10 from '../../assets/imgs/books/fundacao.jpg'
import img11 from '../../assets/imgs/books/fundacao_imperio.jpg'
import img12 from '../../assets/imgs/books/fundacao_segunda.jpg'
import img13 from '../../assets/imgs/books/fundacao_limites.jpg'
import img14 from '../../assets/imgs/books/fundacao_terra.jpg'

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]

function BookCard() {
  const booksMap = json.books.map((e) => {

    return (
      <div className="BookCard-content">
        <div className="BookCard-content-img">
          <img src={imgs[e.codigo_livro - 1]} alt={`Capa do Livro ${e.titulo_livro}`} className='BookCard-cape' />
        </div>
        <div className="BookCard-container-info">

          <div className="BookCard-content-info">
            <h3>{`Título: ${e.titulo_livro} (${e.codigo_livro})`}</h3>

            <h4>{`Autor: ${e.autor}`}</h4>

            <h4>{`Descrição: ${e.descricao}`}</h4>

            <h4>{`Preço: R$ ${parseInt(e.preco_livro)},00`}</h4>
          </div>

          <div className='BookCard-content-button'>
            <button className="BookCard-button">
              Ampliar Imagem
            </button>
          </div>

        </div>
      </div>
    )

    // return (
    //   <div className="BookCard-content">
    //     <div className="BookCard-content-img">
    //       <text>bbbbbb</text>
    //     </div>
    //     <div className="BookCard-content-info">
    //       <text>aaaaa</text>
    //     </div>
    //   </div>
    // )
  })

  return (
    <div className="BookCard-container">
      {booksMap}
    </div>
  );
}

export default BookCard;
