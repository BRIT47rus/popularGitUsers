import './Repository.css';
import { ForkIcon } from './ui/ForkIcon';
import { StarIcon } from './ui/StarIcon';
export const Repository = () => {
    return (
        <div className="rep">
            <div className="rep__top">REACT</div>
            <div className="rep__description">
                A declarative, efficient, and flexible JavaScript library for
                building user interfaces.
            </div>
            <div className="rep__bottom">
                <StarIcon count={111} />
                <ForkIcon count={222} />
            </div>
        </div>
    );
};
