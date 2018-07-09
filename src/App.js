import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'animate.css/animate.min.css';

import GoogleMap from './components/GoogleMap';
import Speedo from './components/Speedo';
import Speedo2 from './components/Speedo2';
import ProgressBubble from './components/ProgressBubble';
import ProgressCircle from './components/ProgressCircle';
import LineChart from './components/LineChart';
import CustomToast from './components/CustomToast';
import TextboxFilter from './components/TextboxFilter';

import swal from 'sweetalert2';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: 50,
      updating: false
    }
    this.changeValue = this.changeValue.bind(this);
    this.openNewPage = this.openNewPage.bind(this);
  }

  changeValue(e) {
    this.setState({value: parseInt(e.target.value)});
  }

  openNewPage() {
    // const url = 'https://na2-latest.sinefa.com?path=settings';
    // const requestOptions = {
    //   method: 'GET',
    //   headers: {'x-api-key': `ec6f310c-cc49-4163-a215-fd5572866403`},
    //   responseType: "blob"
    // }
    // fetch(url, requestOptions)
    // .then(res => {
    //   return res.text();
    // })
    // .then(res => {
    //   const newWin = window.open(url);
    //   // newWin.document.write(`${res}`)
    //   // newWin.document.body.innerHTML = res;
    // })

    // const requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   body: "user=hz%40sp1.com&password=123456"
    //
    // }
    //
    // const url = `https://ap1-latest.sinefa.com/api/v1/auth/login`;
    // fetch(url, requestOptions)
    //   .then(res => {
    //     if (res.ok) {
    //       console.log('login success');
    //       return res.text();
    //     } else {
    //       console.log('login failed');
    //     }
    //   })
    //   .then(res => {
    //     const newWin = window.open();
    //     newWin.document.write(`${res}`);
    //   })

    var f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('action',"https://ap1-latest.sinefa.com/api/v1/auth/login");

    var user = document.createElement("input");
    user.setAttribute('value',"hz@sp1.com");
    user.setAttribute('name',"user");

    var pwd = document.createElement("input");
    pwd.setAttribute('value',"123456");
    pwd.setAttribute('name',"password");

    f.appendChild(user);
    f.appendChild(pwd);
    document.body.appendChild(f);
    f.submit();
  }

  toastr() {
    swal({
      position: 'top-end',
      title: 'Loading',
      showConfirmButton: false,
      timer: 1500,
      imageUrl: 'https://ap1-app.sinefa.com/sinefa/img/spinner-sinefa.gif',
      width: 400,
      animation: false,
      customClass: 'animated slideInDown'
    })
  }

  notify() {
    toast('Hello World');
  }

  customNotify() {
    const toastId = toast(<CustomToast/>);
  }

  toggleUpdate() {
    this.setState({updating: !this.state.updating})
  }

  render() {
    if (this.state.updating&&(!toast.isActive(this.toastId))) {
      this.toastId = toast(<CustomToast/>, {
        autoClose: false,
        closeButton: false,
        hideProgressBar: true,
        closeOnClick: false,
        draggable: false,
        draggablePercent: 0
      });
    } else {
      toast.update(this.toastId, {
        render: "Done",
        pauseOnHover: false,
        type: toast.TYPE.SUCCESS,
        autoClose: 500
      });
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <GoogleMap></GoogleMap> */}
        {/* <LineChart></LineChart> */}
        <input type="number" min='0' max='100' onChange={this.changeValue} value={this.state.value}/>
        <button onClick={()=>this.toastr()}>Swal2</button>
        <button onClick={()=>this.notify()}>Toastify</button>
        <button onClick={()=>this.customNotify()}>Custom Toastify</button>
        <button onClick={()=>this.toggleUpdate()}>toggleUpdate</button>
        <ToastContainer/>
        <div className="speedo-wrapper">
          <Speedo value={this.state.value}/>
          <Speedo2 value={this.state.value}/>
          <ProgressBubble value={this.state.value}/>
          <ProgressCircle value={this.state.value} benchmarkValue={80} valuelabel='Availability' size={150} strokewidth={10}/>
        </div>
        <button onClick={this.openNewPage}>open</button>
        <form action="https://ap1-latest.sinefa.com/api/v1/auth/login"
        target="login"
        onSubmit={()=>{window.open('https://na2-latest.sinefa.com/?path=settings', 'login', 'width=500, height=500')}}
        method="post">
          <input type="email" name="user"/>
          <input type="password" name="password"/>
          <button>login</button>
        </form>
        <TextboxFilter/>
      </div>
    );
  }
}

export default App;
