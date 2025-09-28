// src/components/PhotoList.jsx
import Photo from './Photo';

const PhotoList = () => {
  const photos = [
    { src: "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg", alt: "Photo 1" },
    { src: "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg", alt: "Photo 2" },
    { src: "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg", alt: "Photo 3" },
    { src: "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg", alt: "Photo 4" }
  ];

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos.map((photo, index) => (
          <Photo key={index} src={photo.src} alt={photo.alt} />
        ))}
        {/* Not Found placeholder */}
        <li className="not-found">
          <h3>No Results Found</h3>
          <p>Your search did not return any results. Please try again.</p>
        </li>
      </ul>
    </div>
  );
}

export default PhotoList;
