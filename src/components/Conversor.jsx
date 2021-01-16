import React, { Component } from 'react';
import './conversor.css';

class Conversor extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      moedaA_valor: 10,
      moedaB_valor: 0
    }

    this.converter = this.converter.bind(this);
  }
  
  converter(){
    
    let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    let url = `https://free.currconv.com/api/v7/convert?apiKey=c9de19c4ca86126179bf&q=${de_para}&compact=y`

    fetch(url)
      .then(res => {
        return res.json()
      })
      .then(json => {
        let cotacao = json[de_para].val;

        let moedaB_valor = (parseFloat((this.state.moedaA_valor) * cotacao)).toFixed(2);
        
        this.setState({moedaB_valor});
      })
  }
  
  render(){
    return (
      <div className="conversor">
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        
        <input type="number" onChange={(event) => {this.setState({moedaA_valor:event.target.value})}}></input>
        <input type="button" value="Converter" onClick={this.converter}/>
        
        <h2 className="resultado">{this.state.moedaB_valor}</h2>
      </div>
    )
  }
}

export default Conversor;