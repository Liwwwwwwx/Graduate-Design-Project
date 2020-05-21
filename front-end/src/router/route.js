import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import { createBrowserHistory } from "history";
import App from '../App';
import Charge from '../components/charge/charge';
import Fault from '../components/fault/fault';
import House from '../components/houses/houses';
import Personnel from '../components/personnels/personnel';
import Complaint from '../components/complaint/complaint';
import Detail from '../components/residents/detail';
import AddR from '../components/residents/addResident';
import LoginModule from '../components/Login/login';
import AddCH from '../components/charge/addcharge';
import AddP from '../components/personnels/addpersonnel';
import AddH from '../components/houses/addhouses';
import ModRe from '../components/residents/modifyResi';
import modifyCha from '../components/charge/modifyCha';
import modifyCo from '../components/complaint/modifyCo';
import modifyFa from '../components/fault/modifyFa';
import modifyPe from '../components/personnels/modifyPe';
import modifyHo from '../components/houses/modifyHo';

class route extends Component {
    render() {
        return (
            <Router history={createBrowserHistory()}>
                <div>
                    <Route exact path="/" component={LoginModule}/>
                    <App path="residents" component={App}>
                        <Route path="/residents" component={App} /> 
                        <Route path="/house" component={House} />
                        <Route path="/charge" component={Charge}/>
                        <Route path="/personnel" component={Personnel}/>
                        <Route path="/fault" component={Fault}/>
                        <Route path="/complaint" component={Complaint}/>
                        <Route path="/detail" component={Detail}/>
                        <Route path="/addres" component={AddR}/>
                        <Route path="/addch" component={AddCH}/>
                        <Route path="/addch" component={AddP}/>
                        <Route path="/addh" component={AddH}/>
                        <Route path="/modify/:id" component={ModRe} />
                        <Route path="/modho/:id" component={modifyHo} />
                        <Route path="/modch/:id" component={modifyCha} />
                        <Route path="/modco/:id" component={modifyCo} />
                        <Route path="/modfa/:id" component={modifyFa} />
                        <Route path="/modpe/:id" component={modifyPe} />
                    </App>
                </div>
            </Router>

        );
    }
}

export default route;
