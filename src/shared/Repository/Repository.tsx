import type { FC } from 'react';
import './Repository.css';
import { ForkIcon } from './ui/ForkIcon';
import { StarIcon } from './ui/StarIcon';
import type { TRep } from '../../types';
import classNames from 'classnames';

interface Props extends TRep {
    containerRef?: React.Ref<HTMLDivElement>;
    className?: string;
    onClick?: () => void;
}

export const Repository: FC<Props> = ({
    forks,
    name,
    watchers,
    description,
    containerRef,
    homepage,
    topics,
    className,
    onClick,
}) => {
    return (
        <div
            className={classNames('rep', className)}
            ref={containerRef}
            onClick={onClick}
        >
            <div className="rep__top">{name}</div>
            <div className="rep__description">{description}</div>

            {homepage && (
                <a href={homepage} target="_blank">
                    {homepage} <span>-------</span>
                </a>
            )}
            {topics && topics.map((top, i) => <div key={i}>{top}</div>)}
            <div className="rep__bottom">
                <StarIcon count={watchers} />
                <ForkIcon count={forks} />
            </div>
        </div>
    );
};
