import React from 'react';
import { Provider } from 'mobx-react';

/*components*/
import TopBar from 'components/top-bar/top-bar';

/*material UI*/
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

/*stores*/
import stores from 'stores/index';

/*styles*/
import './styles.css';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#212121' },
    secondary: { main: '#f44336' },
  },
});

const App = (props) => (
  <Provider {...stores}>
    <ThemeProvider theme={theme}>
      <TopBar/>
      <div className='container'>
        {props.children}
      </div>
    </ThemeProvider>
  </Provider>);

export default App;
