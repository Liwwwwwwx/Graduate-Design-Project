import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import Resident from './components/residents/residents';
import Unit from './components/residents/units';
import Charge from './components/charge';
import Cleaning from './components/cleaning';
import Fault from './components/fault';
import House from './components/houses';
import Personnel from './components/personnel/personnel';
import Manager from './components/personnel/manager';
import User from './components/user';
import Security from './components/personnel/security';
import Cleaner from './components/personnel/cleaner';
import Committee from './components/personnel/committee';
import Detail from './components/detail';
import AddR from './components/addResident';

import {Layout, Menu, Breadcrumb, Icon, Row, Col, Slider } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';
import { DEFAULT_ECDH_CURVE } from 'tls';


const {SubMenu} = Menu;
const { Header, Content, Sider } = Layout;

// function handleClick(e){
//   console.log('click',e);
// }

class App extends Component {
  render() { 
    return ( 
      <Layout>
        {/* Header */}
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
        {/* Middle */}
        <Layout>
          {/* 导航栏 */}
          <Sider>
          <Menu
          onClick={this.handleClick}
          style={{height: '100%', borderRight: 0,width:240}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="home" style={{color:"#607D8B"}}/>
                  <span><Link to="/residents" style={{color:"#607D8B"}}>小区住户信息</Link></span>
                </span>
              }
            >
              <SubMenu key="sub1_1" title="1号楼" >
                  <Menu.Item key="1_1"><Link to="/residents">一单元</Link></Menu.Item>
                  <Menu.Item key="1_2"><Link to="/units">二单元</Link></Menu.Item>
                  <Menu.Item key="1_3"><Link to="/residents">三单元</Link></Menu.Item>
                  <Menu.Item key="1_4"><Link to="/residents">四单元</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub1_2" title="2号楼">
                  <Menu.Item key="2_1"><Link to="/residents">一单元</Link></Menu.Item>
                  <Menu.Item key="2_2"><Link to="/residents">二单元</Link></Menu.Item>
                  <Menu.Item key="2_3"><Link to="/residents">三单元</Link></Menu.Item>
                  <Menu.Item key="2_4"><Link to="/residents">四单元</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub1_3" title="3号楼">
                  <Menu.Item key="3_1"><Link to="/residents">一单元</Link></Menu.Item>
                  <Menu.Item key="3_2"><Link to="/residents">二单元</Link></Menu.Item>
                  <Menu.Item key="3_3"><Link to="/residents">三单元</Link></Menu.Item>
                  <Menu.Item key="4_4"><Link to="/residents">四单元</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub1_4" title="4号楼">
                  <Menu.Item key="4_1"><Link to="/residents">一单元</Link></Menu.Item>
                  <Menu.Item key="4_2"><Link to="/residents">二单元</Link></Menu.Item>
                  <Menu.Item key="4_3"><Link to="/residents">三单元</Link></Menu.Item>
                  <Menu.Item key="4_4"><Link to="/residents">四单元</Link></Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" style={{color:"#607D8B"}}/>
                  <span><Link to="/house" style={{color:"#607D8B"}}>房屋信息</Link></span>
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
            <Menu.Item key="sub3" >
              <Icon type="money-collect" style={{color:"#607D8B"}}/>
              <span><Link to="/charge" style={{color:"#607D8B"}}>收费</Link></span>
            </Menu.Item>
            <SubMenu
              key="sub4"
              title={
                <span>
                  <Icon type="user" style={{color:"#607D8B"}}/>
                  <span><Link to="/personnel" style={{color:"#607D8B"}}>人事</Link></span>
                </span>
              }
            >
              <Menu.Item key="4_1"><Link to="/manager">管理人员</Link></Menu.Item>
              <Menu.Item key="4_2"><Link to="/security">保安</Link></Menu.Item>
              <Menu.Item key="4_3"><Link to="/cleaner">保洁</Link></Menu.Item>
              <Menu.Item key="4_4"><Link to="/committee">居委会</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="sub5">
              <Icon type="setting" style={{color:"#607D8B"}}/>
              <span><Link to="/fault" style={{color:"#607D8B"}}>故障管理</Link></span>
            </Menu.Item>
            <Menu.Item key="sub6">
              <Icon type="audit" style={{color:"#607D8B"}}/>
              <span><Link to="/cleaning" style={{color:"#607D8B"}}>环境管理</Link></span>
            </Menu.Item>
            <Menu.Item key="sub7">
              <Icon type="usergroup-add" style={{color:"#607D8B"}}/>
              <span><Link to="/user" style={{color:"#607D8B"}}>系统用户管理</Link></span>
            </Menu.Item>      
          </Menu>      
          </Sider>
          {/* 右边组件路由 */}
          <Content style={{ marginLeft: 60, minHeight: 280}}>
            <Route path="/residents" component={Resident}/>
            <Route path="/units" component={Unit}/>
            <Route path="/house" component={House} />
            <Route path="/charge" component={Charge}/>
            <Route path="/personnel" component={Personnel}/>
            <Route path="/manager" component={Manager}/>
            <Route path="/security" component={Security}/>
            <Route path="/cleaner" component={Cleaner}/>
            <Route path="/committee" component={Committee}/>
            <Route path="/fault" component={Fault}/>
            <Route path="/cleaning" component={Cleaning}/>
            <Route path="/user" component={User}/>
            <Route path="/detail" component={Detail}/>
            <Route path="/addres" component={AddR}/>
            <Route exact path="/" render={()=><Redirect to='/residents' />} />
          </Content>
        </Layout>        
      </Layout>
      
    )
  }
}
 
export default App;

