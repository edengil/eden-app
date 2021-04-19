import React from 'react';
import axios from 'axios';

class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            weather: {},
            username: ''
        };
    }


    
    mySubmitHandler = (event) => {
        event.preventDefault();
        this.setState({username: this.state.name});
        const username = this.state.name;
        const key = "1fe0b253d5e04fa656fe6916eb4075df";
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${username}&appid=${key}&units=metric`
        axios.get(url)
        .then(response => {
            if(response.status === 200){
                this.setState({
                    weather: response.data
                
                })
            }
        });
        
    }

    myChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    render(){
        const {name , weather} = this.state;
        return <div>
            <form onSubmit={this.mySubmitHandler}>

            <input
                type='text'
                onChange={this.myChangeHandler}
            />
            <input id="id1"
                type='submit'
            />
            </form>

           
            {weather.main &&
            (<div><h1>{weather.name}</h1><div>{weather.main.temp}</div>
            <div>{weather.weather[0].main}</div>
            <div>Feels like {weather.main.feels_like}</div>
            </div>)}
            </div>;
    }
}

export default Weather;
