import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";
import Select from 'react-select';

export interface QRPanelProps { clickHandler: any, dropdownHandler: any, esmlExamples: any[]}
export interface QRPanelState { qrText: string }

export default class QRPanel extends React.Component<QRPanelProps, QRPanelState> {

    componentWillMount() {
        this.setState({qrText: ''});
    }

    componentDidMount() {
    }

    onKeyPress(event: any) {
        let nativeEvent: any = event.nativeEvent;
        if (nativeEvent.key == 'Enter')
        {
            // submit text
            this.props.clickHandler(event, {qrText: this.state.qrText});
        }
    }

    onButtonClicked(event: any) {
        this.props.clickHandler(event, {qrText: this.state.qrText});
    }

    handleDropdownChange(selectedOption: any) {
        console.log(selectedOption);
        this.setState({qrText: `ESML[#]${selectedOption.value}`});
        this.props.dropdownHandler(selectedOption);
    }

    onQRTextChange(event: any): void {
        let nativeEvent: any = event.nativeEvent;
        switch(nativeEvent.target.name) {
            case 'qrText':
                if (nativeEvent.inputType != 'insertLineBreak') {
                    this.setState({ qrText: nativeEvent.target.value })
                }
                break;
        }
    }

    render() {
        return (
            <div className="app-panel well" id="qrPanel">
                <ReactBootstrap.Table condensed hover style = {{width: '100%'}}>
                    <tbody>
                        <tr><td>QR Text:</td></tr>
                        <tr><td>
                        <Select name="Dropdown" value={{label: "Examples", value:"Examples"}} options={this.props.esmlExamples} onChange={this.handleDropdownChange.bind(this)}  />
                        </td></tr>
                        <tr><td>
                            <textarea name="qrText" id="qrText" value={this.state.qrText} rows={5} style={{}} onChange={this.onQRTextChange.bind(this)} onKeyPress={this.onKeyPress.bind(this)} />
                        </td></tr>
                        <tr><td>
                            <ReactBootstrap.Button bsStyle={'success'} key={"qrText"} id={"qrText"} style = {{width: 120}}
                                onClick={this.onButtonClicked.bind(this)}>Generate Code</ReactBootstrap.Button>
                        </td></tr>

                    </tbody>
                </ReactBootstrap.Table>
            </div>
        );
    }
}
