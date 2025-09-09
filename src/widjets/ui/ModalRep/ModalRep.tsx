import type { FC } from 'react';
import './ModalRep.css';
interface Props {
    text: string;
    description?: string;
    nameCompany?: string;
    site?: string;
}

export const ModalRep: FC<Props> = ({ text, description, nameCompany }) => {
    return (
        <div className="app__header-wrap">
            {nameCompany && <span>{nameCompany}</span>}
            <h2 className="title__text">{text}</h2>
            {description && (
                <div className="title__description">{description}</div>
            )}
        </div>
    );
};
