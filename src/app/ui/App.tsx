import { Provider } from 'react-redux';
import { Header, Slider } from '../../widjets';
import './App.css';
import { store } from '../../features/store/store';

export function App() {
    return (
        <Provider store={store}>
            <div className="app-container">
                <div className="app__header-wrap">
                    <Header text="Топ популярных javascript репозиториев" />
                </div>
                <Slider />
            </div>
        </Provider>
    );
}
