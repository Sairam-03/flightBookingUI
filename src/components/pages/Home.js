import React from 'react';
import './Home.css'
// import image from '../img/background.jpg';
const Home = () => {
return (
	<div className='home'>
	<form >
      <div className='home'>
            {/* <div className='home_form_elements'> */}
            <input type="text" autocomplete="off" value="" 
            placeholder="FROM"></input>
            {/* </div>
            <div> */}
            <input type="text" autocomplete="off" value=""  
            placeholder="TO"></input>
            {/* </div>
            <div> */}
            <input type="date" autocomplete="off" value="" 
            placeholder="Departs On"></input>
            {/* </div> */}
       </div>
       <button  className ='home_button'>Search Flights</button>
      </form>

    
	</div>
);

};

export default Home;
