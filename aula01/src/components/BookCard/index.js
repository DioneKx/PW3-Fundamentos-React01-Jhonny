import './style.css';

function BookCard({ title, author, img, description }) {
  return (
    <div className="BookCard-content">
      <h3>{title}</h3>

      <p>{author}</p>

      <img src={img} alt='Capa do livro as cavernas de Aço' className='BookCard-cape' />

      <p>{description}</p>
    </div>
  );
}

export default BookCard;
