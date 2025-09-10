import type { FC } from 'react';
import './Repository.css';
import { ForkIcon } from './ui/ForkIcon';
import { StarIcon } from './ui/StarIcon';
import type { TRep } from '../../types';

interface Props extends TRep {
    containerRef?: React.Ref<HTMLDivElement>;
}

export const Repository: FC<Props> = ({
    forks,
    name,
    watchers,
    description,
    containerRef,
}) => {
    return (
        <div className="rep" ref={containerRef}>
            <div className="rep__top">{name}</div>
            <div className="rep__description">{description}</div>
            <div className="rep__bottom">
                <StarIcon count={watchers} />
                <ForkIcon count={forks} />
            </div>
        </div>
    );
};
