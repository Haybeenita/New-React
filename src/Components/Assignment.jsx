import  { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <div className="mt-[1rem]">
      <button className="border hover:bg-orange-600 text-white w-[6rem] rounded-xl"
      onClick={toggleVisibility}>
        CLICK ME
      </button>
      {isVisible && <p className="text-white flex justify-center">EBERE IS A GOOD GIRL.</p>}
    </div>
  );
};

export default ToggleText;
