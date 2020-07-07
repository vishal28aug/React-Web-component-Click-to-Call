import React from 'react'
import ReactDOM from 'react-dom'
import reactToWebComponent from 'react-to-webcomponent'

class ClickToCall extends React.Component {

  constructor() {
    super();
    this.state = {
      labels: '',
      phone_number: ''
    }
    this.getCallData();
  }

  /**
   * Get call information and store the value in state
   * @memberof ClickToCall
   */
  getCallData() {
    fetch("https://codifyinditest.com/script_test/api-test/")
      .then((response) => response.json())
      .then((data) => {
        let { labels, phone_number } = data['script test'];
        this.setState({
          labels, phone_number
        })
      })
      .catch((error) => console.log(error));
  }

  /**
   * CSS styles
   * @memberof ClickToCall
   */
  styles = {
    container: {
      background: '#ecebeb',
      boxShadow: '0 0 3px 0 rgba(0, 0, 0, 1)',
      position: 'relative',
      borderRadius: '5px',
      padding: '2px',
      width: '100%',
      margin: '2px',
      fontFamily: 'monospace',
      fontWeight: 'bold'
    },

    call_info: {
      borderRadius: '7px',
      padding: '20px',
      background: '#292c33',
      fontSize: '20px',
      textAlign: '-webkit-center'
    },
    call_info__title: {
      color: 'white',
      cursor: 'pointer'
    },

    call_info__value: {
      color: '#87FF2A',
      background: '#393940fa',
      borderRadius: '50px',
      padding: '2px 32px',
      cursor: 'pointer',
      width: 'fit-content',
    },

    close: {
      fontSize: '40px',
      color: 'white',
      padding: '11px',
      textAlign: 'right'
    },

    close_btn: {
      cursor: 'pointer',
      background: '#292c33',
      borderRadius: '50%',
      padding: '9px'
    },  
  }

  render() {
    return <div style={this.styles.container}>
      <div style={this.styles.call_info}>
        <div style={this.styles.call_info__title}>{this.state.labels}</div>
        <div 
        style={this.styles.call_info__value}>
          {this.state.phone_number}
          </div>
      </div>
      <div style={this.styles.close}>
        <span style={this.styles.close_btn}> X </span>
      </div>
    </div>
  }
}

customElements.define('click-to-call', reactToWebComponent(ClickToCall, React, ReactDOM));

