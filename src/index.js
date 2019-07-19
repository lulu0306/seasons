import React from 'react'
import ReactDOM from 'react-dom'
import Season from './Season'
import Loading from  './Loading'


class App extends React.Component{
 
    state={lat:null,errorMessage:''}

  componentDidMount(){

            window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat :position.coords.latitude}),
            (err)=> this.setState({errorMessage:err.message})
        )
  }

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error Message :{this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <Season lat={this.state.lat}/>
        }

        return<div><Loading message="Please accept location Request"/></div>
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)