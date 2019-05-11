import React from 'react'
import News_list_item from './news_list_item'
const NewsList = (props)=>{
	const items = props.news.map((item)=>{
		return (
			  <News_list_item key={item.id} item={item} />
			)
	})	
    return (
        <div>{items}</div>
    )
}


export default NewsList