import { createMuiTheme } from "@material-ui/core";

export function configureTheme() {
  return createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(16,59,124)'

      },
      secondary: {
        main: 'rgb(50,136,230)'
      }
    }
  });
}
