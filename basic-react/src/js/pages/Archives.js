import React from 'react';
import Article from '../components/Article';

class Archives extends React.Component {

    // render() {
    //     console.log(this.props)
    //     const {params} = this.props;
    //     const {article} = params;
    //     return <h1>Archives ({article})</h1>
    // }

    render() {
        const {query} = this.props.location;
        const {params} = this.props;
        const {article} = params;
        const {date, filter} = query;

        const Articles = [
            "Some Article",
            "Some other Article",
            "Yet Some Article",
            "Fake Article",
            "American Article",
            "Mexican Article",
        ].map((title, i) => <Article key={i} title={title} />);

        return (
            <div>
                <h1>Article</h1>
                articles: {article}, date: {date}, filter: {filter}
                <div className="row">{Articles}</div>
            </div>
        )
    }
}

export default Archives;
