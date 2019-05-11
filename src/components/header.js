import React from 'react'

const Header = (props)=>{
	return (
		
		<header>
			<div className='logo'
			onClick={()=>{console.log("I was clicked")}}>Logo</div>
			<input type="text"
				onChange ={props.keywords}
			/>
		</header>
	)
	
}


export default Header;