import React from "react";
import "./Condidate.css";
import img from "./user_profile.jpg";
import search from "./search.png";
import download from "./download.png";
import dots from "./dots.png";
import rightArrow from "./right-arrow.png";
import leftArrow from "./left-arrow.png";

const Condidate = () => {
  return (
    <div className="main_container">
      <div className="right_side">
        <div className="right_mainn">
          <div className="serch">
            <img src={search} alt="" className="search" />
            <input type="text" placeholder="Search Condidate" />
          </div>
          <div className="user_table">
            <table>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>MObile Number</th>
                <th>Email</th>
                <th>Apply on</th>
                <th>Resume</th>
                <th>Action</th>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <div className="table_user">
                    <img src={img} alt="" className="imge" />
                    Peter
                  </div>
                </td>

                <td>9639862137</td>
                <td>abc@gmail.com</td>
                <td>06 may 2024</td>
                <td>
                  <img src={download} alt="" className="imge" />
                </td>
                <td>
                  <img src={dots} alt="" className="imge" />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <div className="table_user">
                    <img src={img} alt="" className="imge" />
                    Peter
                  </div>
                </td>

                <td>9639862137</td>
                <td>abc@gmail.com</td>
                <td>06 may 2024</td>
                <td>
                  <img src={download} alt="" className="imge" />
                </td>
                <td>
                  <img src={dots} alt="" className="imge" />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <div className="table_user">
                    <img src={img} alt="" className="imge" />
                    Peter
                  </div>
                </td>

                <td>9639862137</td>
                <td>abc@gmail.com</td>
                <td>06 may 2024</td>
                <td>
                  <img src={download} alt="" className="imge" />
                </td>
                <td>
                  <img src={dots} alt="" className="imge" />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <div className="table_user">
                    <img src={img} alt="" className="imge" />
                    Peter
                  </div>
                </td>

                <td>9639862137</td>
                <td>abc@gmail.com</td>
                <td>06 may 2024</td>
                <td>
                  <img src={download} alt="" className="imge" />
                </td>
                <td>
                  <img src={dots} alt="" className="imge" />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <div className="table_user">
                    <img src={img} alt="" className="imge" />
                    Peter
                  </div>
                </td>

                <td>9639862137</td>
                <td>abc@gmail.com</td>
                <td>06 may 2024</td>
                <td>
                  <img src={download} alt="" className="imge" />
                </td>
                <td>
                  <img src={dots} alt="" className="imge" />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <div className="table_user">
                    <img src={img} alt="" className="imge" />
                    Peter
                  </div>
                </td>

                <td>9639862137</td>
                <td>abc@gmail.com</td>
                <td>06 may 2024</td>
                <td>
                  <img src={download} alt="" className="imge" />
                </td>
                <td>
                  <img src={dots} alt="" className="imge" />
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  <div className="table_user">
                    <img src={img} alt="" className="imge" />
                    Peter
                  </div>
                </td>

                <td>9639862137</td>
                <td>abc@gmail.com</td>
                <td>06 may 2024</td>
                <td>
                  <img src={download} alt="" className="imge" />
                </td>
                <td>
                  <img src={dots} alt="" className="imge" />
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>
                  <div className="table_user">
                    <img src={img} alt="" className="imge" />
                    Peter
                  </div>
                </td>

                <td>9639862137</td>
                <td>abc@gmail.com</td>
                <td>06 may 2024</td>
                <td>
                  <img src={download} alt="" className="imge" />
                </td>
                <td>
                  <img src={dots} alt="" className="imge" />
                </td>
              </tr>
            </table>
          </div>
          <div className="page">
            <img src={leftArrow} alt="" className="arrow" />
            Page 2 <img src={rightArrow} alt="" className="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Condidate;
