import './ModalRep.css';
import { Repository } from '../../../shared';
import { createPortal } from 'react-dom';
import { Button } from '../../../shared/Button/Button';
import type { FC } from 'react';
interface Props {
    text: string;
    description?: string;
    nameCompany?: string;
    site?: string;
    onclickClose?: () => void;
}

export const ModalRep: FC<Props> = ({ onclickClose }) => {
    return createPortal(
        <div className="modal-rep-wrap" onClick={onclickClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <Button
                    text="✘"
                    className="modal__button "
                    onClick={onclickClose}
                />
                <Repository
                    className="modal-rep"
                    id={1}
                    description={'descript'}
                    forks={123}
                    name={'name'}
                    language={'React'}
                    watchers={555}
                    homepage="vovaHome"
                    topics={['kyka', 'poka', 'pika']}
                />
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    );
};
