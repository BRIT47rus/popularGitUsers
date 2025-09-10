import { useEffect, useRef, useState } from 'react';
import { Repository, SkeletonRepository } from '../../../shared';
import './Slider.css';
import { useGetRepositoriesQuery } from './sliderSlice';
import { IconLeft } from './ui/IconLeft';
import { IconRight } from './ui/IconRight';
import type { TRep } from '../../../types';

const AnimateType = {
    in: 'in',
    enter: 'enter',
    out: 'out',
};

export const Slider = () => {
    const { data, isLoading } = useGetRepositoriesQuery('javascript');
    const [reps, setReps] = useState<TRep[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const refsContainer = useRef<HTMLDivElement[]>([]);
    const [animate, setAnimate] = useState(AnimateType.enter);

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

    //-----------------animate
    useEffect(() => {
        if (!refsContainer.current[currentIndex]) return;

        if (animate === AnimateType.in) {
            refsContainer.current[currentIndex].classList.remove(
                'slider__rep-out',
                'slider__rep-enter'
            );
            refsContainer.current[currentIndex].classList.add('slider__rep-in');
            setTimeout(() => setAnimate(AnimateType.enter), 500);
            refsContainer.current[currentIndex].classList.remove(
                'slider__rep-out'
            );
            refsContainer.current[currentIndex].classList.add(
                'slider__rep-enter'
            );
        } else if (animate === AnimateType.out) {
            refsContainer.current[currentIndex].classList.remove(
                'slider__rep-enter'
            );
            refsContainer.current[currentIndex].classList.add(
                'slider__rep-out'
            );
        }
    }, [animate, currentIndex]);

    const handleOnclickRight = () => {
        if (reps.length === 0) return;

        setAnimate(AnimateType.out);

        const next = (currentIndex + 1) % reps.length;

        setTimeout(() => {
            setCurrentIndex(next);
            toogleClassScroll(next, currentIndex);
            refsContainer.current[next]?.scrollIntoView({ behavior: 'smooth' });
            setAnimate(AnimateType.in);
        }, 500);
    };

    const handleOnclickLeft = () => {
        if (reps.length === 0) return;
        setAnimate(AnimateType.out);

        const prev = currentIndex === 0 ? reps.length - 1 : currentIndex - 1;

        setTimeout(() => {
            setCurrentIndex(prev);
            toogleClassScroll(prev, currentIndex);
            refsContainer.current[prev]?.scrollIntoView({ behavior: 'smooth' });
            setAnimate(AnimateType.in);
        }, 500);
    };

    return (
        <div className="slider">
            <div className="slider__left" onClick={handleOnclickLeft}>
                <IconLeft />
            </div>
            <div className="slider__rep-wrap">
                {isLoading && <SkeletonRepository />}
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
            {/* <SkeletonRepository /> */}

            <div className="slider__right" onClick={handleOnclickRight}>
                <IconRight />
            </div>
        </div>
    );
};
