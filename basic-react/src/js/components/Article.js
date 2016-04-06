import React from 'react';

class Article extends React.Component {
    render() {
        const {title} = this.props;

        return (
            <div className="col-md-4">
                <h2>{title}</h2>
                <p>Test Test Test Test Test Test Test Test</p>
                <a className="btn btn-default" href="#">More Info</a>
            </div>
        )
    }
}

export default Article
