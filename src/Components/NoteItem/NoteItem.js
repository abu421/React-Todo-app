import React, {useState} from "react";
import remove from '../Icons/remove.svg';
import './NoteItem.css';

const NoteItem = ({item, setList}) => {

    const [completed, setCompletion] = useState(false);

    const deleteItem = () => {
        setList(list => list.filter((note) => note.id !== item.id));
    }

    const completeitem = (e) => {
        setCompletion(completion => !completion);
    }

    return (
        <div className="item_container">

            <div className="item">
                <span className={completed ? 'completed' : ''} >{item.value}</span>
            </div>
            
            <div className="button_container">

                <input type="checkbox" onChange={completeitem} className="checkmark" />

                <img src={remove} onClick={deleteItem} className='icon_delete' alt='delelte'/>
            </div>

        </div>
    );

}

export default NoteItem;
