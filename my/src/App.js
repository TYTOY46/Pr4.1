import React from "react"
import Header from "./component/Header"
import Image from "./component/Image"  
import mone from "./img/mone.jpg"
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            helpText: "Help text",
            userData: ""
        }
        this.inputClick = this.inputClick.bind(this)
    }
    
    render(){
        return (<div>
        <Header title="Шапка сайта!"/>
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input placeholder={this.state.helpText}
           onChange={event => this.setState({userData: event.target.value})}
           onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
        <p>{this.helpText === "help text" ? "Yes":"NO" }</p>
        <img src={mone}/>
    </div>)
    }
    inputClick(){
        this.setState({helpText : "Clicked"})
        console.log("Clicked")
    }
    mouseOver(){console.log("Mouse Over")}
    componentDidUpdate(prevprop){
        if (this.state.helpText != "Help")
        console.log("Some")
    }
}   
export default App