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
    const getDomain = (urlSTR: string) => {
        const url = new URL(urlSTR);
        return url.hostname;
    };

    return (
        <div
            className={classNames('rep', className)}
            ref={containerRef}
            onClick={onClick}
        >
            <div className="rep__top">{name}</div>
            <div className="rep__description">{description}</div>

            {homepage && (
                <div>
                    <a href={homepage} target="_blank" className="rep__link">
                        {getDomain(homepage)}
                    </a>
                </div>
            )}
            {topics && (
                <div className="rep__topiks">
                    {topics.map((top, i) => (
                        <div key={i} className="rep__topik">
                            {top}
                        </div>
                    ))}
                </div>
            )}
            <div className="rep__bottom">
                <StarIcon count={watchers} />
                <ForkIcon count={forks} />
            </div>
        </div>
    );
};
