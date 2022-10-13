import './Card.css';
import {TbBath} from 'react-icons/tb'
import {MdOutlineKingBed} from 'react-icons/md'
import {BiArea} from 'react-icons/bi'
import {FaRegHeart} from 'react-icons/fa'
function Card(props) {
   
  function addToFavourites(){
          const newItem = {
              id:props.id,
            img:props.img,
            name:props.name,
            address:props.address,
            price:props.rate,   
            bathroom:props.bathroom,
            bedroom:props.bedroom,
            length:props.length,
            breadth:props.breadth  
 
         }
         
         const updatedFavourite = [...props.favourites, newItem];
         props.setFavourites(updatedFavourite);
         
       
      }
             
  

  return (
<>
<div class="cards">
       <img src={props.img} alt="Avatar" style={{width:"100%"}}/>
     
        <div className="container">
          <div className='item-card'> <h2 className="card-title">
            <strong><span className='price'>${props.rate}</span>
            <span className='month'>/month</span></strong></h2>
            <div className='heart'><FaRegHeart className='heart-icon' onClick={addToFavourites}/>
            </div>
            </div>
          <h3 className="card-subtitle">{props.name}</h3>
          <p className="card-text">{props.address}</p>
          <hr/>
          <div className="flex-container">
              <div className="item1 item-card">
                 <TbBath className='icon'/><span className='val'>
                  {props.bathroom} Bathroom</span></div>
              <div className="item2 item-card">
                <MdOutlineKingBed className='icon'/>
                <span className='val'>{props.bedroom} Bedroom</span></div>
              <div className="item2 item-card">
                <BiArea className='icon'/>
                <span className='val'>{props.length}x{props.breadth} m</span></div>
          </div>
        </div>
      </div>
</>
  );
}

export default Card;
