import React, { Component } from 'react';
import classes from './App.module.css';

import Model from './model/Model';
import TopNav from './components/TopNav/TopNav';
import QRPanel from './components/QRPanel/QRPanel';
import QRImagePanel from './components/QRImagePanel/QRImagePanel';

const QRCode = require('qrcode');

export interface AppProps { model: Model }
export interface AppState {
  QRImage: string,
}

class App extends Component<AppProps, AppState> {

  componentWillMount() {
    this.setState({
      QRImage: '',
    });
  }

  onTopNavClick(event: any): void {
    let nativeEvent: any = event.nativeEvent;
    switch (nativeEvent.target.id) {
      case 'tbd':
        break;
    }
  }

  onDropdownChange(selectedOption: any): void {
  }

  onPanelClick(event: any, data: any): void {
    let nativeEvent: any = event.nativeEvent;
    console.log(`onPanelClick: `, nativeEvent.target.id);
    switch (nativeEvent.target.id) {
      case 'qrText':
        let opts = {
          errorCorrectionLevel: 'M',
          type: 'image/png',
          scale: 8,
          color: {
            dark: '#000',  // Blue dots
            light: '#FFF' // Transparent background
          }
        }

        // QRCode.toFile('generated/new-code.png', data.qrText, opts,  (err: string) => {
        //   if (err) throw err
        //   console.log('done')
        // });
        QRCode.toDataURL(data.qrText, opts, (err: string, url: string) => {
          if (err) {
            console.log(err);
          } else {
            console.log(url);
            this.setState({ QRImage: url });
          }

        });
        break;
    }
  }

  render() {
    return (
      <div className={classes.App}>
        <TopNav clickHandler={this.onTopNavClick.bind(this)} />
        <div className={classes.PanelContainer}>
          <QRPanel clickHandler={this.onPanelClick.bind(this)} dropdownHandler={this.onDropdownChange.bind(this)} esmlExamples={this.props.model.esmlExamples} />
          <QRImagePanel clickHandler={this.onPanelClick.bind(this)} QRImage={this.state.QRImage} />
        </div>
      </div>
    );
  }
}

export default App;
