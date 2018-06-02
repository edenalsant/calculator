import React, {Component }from 'react';

class Label extends Component{
    render(){
        return(
            <div className="label">
                {this.props.data}
            </div>
        );
    }
}

export default Label
