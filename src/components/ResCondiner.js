import { IMG_URL } from "../utils/componens";
const ResCondiner = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;


  return (
    <div className="res-card">
      <img
        className="res-item-img"
        src={
         IMG_URL +
          cloudinaryImageId
        }
      />

      <h3 className="res-title">{name}</h3>
      <p className="cousine">{cuisines.join(", ")}</p>
      <p className="rating">{avgRating} ⭐</p>
      <p className="tym-taken">{sla.deliveryTime} Min</p>
      <p className="price">{costForTwo}</p>
    </div>
  );
};

export default ResCondiner