import React, { Component } from 'react';
import {
    View
} from 'react-native';
import {
    array,
    func
} from 'prop-types';
import Prediction from './Prediction';

class Predictions extends Component {
    static propTypes = {
        predictions: array.isRequired,
        onPressPrediction: func
    }

    static defaultProps = {
        predictions: [],
        predictionsStyle: {},
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.predictionsStyle}>
                {
                    this.props.predictions.map(prediction => {
                        return (
                            <Prediction
                                key={prediction.place_id}
                                prediction={prediction}
                                title={prediction.structured_formatting.main_text}
                                description={prediction.structured_formatting.secondary_text}
                                onPress={this.props.onPressPrediction} />
                        );
                    })
                }
            </View>
        );
    }
}


export default Predictions;
