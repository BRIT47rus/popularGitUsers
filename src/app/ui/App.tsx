import { Provider } from 'react-redux';
import { Header, Slider } from '../../widjets';
import './App.css';
import { store } from '../../features/store/store';
import classNames from 'classnames';

export function App() {
    const toggleTheme = () => {
        document.documentElement.classList.toggle('dark-theme');
        const isDark =
            document.documentElement.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };
    return (
        <Provider store={store}>
            <div className={classNames('app-container')}>
                <div className="app__header-wrap">
                    <Header text="Топ популярных javascript репозиториев" />
                </div>
                <Slider />
            </div>
            <button onClick={toggleTheme}>click</button>
        </Provider>
    );
}
