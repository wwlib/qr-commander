import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";

export interface QRImagePanelProps { clickHandler: any, QRImage: string  }
export interface QRImagePanelState { }

export default class QRImagePanel extends React.Component<QRImagePanelProps, QRImagePanelState> {

    componentWillMount() {
        this.setState({});
    }

    componentDidMount() {
    }

    onButtonClicked(event: any) {
        this.props.clickHandler(event);
    }

    render() {
        return (
            <div className="app-panel well" id="qrImagePanel" onClick={this.onButtonClicked.bind(this)} >
                <div>
                    QR Image
                </div>
                <img id="qrImage" src={this.props.QRImage} />
            </div>
        );
    }
}
