import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";

export interface LogPanelProps { clickHandler: any, log: string }
export interface LogPanelState { }

export default class LogPanel extends React.Component<LogPanelProps, LogPanelState> {

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
            <div className="app-panel well" id="logPanel" onClick={this.onButtonClicked.bind(this)} style={{padding: '3px'}}>
                <textarea value={this.props.log} readOnly name="log" ref="log" rows={14} style={{}} />
                <ReactBootstrap.Button bsStyle={'info'} key={"clearLog"} id={"clearLog"} style = {{width: 100, marginTop: '6px'}}>Clear</ReactBootstrap.Button>
            </div>
        );
    }
}
