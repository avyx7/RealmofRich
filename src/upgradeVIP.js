import React, { Component } from 'react'

class UpgradeVIP extends Component {

    render(){
    return (
        <div>
            <div className="completebackground backgroundVIP">
                <div className="close" onClick={this.props.setupgradeVIP()}></div>
               <div className="gamefont upgradeVIP-heading">
               UPGRADE VIP
               </div>
            </div>
            
        </div>
    );
}
}
export default UpgradeVIP