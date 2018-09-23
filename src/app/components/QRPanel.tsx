import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";
import Select from 'react-select';

export interface QRPanelProps { clickHandler: any, dropdownHandler: any}
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
        let qrOptions: any[] = [
            {value: 'L', label: 'L'},
            {value: 'M', label: 'M'},
            {value: 'H', label: 'H'}
        ];

        return (
            <div className="app-panel well" id="qrPanel">
                <ReactBootstrap.Table condensed hover style = {{width: '100%'}}>
                    <tbody>
                        <tr><td>QR Text:</td></tr>
                        <tr><td>
                        <Select name="Dropdown" value={"M"} options={qrOptions} onChange={this.handleDropdownChange.bind(this)}  />
                        </td></tr>
                        <tr><td>
                            <textarea name="qrText" id="qrText" value={this.state.qrText} rows={2} style={{}} onChange={this.onQRTextChange.bind(this)} onKeyPress={this.onKeyPress.bind(this)} />
                        </td></tr>
                        <tr><td>
                            <ReactBootstrap.Button bsStyle={'success'} key={"qrText"} id={"qrText"} style = {{width: 100}}
                                onClick={this.onButtonClicked.bind(this)}>Submit</ReactBootstrap.Button>
                        </td></tr>
                        <tr><td>
                            <textarea value={""} readOnly name="response" ref="response" rows={4} style={{}} />
                        </td></tr>
                    </tbody>
                </ReactBootstrap.Table>
            </div>
        );
    }
}
