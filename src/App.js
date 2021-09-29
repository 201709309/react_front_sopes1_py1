import './App.css';
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core'
import Tweets from './pages/Tweets'
import NavBar from './components/NavBar'
import Metricas from './pages/Metricas'
import socket from './libs/socket'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D9BF0',
    },
  },
});

function App() {

  useEffect(() => {

    socket.on('notificaciones', (data) => {
      console.log(data)
    })
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Tweets />
          </Route>
          <Route exact path="/metricas">
            <Metricas />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
