import React, { PureComponent, ChangeEvent } from 'react';
import {
  TextField,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  LinearProgress,
} from '@material-ui/core';
import { map } from 'lodash';
import { predict } from './model';

interface IPredictionObjects {
  match: boolean;
  probabilities: Float32Array;
}

interface IPredictions {
  label: string;
  results: IPredictionObjects[];
}

interface IState {
  inputSentence: string;
  isLoading: boolean;
  predictions?: IPredictions[];
}

class MLComponent extends PureComponent<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = { inputSentence: '', isLoading: false };
  }

  public render() {
    return (
      <div>
        <TextField
          value={this.state.inputSentence}
          placeholder="Try to insult this web app ;-)"
          onChange={(e: ChangeEvent<HTMLInputElement>) => this.setState({ inputSentence: e.currentTarget.value })
          }
        />
        <Button onClick={() => this.predictSentence()}>Predict toxicity</Button>
        {this.state.isLoading ? <LinearProgress /> : null}
        {this.state.predictions ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>isMatch</TableCell>
                <TableCell>Probability</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {map(this.state.predictions, (prediction, index) => (
                <TableRow key={index}>
                  <TableCell>{prediction.label}</TableCell>
                  <TableCell>{prediction.results[0].match ? 'True' : 'False'}</TableCell>
                  <TableCell>
                    {prediction.results[0].match
                      ? prediction.results[0].probabilities[1] * 100
                      : prediction.results[0].probabilities[0] * 100}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : null}
      </div>
    );
  }

  private predictSentence = () => {
    this.setState({ isLoading: true });
    predict(this.state.inputSentence).then(value => this.setState({ predictions: value, isLoading: false }));
  };
}

export const ML = MLComponent;
