import { useEffect, useRef, useState } from 'react';
import { Repository } from '../../../shared';
import './Slider.css';
import { useGetRepositoriesQuery } from './sliderSlice';
import { IconLeft } from './ui/IconLeft';
import { IconRight } from './ui/IconRight';
import type { TRep } from '../../../types';

export const Slider = () => {
    const { data, isLoading } = useGetRepositoriesQuery('javascript');
    const [reps, setReps] = useState<TRep[] | undefined>(undefined);
    const [currentIndex, setCurrentIndex] = useState(0);
    const refsContainer = useRef<HTMLDivElement[]>([]);

    // const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (data && data.length > 0) {
            setReps(data);
        }
    }, [data]);

    if (isLoading) {
        return <h1>Загрузка</h1>;
    }
    // const scrollAmount = 200;

    const handleOnclickRight = () => {
        if (!reps) return;
        const next = (currentIndex + 1) % reps?.length;
        setCurrentIndex(next);
        refsContainer.current[next]?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleOnclickLeft = () => {
        if (!reps) return;
        const prev = currentIndex === 0 ? reps.length - 1 : currentIndex - 1;
        setCurrentIndex(prev);
        refsContainer.current[prev]?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <div className="slider">
            <div className="slider__left" onClick={handleOnclickLeft}>
                <IconLeft />
            </div>
            <div className="slider__rep-wrap">
                {reps &&
                    reps.map((rep, index) => (
                        <Repository
                            containerRef={(element: HTMLDivElement) =>
                                (refsContainer.current[index] = element)
                            }
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
            </div>

            <div className="slider__right" onClick={handleOnclickRight}>
                <IconRight />
            </div>
        </div>
    );
};
