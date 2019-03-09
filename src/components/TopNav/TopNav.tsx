import * as React from "react";
import classes from './TopNav.module.css';

export interface TopNavProps { clickHandler: any }
export interface TopNavState { }

export default class TopNav extends React.Component<TopNavProps, TopNavState> {

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
            <div className={classes.TopNav} onClick={this.onButtonClicked.bind(this)} >
                <div className={classes.TopTitle}>
                    <h4>QR Commander</h4>
                    <h4>
                        <a href="https://github.com/wwlib/qr-commander" style={{color: 'white', paddingRight: '6px'}}>
                            github: qr-commander
                        </a>
                    </h4>
                </div>
            </div>
        );
    }
}
