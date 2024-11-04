import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Movie.css';

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className='movie'>
      <img src={coverImg} alt={title} />
      <div className='movie_data'>
        <h3 className='movie_title'>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <h5 className='movie_year'>{year}</h5>
        <p className='movie_summary'>
          {summary.length > 70 ? `${summary.slice(0, 70)}...` : summary}
        </p>
        <ul className="genres">
          {genres.map((g) => (
            <li className="genres_renres" key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
