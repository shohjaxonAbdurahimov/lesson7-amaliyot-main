import { Link } from "react-router-dom"

function Galerey({ data: { results } }) {
  return <div className="galerey">
    <ul>
      {results.slice(0, 10).map((image) => {
        return (
          <li key={image.id}>
            <Link to="/image">
              <img className="m-auto rounded-3xl "  src={image.urls.regular} alt="rasm" />
            </Link>
            <div className=" download flex justify-center   ">
            <button className="btn mt-3 bg-slate-400 text-white ">Download</button>
<div className="likes text-3xl mt-3">Likes :  </div>
             </div>
          </li>
        )
      })}
    </ul>
  </div>
}

export default Galerey