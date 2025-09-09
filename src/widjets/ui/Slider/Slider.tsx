import './Slider.css';
import { IconLeft } from './ui/IconLeft';
import { IconRight } from './ui/IconRight';

export const Slider = () => {
    return (
        <div className="slider">
            <div className="slider__left">
                <IconLeft />
            </div>

            <div className="slider__right">
                <IconRight />
            </div>
        </div>
    );
};
