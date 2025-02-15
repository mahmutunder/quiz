import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SubjectPage() {
  const { subject, subElement } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
       
        const response = await fetch(`/quiz/data/${subject}.json`);  // Correct path for GitHub Pages
        if (!response.ok) throw new Error("Failed to load JSON");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }

    fetchData();
  }, [subject]);

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
          <button key={el} onClick={() => navigate(`/subject/${subject}/${el}`)}>
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
