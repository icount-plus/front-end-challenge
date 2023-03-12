export default function enterPress({ e, getInput, inputRef, checkRef }) {
  if (e.keyCode === 13) {
    getInput({
      inputText: inputRef.current.value,
      check: checkRef?.current.checked,
    });
  }
}
