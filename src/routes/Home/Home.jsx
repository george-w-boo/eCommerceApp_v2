import hats from "../../assets/hats.jpg";
import jackets from "../../assets/jackets.jpg";
import sneakers from "../../assets/sneakers.jpg";
import women from "../../assets/women.jpg";
import men from "../../assets/men.jpg";

import Directory from "../../components/Directory/Directory";

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

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
