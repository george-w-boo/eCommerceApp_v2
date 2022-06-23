import DirectoryItem from "../DirectoryItem/DirectoryItem";
import './Directory.scss';

import hats from "../../assets/hats.jpg";
import jackets from "../../assets/jackets.jpg";
import sneakers from "../../assets/sneakers.jpg";
import women from "../../assets/women.jpg";
import men from "../../assets/men.jpg";

const categories = [
  {
    id: 1,
    title: "hats",
    imageUrl: hats,
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: jackets,
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: sneakers,
  },
  {
    id: 4,
    title: "women",
    imageUrl: women,
  },
  {
    id: 5,
    title: "men",
    imageUrl: men,
  },
];

const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Directory;