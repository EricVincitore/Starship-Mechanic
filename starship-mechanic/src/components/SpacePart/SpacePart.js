import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SpacePart extends Component {

    checkSelected = selected => {
        if (selected === true) {
            return "Yes"
        } else {
            return "No"
        };
    };
    

    render () {
        const {id, name, price, img, selected} = this.props;
        //console.log(id,name, price, img, selected);
        return (
            <div>
                <div className="card" onClick={this.props.markSelected.bind(this, id)}>
                    <img className="card-img-top space-img" src={img} alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Price in USD: {price}</p>
                        <p className="card-text">Selected: {this.checkSelected(selected)}</p>
                        
                    </div>
                </div>
            </div>
        );

    };
};

SpacePart.propTypes = {
    parts: PropTypes.object.isRequired
};

export default SpacePart;