import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import axios from 'axios';
import '../App.css';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    //-- axios
    const json = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year',
    );
    setMovies(json.data.data.movies);
    setLoading(false);

    //-- fetch
    // const json = await (
    //   await fetch(
    //     'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year',
    //   )
    // ).json();
    // setMovies(json.data.movies);
    // setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <section className='container'>
      {loading ? (
        <div className='loader'>
          <span className='loader_text'>Loading...</span>
        </div>
      ) : (
        <div className='movies'>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Home;
