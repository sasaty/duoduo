
import { connect } from "react-redux"
import React, {
    Component
} from 'react';

import Header from './components/header/header'
import Home from './components/home/home';
import Sort from './components/sort/sort';
import Info from './components/info/info';
import Footer from './components/footer/footer';
import Register from './components/register/register'
import Paihang from './components/paihang/paihang'

import Section from "./components/section/section"
import {Route} from "react-router-dom";
// 库 框架
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return(
            <div id="all">
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path='/index/nansheng' component={Sort}/>
                <Route path='/index/nvsheng' component={Sort}/>
                <Route path='/index/wanben' component={Sort}/>
                <Route path='/index/mianfei' component={Sort}/>
                <Route path='/index/info' component={Info}/>
                <Route path='/index/paihang' component={Paihang}/>
                <Route path="/index/register" component={Register} />
                <Route path="/index/section" component={Section} />
                <Footer/>
            </div>
        )
    }
}

export default connect((state) => {
    return {
        state
    }
}, (dipatch) => {
    return {

    }
})(Index);