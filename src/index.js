
import React,{Component} from 'react'
import ReactDom from 'react-dom'
//componets imports
import Header from './components/header'
import NewsList from './components/news_list'
import JSON from './db.json'
class App extends Component{
	state = {
		news:JSON,
		filtered:[]
	}

	getKeywords = (event)=>{
		// console.log(event.target.value)
		let value = event.target.value
		let filtered = this.state.news.filter((item)=>{
			return item.title.indexOf(value) > -1
		})
		this.setState({
			filtered:filtered
		})
		// console.log(filtered)
	}

	render(){
		return <div>
		<Header keywords={this.getKeywords} />
		<NewsList news={this.state.filtered.length === 0 ? this.state.news : this.state.filtered}/>
	</div>
	}
}

ReactDom.render(<App/>,document.querySelector('#root'))