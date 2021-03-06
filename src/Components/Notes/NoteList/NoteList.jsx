import Button from 'Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { notesOperations } from 'redux/notes';
import s from './NoteList.module.scss';

const { deleteNote } = notesOperations;

export default function NoteList() {
  const notes = useSelector(state => state.notes.entities);
  const dispatch = useDispatch();
  const time = value => {
    const formatTime = new Date(value);
    return formatTime.toDateString();
  };

  return (
    <div className={`container ${s.wrapper}`}>
      <h2 hidden>Note list</h2>
      <ul className={s.list}>
        {notes.map(e => (
          <li className={s.item} key={e.id}>
            <p className={s.title}>{e.title}</p>
            <p className={s.text}>{e.text}</p>
            <span className={s.time}>{time(e.createTime)}</span>
            <div className={s.btnList}>
              {/* <Button onClick={console.log('click')} className={s.changeBtn}>
                Change note
              </Button> */}
              <Button
                className={s.btn}
                onClick={() => dispatch(deleteNote(e.id))}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
