import { useState } from "react";

const ColorPicker = () => {
  const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];

  const [selectedColor, setSelectedColor] = useState("");

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className=" bg-blue-900 w-[15rem] h-[10rem] ml-[40rem] items-center justify-center mt-[1rem] rounded-2xl">
      <select className="items-center ml-[3rem] mt-[1rem]" value={selectedColor} onChange={handleColorChange}>
        <option value="">Select a color</option>
        {colors.map((color, index) => (
          <option key={index} value={color}>
            {color}
          </option>
        ))}
      </select>

      {selectedColor && (
        <div className="mt-[20px] w-[50px] h-[50px] ml-[3rem]" 
          style={{
            backgroundColor: selectedColor.toLowerCase(),
          }}
        ></div>
      )}
    </div>
  );
};

export default ColorPicker;
