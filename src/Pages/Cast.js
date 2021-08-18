import logo from '../default-images/image-placeholder.jpg';

export default function Cast({ casts }) {
  const styles = {
    img: {
      width: '100px',
    },
  };
  const castsArr = casts.cast;
  return (
    <>
      <ul>
        {castsArr.map(cast => (
          <li key={cast.cast_id}>
            {cast.profile_path ? (
              <img
                style={styles.img}
                src={`https://image.tmdb.org/t/p/w400${cast.profile_path}`}
                alt={cast.title}
              />
            ) : (
              <img src={logo} alt="Not available" style={styles.img} />
            )}
            {cast.name}
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
