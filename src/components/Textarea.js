export const Textarea = ({ rows, onChange, value }) => {
  return (
    <div className="h-full">
      <textarea
        id="textarea"
        value={value}
        rows={rows}
        className="outline-none border-[1px] border-gray-1 rounded-md bg-primary h-full px-3 items-center text-gray-2 w-[616px] resize-none  content-center"
        onChange={onChange}
      />
    </div>
  );
};
