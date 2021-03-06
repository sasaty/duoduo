import "./home.css"
import { connect } from "react-redux"
import React, {
    Component
} from 'react';

import Fenye from './fenye/fenye'
import Tuijian from './tuijian/tuijian'
import Free from './free/free'
import Man from './man/man'
import Woman from './woman/woman'
import Wanben from './wanben/wanben'
import Fenlei from './fenlei/fenlei'
import Guding from  './guding/guding'
import Update from  './update/update'
// 库 框架
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return(
           <div id="all">
               <div className="conten">
                   <Fenye />
                   <Tuijian />
                   <Free/>
                   <Man/>
                   <Woman/>
                   <Wanben/>
                   <Fenlei/>
                   <Update/>
                   <Guding/>
               </div>
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
})(Home);