import React from 'react';
import Article from '../components/Article';

class Featured extends React.Component {
    render() {
        const Articles = [
            "Some article",
            "Some Other Article",
            "Yet another article",
            "Still more"
        ].map((title, i) => <Article key={i} title={title} />);
        /*
        const Articles = [
            <Article key={1} title={"Some article"} />,
            <Article key={2} title={"Some article"} />,
            <Article key={3} title={"Some article"} />,
            <Article key={4} title={"Some article"} />,
            <Article key={5} title={"Some article"} />
        ]
        */


        const adText = [
            "Ad spot #1",
            "Ad spot #2",
            "Ad spot #3",
            "Ad spot #4",
            "Ad spot #5",
        ]

        const randomAd = adText[Math.round(Math.random() * (adText.length - 1))];

        return (
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="well text-center">
                            {randomAd}
                        </div>
                    </div>
                </div>

                <div className="row">{Articles}</div>
            </div>
        )
    }
}

export default Featured;
