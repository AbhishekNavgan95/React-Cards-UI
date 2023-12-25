import React from "react";

const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  function categoryHandler(title) {
    setCategory(title);
  }

  return (
    <div className="flex justify-center gap-2 py-3 bg-orange-200">
      {filterData.map((data) => (
        <button
          onClick={() => categoryHandler(data.title)}
          className={`bg-red-500 px-3 py-1 text-white text-lg border-2 font-medium rounded-md hover:bg-opacity-60 transition-all duration-300 ${
            category === data.title ? "border-white" : " border-transparent"
          }`}
          key={data.id}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
