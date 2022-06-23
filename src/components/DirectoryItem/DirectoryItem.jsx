import { useNavigate } from 'react-router-dom';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer
} from './DirectoryItem.styles.jsx';

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const { id, imageUrl, title } = category;

  return (
    <DirectoryItemContainer key={id} onClick={() => navigate(`shop/${title}`)}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem;
