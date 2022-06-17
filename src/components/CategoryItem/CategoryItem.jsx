import './CategoryItem.scss';

const CategoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;

  return (
    <div className="category-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))," +
            `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem;