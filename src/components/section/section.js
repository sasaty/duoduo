import "./section.css"
import { connect } from "react-redux"
import React, {
	Component
} from 'react';
import { Link } from "react-router-dom";

import $ from 'jquery'

// 库 框架
class Section extends Component {
	constructor(props) {
		super(props)
		this.state = {
			status: false,
			section: [],
			book_id: 0,
			info: null,
			num: 0
		}
	}
	render() {
		return(
			<div id="section">
           		<div className="main">
           			{(() =>{
                        if(this.state.status){
                           	return <div className="left">
                                <div className="sitepath" pbflag="面包屑导航">
                                    当前位置：
                                    <Link to="/">首页</Link>
                                    &gt; <span>{this.state.section[0].class.split("：")[1]}</span> &gt;
                                     <span>{this.state.section[0].name}</span> &gt; <span>全部目录</span>
                                </div>
                            </div>
                        }
                    })()}
           			{       
                           (()=>{
                           	var arr=[]
                           	for (var i=0;i<this.state.num;i++) {
                           		
                           		arr.push(<ul className="list" key={i}>
                           			{((index)=>{
                           				return this.state.section.map((e,i)=>{
                           					if(i>=index*100&&i<(index+1)*100){
                           						return <li className="c2">
                           						<Link className="text-ellips" to={"/content?book_id="+window.location.href.split("?")[1].split("=")[1]+"&section="+i} pbflag="章节区" pbtag="227839425131388" target="_blank">
                                                            <span>{e.title}</span></Link>
                           						</li>
                           					}
                           				})
                           			})(i)}
                           		</ul>);
		           				
                           }
                           	return arr
                           })()
                    }
           		</div>
           </div>
		)
	}

	componentDidMount() {
		var self = this;
		var id = parseInt(window.location.href.split("?")[1].split("=")[1]);
		console.log(id);
		$.ajax({
			url: 'http://localhost:55555/home/section',
			type: "get",
			dataType: "json",
			data: {
				book_id: id
			}
		}).then(function(res) {
			console.log(res)
			self.setState({
				section: res,
				num: Math.ceil(res.length / 100),
				status: true
			});
		})
	}
}

export default connect((state) => {
	return {
		state
	}
}, (dipatch) => {
	return {}
})(Section);