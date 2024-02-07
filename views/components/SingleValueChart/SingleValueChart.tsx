import React from 'react';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


interface SingleValueChartProps {
  title: string;
  data: number;
}

class SingleValueChart extends React.Component<SingleValueChartProps> {
  render() {
    const { title, data } = this.props;

    return (
        <Card sx={{ maxWidth: 170 }} variant="outlined">
            <CardContent>
                <div style={{ textAlign: 'center'}}>
                    <h1>{`${title}`}</h1>
                    <p>{`${data}`}</p>
                </div>
            </CardContent>
        </Card>
    );
  }
}

export default SingleValueChart;