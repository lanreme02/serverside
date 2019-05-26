import React, { Component } from 'react';
import {Country,Cities} from './locationList';

class App extends Component {

  
      constructor(props){

        super(props)

        this.state = {
          country:'',
          city:Array(0)
        }
        this.change = this.change.bind(this);
        this.cityChange = this.cityChange.bind(this);  
       // this.testStore = this.testStore.bind(this);
      }
     
  change(e){

    console.log("*********************");
    this.setState({city:Array(0)} )
      this.setState({country:''});

    var cities;
    const {countriesReducer} = this.props;
    countriesReducer.map(x => {
      if( x.name === e.target.value.trim())
       cities =[...x.cities];
    })
    
    if(cities){
      console.log(cities);
    this.setState({city:cities.slice()})
    this.setState({country:e.target.value.trim()})
    }
   
  }

  cityChange(e){   
    this.setState({city:[]})
    this.setState({country:''})
    this.props.store.dispatch(addLocationAction("England",['London','Brighton','Manchester']));
  }

  /*
  componentDidMount(){
    this.testStore();
  }
*/
  render() {
    const {countriesReducer} = this.props;
    return (
      <div className="App">
       <div>
        <Country countriesReducer = {countriesReducer} change={this.change}></Country>
        <Cities city ={ this.state.city}  change={this.cityChange} ></Cities>
       </div>
      </div>
    );
  }

 
  //
           
  
}

export default App;
