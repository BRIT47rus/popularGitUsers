import './ModalRep.css';
import { Repository } from '../../../shared';
import { createPortal } from 'react-dom';
import { Button } from '../../../shared/Button/Button';
import type { FC } from 'react';
import type { TRep } from '../../../types';
interface Props {
    rep: TRep;

    onclickClose?: () => void;
}

export const ModalRep: FC<Props> = ({ onclickClose, rep }) => {
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
                    id={rep.id}
                    description={rep.description}
                    forks={rep.forks}
                    name={rep.name}
                    language={rep.language}
                    watchers={rep.watchers}
                    homepage={rep.homepage}
                    topics={rep.topics}
                />
            </div>
        </div>,
        document.getElementById('modal') as HTMLElement
    );
};
