import { useState } from 'react';

const AddCounter = ({ addCounter }) => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add an item');
      return;
    }

    addCounter({text, count});
    setText('');
    setCount(0);
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="container p-3 border">
        <div className="row g-3">
          <div className="col-5">
            <input 
              type="text" 
              className="form-control" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Name" 
              aria-label="Name" />
          </div>
          <div className="col-5">
            <input type="text" id="count" className="form-control" placeholder="Count" aria-label="Count" />
          </div>
          <div className="col">
            <input type="submit" value="Add" className="btn btn-secondary btn-block"/>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddCounter