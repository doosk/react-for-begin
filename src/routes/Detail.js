import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>Detail</h1>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
      )}
    </div>
  );
}
