import { useNavigate } from 'react-router-dom';
import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { id, imageUrl, title } = category;

  return (
    <div className="directory-item-container" key={id} onClick={() => navigate(`shop/${title}`)}>
      <div
        className="background-image"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," +
            `url(${imageUrl})`,
        }}
      ></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem;