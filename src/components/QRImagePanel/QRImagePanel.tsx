import * as React from "react";
import classes from './QRImagePanel.module.css';

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
        const qrImagePanelClasses: string = `${classes.QRImagePanel} well`;
        return (
            <div className={qrImagePanelClasses} onClick={this.onButtonClicked.bind(this)} >
                <div>
                    <h4>QR Image</h4>
                </div>
                <img className={classes.QRImage} src={this.props.QRImage} />
            </div>
        );
    }
}
