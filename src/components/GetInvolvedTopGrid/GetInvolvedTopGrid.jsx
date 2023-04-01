import React from "react";
import './GetInvolvedTopGrid.scss'
import Button from "../Button/Button";

import housesImg from "../../assets/img/image 8.png";

function TopGrid ({}) {


  return(

    <div className="image-container">
        <div className="title">Empower communities with your donation - help us improve, educate and help those in need!</div>
        
        <img className="left-img"  src={ housesImg } alt="Left Image" />
        <img className="right-img" src={ housesImg } alt="Right Image" />
        {/* <button className="btn-container">fasfasfasfasf</button> */}

        <div className="btn-container">
          
          <Button
             textInput="Donate"
             styleBtn="secondary"
             urlBtn="/whatwedo"
          />

        </div>
        

    </div>

  )




//   return (
//     <div className="image-grid-container">

// {/* <h2 className="title">Empower communities with your donation - help us improve, educate and help those in need!</h2> */}
//       <div className="image-grid-left">

//         <div className="img-container">
//           <img src={housesImg} alt="" />
//           <div className="btn-container">

//           <h2 className="test">Empower communities with your donation - help us improve, educate and help those in need</h2>

//             <Button
//               textInput="Donate"
//               styleBtn="secondary"
//               urlBtn="/whatwedo"
//             />

//           </div>
          

//         </div>
//       </div>
//       <div className="image-grid-right">
        
//         <img src={housesImg} alt="" />
//       </div>
//     </div>
//   );
    
  
}















// function TopGrid ({}) {

//     return (
//     <div class="grid-container">
//         <div class="title">Empower communities with your donation - help us improve, educate and help those in need!</div>

//         <div class="grid-item">
//             <img className="img-style image-02" src={housesImg} alt=""  />
//         </div>

//         <div class="grid-item">

//           <div className="btn-style">
//                   <Button
//                         textInput="Donate"
//                         styleBtn="secondary"
//                         urlBtn="/whatwedo"
//                       />
//           </div>

//           <img className="img-style image-01" src={housesImg} alt=""   />
//         </div>

//   </div>
//     );
// }

export default TopGrid