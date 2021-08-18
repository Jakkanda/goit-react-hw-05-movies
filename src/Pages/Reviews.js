export default function Reviews({ reviews }) {
  const reviewsArr = reviews.results;
  return (
    <>
      {reviewsArr.length > 0 ? (
        <ul>
          {reviewsArr.map(review => (
            <li key={review.id}>
              <p>
                <b>Author: {review.author}</b>
              </p>
              <p>'{review.content}'</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
}
