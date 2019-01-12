import React, {Component} from 'react';
import Link from './Link';

class Links extends Component {
    render() {
        const List = this.props.links.map(obj =>
            <Link link={obj.link} text={obj.name} id={obj.id}/>
        );
        return (
            List
        )
    }
}

export default Links;