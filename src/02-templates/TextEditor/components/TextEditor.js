import { Editor, EditorState, RichUtils } from "draft-js";
import React, { useState } from "react";
import styles from "./TextEditor.module.css";
import { useRef } from "react";
import BtnStyleText from "../ui/BtnStyleText";

function TextEditor({ handleSaveText }) {
  const INLINE_STYLES = [
    { label: <b>Bold</b>, style: "BOLD" },
    { label: <i>Italic</i>, style: "ITALIC" },
    { label: <u>Underline</u>, style: "UNDERLINE" },
    { label: <s>Strikethrough</s>, style: "STRIKETHROUGH" },
  ];

  const BLOCK_TYPES = [
    /* Заголовки */
    { label: "h1", style: "header-one" },
    { label: "h2", style: "header-two" },
    { label: "h3", style: "header-three" },
    { label: "h4", style: "header-four" },
    { label: "h5", style: "header-five" },
    { label: "h6", style: "header-six" },
    /* Цитата */
    { label: "blockquote", style: "blockquote" },
    /* Блок с кодом */
    { label: "code", style: "code-block" },
    /* Список */
    { label: "list", style: "unordered-list-item" },
    /* Нумерованный список */
    { label: "orderList", style: "ordered-list-item" },
    /* Сноска */
    { label: "cite", style: "cite" },
    /* Простой текст */
    { label: "default", style: "unstyled" },
  ];

  const editorRef = useRef(null);

  const handleFocusEditor = () => {
    editorRef.current.focus();
  };

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onChange = (editorState) => setEditorState(editorState);

  const onChangeStyleClick = (style) => {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  let checkFocusBtn = editorState.getCurrentInlineStyle().toArray();

  const saveText = () =>
    handleSaveText(editorState.getCurrentContent().getPlainText());

  return (
    <>
      <div className={styles.panel_textEditor}>
        <div>
          
        </div>
        <div>
          {INLINE_STYLES.map((style) => {
            return (
              <BtnStyleText
                clickFn={onChangeStyleClick}
                checkFocusBtn={checkFocusBtn}
                style={style.style}
                value={style.label}
              />
            );
          })}
        </div>
      </div>
      <div
        onClick={handleFocusEditor}
        onBlur={saveText}
        className={styles.editor_main}
      >
        <Editor
          onClick={checkFocusBtn}
          ref={editorRef}
          editorState={editorState}
          onChange={setEditorState}
        />
      </div>
    </>
  );
}

export default TextEditor;
