import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { articles } from "../data";
import "./article.css";
import { faLungsVirus, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import Icontow from "../Components/icon-2/Icontow";

function Article() {
  return (
    <div className="Article">
      <Icontow/>
      <div className="container mx-auto">
        <h1 className="title">مقالات طبية - Medical Articles <FontAwesomeIcon icon={faStethoscope} /></h1>
        <ul className="container-article">
          {articles.map((data) => (
            <li key={data.id}>
              <h1> {data.id} - {data.title} <FontAwesomeIcon icon={faLungsVirus} /></h1>
              <p>{data.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Article;
