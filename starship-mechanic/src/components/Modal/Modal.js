import React, {Component} from 'react';


class Modal extends Component {

    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }
    render() {

        if(!this.props.show) {
            return null
        }

        return (
            <div className="backdropStyle">
                <div className="container">
                <div className="row">
                    <div className="col-sm-3"/>
                    <div className="col-sm-6">
                        <div className="builderModal">
                            <div className="Row">
                                <div className="col-sm-4"/>  
                                Build Report
                                <div className="col-sm-4"/>  
                            </div>
                            <div className="builderModalStyle">
                            {this.props.children}
                                <div className="builderModalFooter">
                                    <button className="btn btn-secondary" onClick={(e) => {this.onClose(e)}}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3"/>
                </div>
                </div>
            </div>
        )
    }
}

export default Modal;