import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {_id, title,  image_url, details } = news;
    return (
        <div className="card  bg-base-100 shadow-xl mb-16 border-b-2 p-4">
            <h2 className="card-title">{title}</h2>
    <figure><img className="w-full h-96" src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <p>
            {
                details.length > 200 ? <p>{details.slice(0,200)}
                 <Link to={`/news/${_id}`}
                 className="text-red-500 font-bold">Read More...</Link></p>
                : <p>{details}</p>
            }
          </p>
        </div>
      </div>
    );
};

export default NewsCard;