import React, { Component } from 'react';
import { Layout } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import { Descriptions, Radio } from 'antd';
import 'whatwg-fetch';

class Detail extends Component {
    constructor(props){
        super(props);
        this.state = { 
            dataSource:[],
         };
    };
    componentDidMount(){
        fetch('/userInfo', {
            method: "GET",
            mode: "cors",
            headers:{
                'Content-Type': 'application/json',
                'Accept':'Access-Control-Allow-Origin'
            }, 
        }).then(response => response.json())
            .then(result => {
                this.setState({dataSource:result.data[this.props.match.params.id]})
                console.log(this.state.dataSource);
            }).catch(function (e) {
            console.log("fetch fail");
        });
        // console.log(this.props.match.params.id);
    }
    render() {
        let data = Array.from(this.state.dataSource);
        return ( [
            <Layout>
                <div style={{
                    marginTop:12,
                    borderBottom:'1px solid #bbb',
                    paddingBottom:5,
                    fontSize:14,
                    marginRight:15,
                    color:'#607D8B'}}>
                <Link to="/residents" style={{color:"#607D8B"}}>小区住户信息</Link>>>详细信息
                </div>
                <div style={{border:'1px solid #ccc',marginTop:10,marginRight:15}}>
                         {/* 基本信息 */}
                        
                            <div style={{padding:10}} >
                                <Descriptions bordered title="基本信息" >
                                <Descriptions.Item label="姓名">{this.state.dataSource.user_name}</Descriptions.Item>
                                <Descriptions.Item label="身份证号">{this.state.dataSource.user_idenity}</Descriptions.Item>
                                <Descriptions.Item label="电话号码">{this.state.dataSource.user_phone}</Descriptions.Item>
                                <Descriptions.Item label="地址">{this.state.dataSource.user_address}</Descriptions.Item>
                                {/* <Descriptions.Item label="户型">{this.state.dataSource.user_}</Descriptions.Item> */}
                                <Descriptions.Item label="购房时间">{this.state.dataSource.user_time_purchase}</Descriptions.Item>
                                <Descriptions.Item label="合同">{this.state.dataSource.user_contract}</Descriptions.Item>
                                </Descriptions>
                                <br />
                                <br />
                            </div>                                   
                </div>
            </Layout>
        ]
            
         );
    }
}
 
export default Detail;