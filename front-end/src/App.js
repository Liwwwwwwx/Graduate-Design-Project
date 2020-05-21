import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import Resident from './components/residents/residents';
import Charge from './components/charge/charge';
import Fault from './components/fault/fault';
import House from './components/houses/houses';
import Personnel from './components/personnels/personnel';
import Complaint from './components/complaint/complaint';
import Detail from './components/residents/detail';
import AddR from './components/residents/addResident';
import AddCH from './components/charge/addcharge';
import AddP from './components/personnels/addpersonnel';
import AddH from './components/houses/addhouses';
import ModRe from './components/residents/modifyResi';
import ModCh from './components/charge/modifyCha';
import ModFa from './components/fault/modifyFa';
import ModCo from './components/complaint/modifyCo';
import ModHo from './components/houses/modifyHo';
import ModPe from './components/personnels/modifyPe';


import {Layout, Menu, Icon, Row, Col, Slider } from 'antd';
import {HashRouter as Router,Route,Link,NavLink,Redirect} from 'react-router-dom';




const {SubMenu} = Menu;
const { Header, Content, Sider } = Layout;



class App extends Component {
  render() { 
    return ( 
      <Layout>
        {/* Header */}
        <Header className="header" style={{height:50,paddingLeft:5,paddingRight:5}}>
            {/* <Icon className="Logo" type="bug" style={{fontSize:35,width:60,height:50,paddingTop:5,color:"#ffffff",float:"left"}}/> */}
            <div className="Name" style={{
              color:"#ffffff",
              fontSize:18,
              height:50,
              lineHeight:2.8,
              width:255,
              marginLeft:10
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
                欢迎使用
              </div>
        </Header>
        {/* Middle */}
        <Layout>
          {/* 导航栏 */}
          <Sider>
          <Menu
          onClick={this.handleClick}
          style={{height: '100%', borderRight: 0,width:200}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="home" style={{color:"#607D8B"}}/>
                  <span style={{color:"#607D8B"}}>小区住户信息</span>
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
                  <span style={{color:"#607D8B"}}>房屋信息</span>
                </span>
              }
            >
              <SubMenu key="sub2_1" title="1号楼">
                  <Menu.Item key="1_1"><Link to="/house">一单元</Link></Menu.Item>
                  <Menu.Item key="1_2"><Link to="/house">二单元</Link></Menu.Item>
                  <Menu.Item key="1_3"><Link to="/house">二单元</Link></Menu.Item>
                  <Menu.Item key="1_4"><Link to="/house">二单元</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2_2" title="2号楼">
                  <Menu.Item key="2_1"><Link to="/house">一单元</Link></Menu.Item>
                  <Menu.Item key="2_2"><Link to="/house">二单元</Link></Menu.Item>
                  <Menu.Item key="2_3"><Link to="/house">二单元</Link></Menu.Item>
                  <Menu.Item key="2_4"><Link to="/house">二单元</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2_3" title="3号楼">
                  <Menu.Item key="3_1"><Link to="/house">一单元</Link></Menu.Item>
                  <Menu.Item key="3_2"><Link to="/house">二单元</Link></Menu.Item>
                  <Menu.Item key="3_3"><Link to="/house">二单元</Link></Menu.Item>
                  <Menu.Item key="3_4"><Link to="/house">二单元</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2_4" title="4号楼">
                  <Menu.Item key="4_1"><Link to="/house">一单元</Link></Menu.Item>
                  <Menu.Item key="4_2"><Link to="/house">二单元</Link></Menu.Item>
                  <Menu.Item key="4_3"><Link to="/house">二单元</Link></Menu.Item>
                  <Menu.Item key="4_4"><Link to="/house">二单元</Link></Menu.Item>
              </SubMenu>
            </SubMenu>
            <Menu.Item key="sub3" >
              <Icon type="money-collect" style={{color:"#607D8B"}}/>
              <span><Link to="/charge" style={{color:"#607D8B"}}>收费</Link></span>
            </Menu.Item>
            <Menu.Item key="sub4">
              <Icon type="user" style={{color:"#607D8B"}}/>
              <span><Link to="/personnel" style={{color:"#607D8B"}}>人事管理</Link></span>
            </Menu.Item>
            <Menu.Item key="sub5">
              <Icon type="setting" style={{color:"#607D8B"}}/>
              <span><Link to="/fault" style={{color:"#607D8B"}}>故障管理</Link></span>
            </Menu.Item>
            <Menu.Item key="sub7">
              <Icon type="usergroup-add" style={{color:"#607D8B"}}/>
              <span><Link to="/complaint" style={{color:"#607D8B"}}>投诉</Link></span>
            </Menu.Item>      
          </Menu>      
          </Sider>
          {/* 右边组件路由 */}
          <Content style={{ marginLeft: 30, minHeight: 280}}>
            <Route path="/residents" component={Resident}/>
            <Route path="/house" component={House} />
            <Route path="/charge" component={Charge}/>
            <Route path="/personnel" component={Personnel}/>
            <Route path="/fault" component={Fault}/>
            <Route path="/complaint" component={Complaint}/>
            <Route path="/detail/:id" component={Detail} />
            <Route path="/modify/:id" component={ModRe} />
            <Route path="/modch/:id" component={ModCh} />
            <Route path="/modfa/:id" component={ModFa} />
            <Route path="/modco/:id" component={ModCo} />
            <Route path="/modho/:id" component={ModHo} />
            <Route path="/modpe/:id" component={ModPe} />
            <Route path="/addres" component={AddR}/>
            <Route path="/addch" component={AddCH}/>
            <Route path="/addch" component={AddP}/>
            <Route path="/addh" component={AddH}/>
          </Content>
        </Layout>        
      </Layout>
      
    )
  }
}
 
export default App;

