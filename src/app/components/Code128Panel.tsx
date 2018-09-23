import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";

export interface Code128PanelProps { clickHandler: any }
export interface Code128PanelState { }

export default class Code128Panel extends React.Component<Code128PanelProps, Code128PanelState> {

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
            <div className="app-panel well" id="code128Panel" onClick={this.onButtonClicked.bind(this)} >
                <div>
                    Code 128 Image
                </div>
            </div>
        );
    }
}
