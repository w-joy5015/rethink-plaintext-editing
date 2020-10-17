import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import path from 'path';
import css from './style.css';

function MarkdownEditor({ file, save }) {
  console.log(file);
  const [value, setValue] = useState('');

  const write = evt => {
    console.log('Writing soon... ');

    setValue(evt.target.value)
  };

  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);

  return (
    <div className={css.editor}>
      <div className={css.title}>{path.basename(file.name)}</div>
      <textarea className={css.content}
      rows="16" cols="60"
      onChange={write} value={value}>{value}
      </textarea>
      <button onClick={save}>Save Changes</button>
    </div>
  )
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  save: PropTypes.func
};

export default MarkdownEditor;
