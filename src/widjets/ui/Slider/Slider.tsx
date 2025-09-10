import { useEffect, useRef, useState } from 'react';
import { Repository } from '../../../shared';
import './Slider.css';
import { useGetRepositoriesQuery } from './sliderSlice';
import { IconLeft } from './ui/IconLeft';
import { IconRight } from './ui/IconRight';
import type { TRep } from '../../../types';

export const Slider = () => {
    const { data, isLoading } = useGetRepositoriesQuery('javascript');
    const [reps, setReps] = useState<TRep[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const refsContainer = useRef<HTMLDivElement[]>([]);

    const toogleClassScroll = (next: number = 0, curr?: number) => {
        if (curr !== undefined && refsContainer.current[curr]) {
            refsContainer.current[curr].classList.remove('slider__rep-active');
        }
        if (refsContainer.current[next]) {
            refsContainer.current[next].classList.add('slider__rep-active');
        }
    };

    useEffect(() => {
        if (data && data.length > 0) {
            setReps(data);
        }
    }, [data]);

    useEffect(() => {
        if (reps.length > 0 && refsContainer.current[0]) {
            toogleClassScroll(0);
        }
    }, [reps]);

    if (isLoading) {
        return <h1>Загрузка</h1>;
    }

    const handleOnclickRight = () => {
        if (reps.length === 0) return;
        const next = (currentIndex + 1) % reps.length;
        setCurrentIndex(next);
        toogleClassScroll(next, currentIndex);
        refsContainer.current[next]?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleOnclickLeft = () => {
        if (reps.length === 0) return;
        const prev = currentIndex === 0 ? reps.length - 1 : currentIndex - 1;
        setCurrentIndex(prev);
        toogleClassScroll(prev, currentIndex);
        refsContainer.current[prev]?.scrollIntoView({ behavior: 'smooth' });
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
                            containerRef={(element) => {
                                if (element)
                                    refsContainer.current[index] = element;
                            }}
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
