import type { FC, HTMLAttributes } from 'react';
import './Button.css';
import classNames from 'classnames';
interface Props extends HTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick: VoidFunction;
    className: string;
}

export const Button: FC<Props> = ({ text, onClick, className }) => {
    return (
        <div className={classNames('button', className)} onClick={onClick}>
            <button>{text}</button>
        </div>
    );
};
