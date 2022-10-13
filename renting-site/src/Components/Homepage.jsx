import './Homepage.css';
import { useState } from 'react';
import data from './data';
import Listingpage from './Landingpage/Listingpage';


function Homepage() {
  const [Location,setLocation] = useState("New York");
  const [date,setDate] = useState("01/01/2022");
  const [price,setPrice] = useState("0-500");
  const [property,setProperty] = useState("Houses");
  const [searchValue,setSearchValue] = useState("");
  const [filteredCardData, setFilteredCard] = useState(data);
  const [favourites,setFavourites] = useState([]);
 

  function filterData(e){
    e.preventDefault();
    const filteredData = data.filter((item)=>{
      if(item.city === Location 
        && item.type == property 
        && item.price >= parseInt(price.split('-')[0]) 
        && item.price <= parseInt(price.split('-')[1])){
        if(parseInt(date.split('-')[0]) > parseInt(item.date.split('/')[2])){
          return item;
        }
        else if( parseInt(date.split('-')[0]) == parseInt(item.date.split('/')[2])){
              if(parseInt(date.split('-')[1]) > parseInt(item.date.split('/')[1])){
                return item;
              }
              else if(parseInt(date.split('-')[1]) == parseInt(item.date.split('/')[1])){
                   if(parseInt(date.split('-')[2]) > parseInt(item.date.split('/')[0])){
                    return item;
                   }
              }
        }
      }
    })    
    setFilteredCard(filteredData);
  }

  function handleChange(e){
    setSearchValue(e);
      if(searchValue===""){
        setFilteredCard(data);
        return ;
      }
      const filterBySearch = data.filter((item)=>{
    
        if(item.name.toLowerCase().includes(searchValue.toLowerCase()) || 
        item.address.toLowerCase().includes(searchValue.toLowerCase()) || 
        item.city.toLowerCase().includes(searchValue.toLowerCase()) || 
        item.type.toLowerCase().includes(searchValue.toLowerCase())){
          return item;
        }
    })
    setFilteredCard(filterBySearch);
    
  }

  return (
    
    <Listingpage 
    filterData={filterData}
    setLocation={setLocation}
    setDate={setDate}
    setPrice={setPrice}
    setProperty={setProperty}
    cardData={filteredCardData}
    handleChange={handleChange}
    setFavourites={setFavourites}
    favourites={favourites}
    
    />

  
     );
}

export default Homepage;
