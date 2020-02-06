import React, { Component } from 'react';
import { Layout } from 'antd';
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
                    color:'#607D8B'}}>
                小区住户信息>>详细信息
                </div>
            </Layout>
         );
    }
}
 
export default Detail;