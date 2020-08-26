import React, {Component} from 'react';
import SpacePart from '../SpacePart/SpacePart';
import PropTypes from 'prop-types'

class AllParts extends Component {

    render () {
        return (this.props.parts).map( part => (

            <div className="col-sm-4">
                <SpacePart
                key={part.id}
                id={part.id}
                name={part.name}
                img={part.img}
                price={part.price}
                selected={part.selected}
                markSelected = {this.props.markSelected}
                />
                
            </div>
        ));
    };
};

AllParts.propTypes = {
    parts: PropTypes.array.isRequired
};

export default AllParts;