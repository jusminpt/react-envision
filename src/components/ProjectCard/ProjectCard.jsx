import React from "react";
import Button from "../Button/Button";
import img from "../../assets/Trial.jpg";
import "./ProjectCard.scss";

function ProjectCard({  projTitleInput, paraInput, style }) {
  return (
    //Created to allow individual space for each card in the Projects grid.
    <div className="gridSpacing" style={style}>

      <div className="cardContainer">
            <div className="cardContent">

            <h3>{projTitleInput}</h3>

              <div className="imageContainer">
                <img src={img} alt="" className="projectImage" />
              </div>

              <div className="paraContainer">
                <p>{paraInput}</p>
              </div>

              <div className="btnContainer">
                
              <Button textInput="Learn More" />

              </div>
            </div>
      </div>
    </div>
    
  );
}

export default ProjectCard;














// function ProjectCard({ textInput }) {
//   return (
//     // TODO: Style, rename, add info
//     <div className="cardContainer">
//         <div className="cardContent" style={{ backgroundImage: `url(${img})` }}> 
//             <h3>{textInput}</h3>
//             <div className="btnContainer">
//                 <Button textInput="Visit Page" />
//             </div>
//         </div>
//     </div>
//   );
// }

// export default ProjectCard;
