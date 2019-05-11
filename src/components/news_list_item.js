import React from 'react'

const News_list_item = ({item})=>{
		return (
				<div>
					<h3>{item.title}</h3>
					<div>
						{item.feed}
					</div>

				</div>
			)
}


export default News_list_item