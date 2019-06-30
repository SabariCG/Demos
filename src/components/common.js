import React from 'react';
import { FormattedMessage } from 'react-intl';

export class PostMessage extends React.Component {
    constructor(props){
        super(props);

        console.log(props);
    }

    render() {
        return (
         <div>
             <FormattedMessage id={this.props.json.id} defaultMessage={this.props.json.message} values={this.props.json.values}></FormattedMessage>
         </div>   
        )
    }
}

export default PostMessage;