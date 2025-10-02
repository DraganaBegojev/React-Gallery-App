// src/components/PhotoList.jsx
import Photo from './Photo';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const PhotoList = ({ photos, fetchData, topic }) => {
  const { query } = useParams();

  useEffect(() => {
    if (query) {
      fetchData(query, 'search');
    }
  }, [query, fetchData]);

  return (
    <div className="photo-container">
      <h2>{query ? `Results for "${query}"` : topic}</h2>
      <ul>
        {photos.length > 0 ? (
          photos.map((photo) => (
            <Photo key={photo.id} webformatURL={photo.webformatURL} tags={photo.tags} />
          ))
        ) : (
          <li className="not-found">
            <h3>No Results Found</h3>
            <p>Your search did not return any results. Please try again.</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default PhotoList;
