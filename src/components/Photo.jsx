// src/components/Photo.jsx
const Photo = ({ webformatURL, tags }) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}

export default Photo;
