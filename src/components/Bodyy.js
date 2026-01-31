import ResCondiner from "./ResCondiner";
import reslist from "../utils/mockdata";
import { useState , useEffect} from "react";
import Shimmer from "./Shimmer/Shimmer";


let Bodyy = () => {
  let [reslists, setreslists] = useState([]);
  useEffect(()=>{
    fetchdata()
    
  },[])
  let fetchdata=async ()=>{
      let data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      let json = await data.json()
      console.log(json);
      setreslists(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
      }
      if(reslists.length===0){
        return(
          <Shimmer />
        )
      }
  return (
    <div className="Body">
      <div className="search">
        <input className="search-bar" placeholder="Search..." />
        <button
          className="search-btn"
          onClick={() => {
            let filterdreslist = reslists.filter(
              (res) => res.info.avgRating > 4.3
            )
            setreslists(filterdreslist);
          }}
        >
          Search
        </button>
      </div>
      <div className="resContainer">
        {reslists.map((restaurant) => (
          <ResCondiner key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Bodyy;
