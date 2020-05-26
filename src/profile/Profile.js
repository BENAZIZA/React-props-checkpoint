import React from 'react'
import PropTypes from 'prop-types'

const Profile=(props)=>{
		return(<div style= {{backgroundColor : "white",width:"400px",margin:"auto",height:"62vh",position:"relative",top:"40px"}}>
			<p >Name: {props.fullName}</p>
			<p>Profession: {props.profession}</p>
			<p>Bio: {props.bio}</p>
			{props.children}
			<button style={{display:"block",margin:"auto",width:"100px",height:"4vh",backgroundColor:"DodgerBlue",color:"white",fontFamily:"Arial"}} onClick={props.handleName}>alert</button>

			</div>

			)
}
Profile.defaultProps={
	fullName :"Anonym",
	Profession :"Jobless",
	bio:"",	
}
Profile.propTypes={
	fullName:PropTypes.string,
	handleName:PropTypes.func,
	bio:PropTypes.string,
}
export default Profile;