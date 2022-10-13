import './Listingpage.css';
import Card from './Card';
function Listingpage(props) {
  return (
    <>
    <div className='main-body'>
      <div className='header'>
        <div className='heading'>
            Search properties to rent
        </div>
        <input type='text' 
        className='input'
         placeholder='Search with Search Bar' 
         onChange={e=>props.handleChange(e.target.value)}>
        </input>
        </div>
        <div className='filter'>
        <form method="post" 
        onSubmit={props.filterData}
         className='filter'>
       <div className='item'>
       <label className='label'>
          Location
        </label>
        <br></br>
        <select 
        onChange={e=>props.setLocation(e.target.value)} 
        className="select">
          <option value={"New York"}>
            New York,USA
          </option>
          <option value={"New Jersey"}>
            New Jersey,USA
          </option>
          <option value={"Boston"}>
            Boston,UK
          </option>
        </select>
    
       </div>
       <div className='item'>
        <label className='label'>When</label>
   <br></br>
   <input type="date" 
   onChange={curDate=>props.setDate(curDate.target.value)}
   className="select"></input>
   <option value="" disabled selected hidden>Size</option>    
       </div>
       <div className='item'>
       <label className='label'>
          Price
        </label>
        <br></br>
        <select 
        onChange={newPrice=>props.setPrice(newPrice.target.value)} 
        className="select">
          <option value={"0-500"}>
            $0-$500
          </option>
          <option value={"500-2500"}>
            $500-$2,500
          </option>
          <option value={"2500-4000"}>
            $2,500-$4,000
          </option>
          <option value={"4000-7000"}>
            $4000-$7000
          </option>
        </select>
       </div>
       <div className='item'>
       <label className='label'>
          Property Type
        </label>
        <br></br>
        <select 
        onChange={newProperty=>props.setProperty(newProperty.target.value)} 
        className="select">
          <option>
            Houses
          </option>
          <option>
            Flats
          </option>
          <option>
            Hostels
          </option>
          <option>
            Bungalow
          </option>
        </select>
       </div>
       <div className='item'>
   <button type='submit' 
             onClick={e=>props.filterData}  className='btn' >Search</button>
       </div>
      </form>
    
        </div>
        
        <div className='card-item-container'>

{ props.cardData.length==0?
<h1 className='errormsg'>Sorry! No Property with given Filter Found</h1>:
props.cardData.map((item) => {
  return(
   
    <Card 
    id = {item.no}
    key={item.no}
    img = {item.img}
    rate = {item.price}
    name= {item.name}
    address = {item.address}
    bathroom = {item.bathroom}
    bedroom = {item.bed}
    length = {item.length}
    breadth = {item.breadth}
    setFavourites={props.setFavourites}
    favourites={props.favourites}
/>
)
})}
        </div>
        <div>

<button 
className='btn fav'
onClick={e=>{console.log(props.favourites)}}
>
 Check Favourites
</button>
        </div>
    </div>
    </>
  );
}

export default Listingpage;
