export const Slider = ({ value, onChange, min, max, step = 1 }) => {
  const bgValue = ((value - min) / (max - min)) * 100;

  return (
    <div className="h-full">
      <input
        id="slider"
        type="range"
        step={step}
        min={min}
        max={max}
        className="w-[616px] h-full"
        value={value}
        onChange={onChange}
        style={{
          background: `linear-gradient(to right, #BEB4F4 ${bgValue}%, #2D3838 ${bgValue}%)`,
        }}
      />
    </div>
  );
};
