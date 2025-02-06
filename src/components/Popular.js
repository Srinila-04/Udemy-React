//importing images

import one from '../assets/c1.jpg'
import two from '../assets/c2.jpg'
import three from '../assets/c3.jpg'
import four from '../assets/c4.jpg'

//component 6 - POPULAR SECTION
function Popular()
{
  return(
    <div className="Popular">
        <h1 className="Popular__title">Most Popular</h1>
        <p className="Popular__subtitle">Pick the best Fit</p>
        <div className="Popular__container">
            <div className="course-card">
                <img src={one} alt="img1"></img>
                <h3>2023 Python Data Visualization MasterClass</h3>
                <p>Col Steele</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>599 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={two} alt="img2"></img>
                <h3>Web Development Bootcamp <br/> 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>799 <del>1799</del></p>
            </div>

            <div className="course-card">
                <img src={three} alt="img3"></img>
                <h3>Master UI & UXDesigning with Figma</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>499 <del>899</del></p>
            </div>

            <div className="course-card">
                <img src={four} alt="img4"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>999 <del>3599</del></p>
            </div>

            <div className="course-card">
                <img src={two} alt="img2"></img>
                <h3>Web Development Bootcamp <br/> 2023</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>799 <del>1799</del></p>
            </div>


            <div className="course-card">
                <img src={four} alt="img4"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐⭐</p>
                <p>999 <del>3599</del></p>
            </div>

            <div className="course-card">
                <img src={one} alt="img1"></img>
                <h3>2023 Python Data Visualization MasterClass</h3>
                <p>Col Steele</p>
                <p>4.7 ⭐⭐⭐⭐</p>
                <p>599 <del>1999</del></p>
            </div>

            <div className="course-card">
                <img src={three} alt="img3"></img>
                <h3>Master UI & UXDesigning with Figma</h3>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>499 <del>899</del></p>
            </div>
        </div>
    </div>
  )
}
export default Popular