import BraftEditor, { ControlType, EditorState } from 'braft-editor';
import 'braft-extensions/dist/table.css';
import styles from './index.module.less';

import React from 'react';

type Props = {
  inputValue?: string;
  fieldSet: string;
  handleChangeText: (text: string, fieldSet: string) => void;
};

const controls: ControlType[] = [
  'bold',
  'italic',
  'underline',
  'separator',
  'link',
  'separator',
  'text-align',
  // 'font-family',
  'font-size',
  'code',
  'remove-styles',
];

const RickTextEditor: React.SFC<Props> = React.memo(({ inputValue = '', fieldSet, handleChangeText }) => {
  const [editorState, setEditorState] = React.useState<EditorState>(BraftEditor.createEditorState(inputValue));

  const handleEditorChange = (editorStateVal: EditorState) => {
    setEditorState(editorStateVal);
    handleChangeText(editorStateVal?.toHTML(), fieldSet);
  };

  return (
    <BraftEditor
      placeholder="Type something"
      language="vi-vn"
      className={styles.boxEditor}
      controls={controls}
      value={editorState}
      onChange={handleEditorChange}
    />
  );
});
export default RickTextEditor;
