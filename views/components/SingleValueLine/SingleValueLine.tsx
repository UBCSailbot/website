import React from 'react';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './singlevalueline.module.css'


interface SingleValueLineProps {
  title: string;
  data: number | string | undefined;
  unit: string;
}

class SingleValueLine extends React.Component<SingleValueLineProps> {
  render() {
    const { title, data, unit } = this.props;

    return (
      <Card className={styles.card} variant="outlined">
        <CardContent>
          <Typography align="center" variant="subtitle2">
            {(data) ? `${title}: ${data} ${unit}` : `-- ${unit}`}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default SingleValueLine;
