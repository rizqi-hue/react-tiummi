const FormSurveiDetailItemAssisten = (props: any) => {
  const { id, nama, jab, status, onChange } = props;

  return (
    <>
      <div className="flex flex-col items-start w-full">
        <div className="mt-4 text-md text-gray-600">{nama}</div>
      </div>
      <div className="flex flex-row">
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="100"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">100</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="95"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">95</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="90"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">90</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="85"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">85</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="80"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">80</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="75"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">75</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="70"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">70</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="65"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">65</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="60"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">60</p>
        </div>
        <div className="flex items-center w-20 py-1 pl-1 pr-1 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`as` + id}
            id={`${id}`}
            value="50"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">50</p>
        </div>
      </div>
    </>
  );
};

export default FormSurveiDetailItemAssisten;
