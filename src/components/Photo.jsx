// src/components/Photo.jsx
const Photo = ({ photo }) => {
  return (
    <li>
      <img src={photo.webformatURL} alt={photo.tags} />
    </li>
  );
}

export default Photo;
