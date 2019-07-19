import './Season.css'
import React from 'react'


const SeasonConfig ={
   summer:{
   	text: "Let's Hit the Bitch ",
   	iconName: 'sun'
   },
   winter:{
   	text: "Burr it's cold",
   	iconName: 'snowflake'
   }
}

const getSeason =(lat,month) =>{
	if(month > 2 && month < 9){
		return lat > 0 ? 'summer' : ' winter'
	}else{
		return lat > 0 ? 'winter' : 'summer'
	}
}

const Season = (props)=> {
	const seasons = getSeason(props.lat, new Date().getMonth())
	const  { text, iconName} = SeasonConfig[seasons]
    return (
    <div className={`Season ${seasons}`}>
    <i className={`icon-left massive ${iconName} icon`}/>
    <h1>{text}</h1>
    <i className={`icon-right massive ${iconName} icon`}/>
    </div>
    )
}

export default Season 