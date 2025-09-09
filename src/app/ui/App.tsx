import { Header } from '../../widjets/ui/Header/Header';
import { Slider } from '../../widjets/ui/Slider/Slider';
import './App.css';

export function App() {
    return (
        <div className="app-container">
            <div className="app__header-wrap">
                <Header text="Топ популярных javascript репозиториев" />
            </div>
            <Slider />
        </div>
    );
}
