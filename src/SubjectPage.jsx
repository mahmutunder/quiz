import { useParams, useNavigate } from "react-router-dom";
import htmlData from "./data/html.json";
import jsData from "./data/js.json";
import reactData from "./data/react.json";

const subjectData = {
  html: htmlData,
  js: jsData,
  react: reactData,
};

function SubjectPage() {
  const { subject, subElement } = useParams();
  const navigate = useNavigate();
  const data = subjectData[subject];

  return (
    <div className="container">
      {/* Column 1: Subjects */}
      <div className="subjects">
        {["html", "js", "react"].map((sub) => (
          <button key={sub} onClick={() => navigate(`/subject/${sub}`)}>
            {sub.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Column 2: Sub-Elements */}
      <div className="sub-elements">
        {data?.subElements?.map((el) => (
          <button
            key={el}
            onClick={() => navigate(`/subject/${subject}/${el}`)}
          >
            {el}
          </button>
        ))}
      </div>

      {/* Column 3: Explanation */}
      <div className="explanation">
        {subElement ? (
          <p>{data?.explanations?.[subElement]}</p>
        ) : (
          <p>Select an element to see details</p>
        )}
      </div>
    </div>
  );
}

export default SubjectPage;
