export const Textarea = ({
  rows,
  onChange,
  value,
  onBlur,
  onClose,
  showClose = false,
}) => {
  return (
    <div className="relative h-full w-full">
      <textarea
        id="textarea"
        value={value}
        rows={rows}
        className="outline-none border-[1px] border-gray-1 rounded-md bg-primary h-full px-3 pt-1 pb-2 text-gray-2 w-full resize-none "
        onChange={onChange}
        onBlur={onBlur}
      />
      {showClose && (
        <button
          className="absolute top-2 right-2 text-gray-2 hover:text-purple-1"
          onClick={onClose}
        >
          ✕
        </button>
      )}
    </div>
  );
};
