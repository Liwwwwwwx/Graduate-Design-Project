import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Icon, Row, Col } from 'antd';
// import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';

const {SubMenu} = Menu;
const { Header, Content, Sider } = Layout;

// function handleClick(e){
//   console.log('click',e);
// }

class App extends Component {
  render() { 
    return ( 
      <Layout>
        <Header className="header" style={{height:50,paddingLeft:5,paddingRight:5}}>
            <Icon className="Logo" type="bug" style={{fontSize:40,width:60,height:50,paddingTop:5,color:"#ffffff",float:"left"}}/>
            <div className="Name" style={{
              color:"#ffffff",
              fontSize:20,
              height:50,
              lineHeight:2.5,
              width:255,
              marginLeft:70
            }} >
              小区物业管理系统
            </div>
            <div style={{
              float:"right",
              width:70,
              color:"#ffffff",
              height:50,
              lineHeight:3.5,
              marginTop:-50
              }}>
                杰克船长
              </div>
        </Header>
        <Menu
        onClick={this.handleClick}
        style={{ width: 240 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="home" />
                <span>小区住户信息</span>
              </span>
            }
          >
            <SubMenu key="sub1_1" title="1号楼">
                <Menu.Item key="1_1">一单元</Menu.Item>
                <Menu.Item key="1_2">二单元</Menu.Item>
                <Menu.Item key="1_3">三单元</Menu.Item>
                <Menu.Item key="1_4">四单元</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1_2" title="2号楼">
                <Menu.Item key="2_1">一单元</Menu.Item>
                <Menu.Item key="2_2">二单元</Menu.Item>
                <Menu.Item key="2_3">三单元</Menu.Item>
                <Menu.Item key="2_4">四单元</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1_3" title="3号楼">
                <Menu.Item key="3_1">一单元</Menu.Item>
                <Menu.Item key="3_2">二单元</Menu.Item>
                <Menu.Item key="3_3">三单元</Menu.Item>
                <Menu.Item key="4_4">四单元</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1_4" title="4号楼">
                <Menu.Item key="4_1">一单元</Menu.Item>
                <Menu.Item key="4_2">二单元</Menu.Item>
                <Menu.Item key="4_3">三单元</Menu.Item>
                <Menu.Item key="4_4">四单元</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="appstore" />
                <span>房屋信息</span>
              </span>
            }
          >
            <SubMenu key="sub2_1" title="1号楼">
                <Menu.Item key="1_1">一单元</Menu.Item>
                <Menu.Item key="1_2">二单元</Menu.Item>
                <Menu.Item key="1_3">三单元</Menu.Item>
                <Menu.Item key="1_4">四单元</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2_2" title="2号楼">
                <Menu.Item key="2_1">一单元</Menu.Item>
                <Menu.Item key="2_2">二单元</Menu.Item>
                <Menu.Item key="2_3">三单元</Menu.Item>
                <Menu.Item key="2_4">四单元</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2_3" title="3号楼">
                <Menu.Item key="3_1">一单元</Menu.Item>
                <Menu.Item key="3_2">二单元</Menu.Item>
                <Menu.Item key="3_3">三单元</Menu.Item>
                <Menu.Item key="4_4">四单元</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2_4" title="4号楼">
                <Menu.Item key="4_1">一单元</Menu.Item>
                <Menu.Item key="4_2">二单元</Menu.Item>
                <Menu.Item key="4_3">三单元</Menu.Item>
                <Menu.Item key="4_4">四单元</Menu.Item>
            </SubMenu>
          </SubMenu>
          <Menu.Item key="sub3">
            <Icon type="money-collect" />
            <span>收费</span>
          </Menu.Item>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="user" />
                <span>人事</span>
              </span>
            }
          >
            <Menu.Item key="4_1">管理人员</Menu.Item>
            <Menu.Item key="4_2">保安</Menu.Item>
            <Menu.Item key="4_3">保洁</Menu.Item>
            <Menu.Item key="4_4">居委会</Menu.Item>
          </SubMenu>
          <Menu.Item key="sub5">
            <Icon type="setting" />
            <span>故障管理</span>
          </Menu.Item>
          <Menu.Item key="sub6">
            <Icon type="audit" />
            <span>环境管理</span>
          </Menu.Item>
          <Menu.Item key="sub7">
            <Icon type="usergroup-add" />
            <span>系统用户管理</span>
          </Menu.Item>
                
        </Menu>
      </Layout>
      
    )
  }
}
 
export default App;

