import { useEffect, useState } from 'react';
import { Repository } from '../../../shared';
import './Slider.css';
import { useGetRepositoriesQuery } from './sliderSlice';
import { IconLeft } from './ui/IconLeft';
import { IconRight } from './ui/IconRight';
import type { TRep } from '../../../types';

export const Slider = () => {
    const { data, isLoading } = useGetRepositoriesQuery('javascript');
    const [reps, setReps] = useState<TRep[] | undefined>(undefined);
    useEffect(() => {
        if (data && data.length > 0) {
            setReps(data);
        }
    }, [data]);

    if (isLoading) {
        return <h1>Загрузка</h1>;
    }
    return (
        <div className="slider">
            <div className="slider__left">
                <IconLeft />
            </div>
            {reps &&
                reps.map((rep) => (
                    <Repository
                        id={rep.id}
                        key={rep.id}
                        description={rep.description}
                        forks={rep.forks}
                        name={rep.name}
                        language={rep.language}
                        topics={rep.topics}
                        watchers={rep.watchers}
                    />
                ))}

            <div className="slider__right">
                <IconRight />
            </div>
        </div>
    );
};
