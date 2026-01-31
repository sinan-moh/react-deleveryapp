import "../Shimmer/shimmer.css"
const Shimmer = () => {
  return (
    <div>
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
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>

            <div className="shimmer-content">
              <div className="shimmer-title"></div>
              <div className="shimmer-subtitle"></div>
              <div className="shimmer-meta"></div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
};

export default Shimmer;
