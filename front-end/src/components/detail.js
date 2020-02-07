import React, { Component } from 'react';
import { Layout } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
// import Img from '../../public/xinyi.jpg';
import { Descriptions, Radio } from 'antd';

class Detail extends Component {
    state = {  }
    render() { 
        return ( 
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
                    {/* 头像 */}
                    <div>
                        <img src="" alt="NULL"/>
                    </div>
                    <div style={{
                    marginTop:12,
                    borderBottom:'1px solid #bbb',
                    paddingBottom:5,
                    fontSize:14,
                    color:'#333'}}>
                        详细信息
                    </div>
                    {/* 基本信息 */}
                    <div style={{padding:10}}>
                        <br />
                        <br />
                        <Descriptions bordered title="基本信息" size={this.state.size}>
                        <Descriptions.Item label="姓名">XXX</Descriptions.Item>
                        <Descriptions.Item label="身份证号">1234567890112345</Descriptions.Item>
                        <Descriptions.Item label="电话号码">12345678901</Descriptions.Item>
                        <Descriptions.Item label="地址">一单元402</Descriptions.Item>
                        <Descriptions.Item label="户型">三室一厅</Descriptions.Item>
                        <Descriptions.Item label="购房时间">1028-10-09</Descriptions.Item>
                        <Descriptions.Item label="合同">
                            {/* Data disk type: MongoDB
                            <br />
                            Database version: 3.4
                            <br />
                            Package: dds.mongo.mid
                            <br />
                            Storage space: 10 GB
                            <br />
                            Replication factor: 3
                            <br />
                            Region: East China 1<br /> */}
                        </Descriptions.Item>
                        </Descriptions>
                        <br />
                        <br />
                    </div>
                </div>
            </Layout>
         );
    }
}
 
export default Detail;