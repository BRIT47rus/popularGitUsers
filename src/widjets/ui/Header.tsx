import type { FC } from 'react';
import './Header.css';
interface Props {
    text: string;
    description?: string;
    nameCompany?: string;
}

export const Header: FC<Props> = ({ text, description, nameCompany }) => {
    return (
        <>
            {nameCompany && <span>{nameCompany}</span>}
            <h2 className="title__title">{text}</h2>
            {description && (
                <div className="title__description">{description}</div>
            )}
        </>
    );
};
