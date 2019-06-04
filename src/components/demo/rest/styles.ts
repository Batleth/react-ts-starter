import { createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

export const styles = createStyles( (theme: Theme)  => ({
    root: {
      background: theme.spacing(1),
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  }));
