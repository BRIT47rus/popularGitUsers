import '../Repository/Repository.css';
import { ForkIcon } from '../Repository/ui/ForkIcon';
import { StarIcon } from '../Repository/ui/StarIcon';
import './SkeletonRepository.css';
export const SkeletonRepository = () => {
    return (
        <div className="skelet-rep">
            <div className="skelet-rep__top"></div>
            <div className="skelet-rep__description"></div>
            <div className="skelet-rep__description"></div>
            <div className="skelet-rep__description"></div>
            <div className="skelet-rep__bottom">
                <StarIcon />
                <div className="skelet-rep__icon"></div>
                <ForkIcon />
                <div className="skelet-rep__icon"></div>
            </div>
        </div>
    );
};
