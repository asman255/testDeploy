import React, { useState } from "react";

function DropDownAddr() {
  const [value, setValue] = useState("");
  const options = [
    { key: 1, label: "สถานะทั้งหมด", value: 1 },
    { key: 2, label: "รอชำระ", value: 2 },
    { key: 3, label: "จัดส่งแล้ว", value: 3 },
  ];

  function handleSelect(event) {
    setValue(event.target.value);
  }

  return (
    <div className="flex  m-2 ">
      <div className=" p-3 border rounded w-full bg-white">
        {/* <h4>ที่อยู่จัดส่ง</h4> */}
        <select className="form-select w-full " onChange={handleSelect}>
          {options.map((options) => (
            <option className="w-10" key={options.key} value={options.value}>
              {options.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default DropDownAddr;
