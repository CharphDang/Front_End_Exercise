import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import RouteComponentPage from './pages/RouteComponentPage';
// const RouteApp = RouteComponentPage;
const RouteApp = App;
ReactDOM.render(<RouteApp />, document.getElementById('root'));
