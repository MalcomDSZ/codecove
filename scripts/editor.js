// scripts/editor.js

import * as monaco from 'https://cdn.jsdelivr.net/npm/monaco-editor@0.34.1/+esm';

export function initEditor() {
  const editorContainer = document.getElementById('code-editor');
  editorContainer.innerHTML = '';
  window.editor = monaco.editor.create(editorContainer, {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    fontSize: 14,
    automaticLayout: true,
    minimap: { enabled: false },
    lineNumbers: 'on'
  });
}

export function loadChallengeInEditor(code) {
  if (window.editor) {
    window.editor.setValue(code);
  }
}
