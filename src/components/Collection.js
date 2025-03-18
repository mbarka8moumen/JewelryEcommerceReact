import { Link } from 'react-scroll';


import bijoux1 from '../assets/T1.jpg'
import bijoux2 from '../assets/T2.jpg'
import bijoux3 from '../assets/T3.jpg'
import bijoux4 from '../assets/T4.jpg'
// import collection_img from '../assets/DIAMAND COLLECTION.jpg'
import Annonce_video from '../Video/VIDEO5.mp4'
// import Collection_annonce from '../Video/COLLECTION.mp4'



import '../styles/Collection.css';


function Collection(){
    return(
      
  <>
  <div className='Barre'>
  <div className='collection_img1'>
  <img src={bijoux1} alt="bijoux1" className="circular-img" />
  <img src={bijoux2} alt="bijoux2" className="circular-img" />
  </div>
  <div className='Collection'>
    <p>DIAMAND COLLECTION</p>
    <h2>The Ultimate Sparkle</h2>
  </div>
  <div className='collection_img2'>
  <img src={bijoux3} alt="bijoux3" className="circular-img" />
  <img src={bijoux4} alt="bijoux4" className="circular-img" C />
  </div>
  {/* <video src={Collection_annonce} className='collection_annonce' type="video/mp4" autoPlay 
    loop 
    muted 
    playsInline/> */}

  <a href='#card-section'>
  <button className='btnCollection'>Get it</button></a>
  <Link to="card-section" smooth={true} duration={500}>
  <button className="btnCollection">Get it</button>
</Link>
  </div>
  
  <div className='Annoce_video'>
   
    <video src={Annonce_video} type="video/mp4" autoPlay 
    loop 
    muted 
    playsInline/>
  </div>

  </>
    );
}
export default Collection;