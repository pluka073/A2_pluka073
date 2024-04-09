 import { Link } from 'react-router-dom';
 import { useState } from 'react'; 
import FacoritesModal from '../Modal/FavoritesModal'
const HeaderMenu = function (props) { 
    const [openModal, setOpenModal] = useState(false);

 return ( 
 <nav> 
<a href="#" onClick={() => setOpenModal(true)}> 
 <button>Favorites</button> 
 </a> 
 {setOpenModal && (
        <div>
          <FacoritesModal open={openModal} onClose={() => setOpenModal(false)} />
        
          </div>
      )}
 <Link to='/about'> 
 <button>About</button> 
 </Link> 
 </nav> 
 ); 
} 

export default HeaderMenu;