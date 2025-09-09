import type { FC } from 'react';
import './Repository.css';
import { ForkIcon } from './ui/ForkIcon';
import { StarIcon } from './ui/StarIcon';
import type { TRep } from '../../types';

export const Repository: FC<TRep> = ({
    forks,
    name,
    watchers,
    description,
}) => {
    return (
        <div className="rep">
            <div className="rep__top">{name}</div>
            <div className="rep__description">{description}</div>
            <div className="rep__bottom">
                <StarIcon count={watchers} />
                <ForkIcon count={forks} />
            </div>
        </div>
    );
};
