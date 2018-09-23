import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";
import Model from '../model/Model';
import TopNav from './TopNav';
import QRPanel from './QRPanel';
import QRImagePanel from './QRImagePanel';

const prettyjson = require('prettyjson');
const QRCode = require('qrcode');
const JsBarcode = require('jsbarcode');

export interface ApplicationProps { model: Model }
export interface ApplicationState {
    QRImage: string,
    log: string
}

export default class Application extends React.Component < ApplicationProps, ApplicationState > {

    componentWillMount() {
        this.setState({
            QRImage: '',
            log: ''
         });
    }

    componentDidMount() {
    }

    onTopNavClick(event: any): void {
        let nativeEvent: any = event.nativeEvent;
        switch ( nativeEvent.target.id) {
            case 'tbd':
                break;
        }
    }

    onDropdownChange(selectedOption: any): void {
        // this.props.model.appSettings.tbd = selectedOption;
    }

    onPanelClick(event: any, data: any): void {
        let nativeEvent: any = event.nativeEvent;
        console.log(`onPanelClick: `, nativeEvent.target.id);
        switch ( nativeEvent.target.id) {
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
                      this.setState({QRImage: url});
                  }

                });
                break;
            case 'clearLog':
                this.setState({ log: '' })
        }
    }

    layout(): any {
        let layout;
        layout = <div>
            <TopNav  clickHandler={this.onTopNavClick.bind(this)} />
            <div className="panelContainer">
                <QRPanel clickHandler={this.onPanelClick.bind(this)} dropdownHandler={this.onDropdownChange.bind(this)} esmlExamples={this.props.model.esmlExamples} />
                <QRImagePanel clickHandler={this.onPanelClick.bind(this)} QRImage={this.state.QRImage} />
            </div>
        </div>
        return layout;
    }

    render() {

        return(
            this.layout()
        );
    }
}
