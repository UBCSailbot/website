import React from 'react';
import { CardHeader, Container, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


interface SingleValueChartProps {
  title: string;
  data: number | string | undefined;
  unit: string;
}

class SingleValueChart extends React.Component<SingleValueChartProps> {
  render() {
    const { title, data, unit } = this.props;

    var cardStyle = {
      display: 'block',
      width: '15vw',
      height: '8vw'
    }

    return (
      <Card style={cardStyle} variant="outlined">
        <CardContent>
          <Typography align="center" variant="h6">
            {`${title}`}
          </Typography>
          <Typography align="center" variant="h5">
            <strong>{(data) ? `${data} ${unit}` : `-- ${unit}`}</strong>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default SingleValueChart;
