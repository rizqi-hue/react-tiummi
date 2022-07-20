const FormSurveiDetailItem = (props: any) => {
  const { id, soal, status, onChange } = props;

  return (
    <>
      <div className="flex flex-col items-start w-full">
        <div className="mt-4 text-md text-gray-600">{soal}</div>
      </div>
      <div>
        <div className="flex items-center w-full py-1 pl-5 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`op` + id}
            id={`${id}`}
            value="1"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">Sangat Puas</p>
        </div>
        <div className="flex items-center w-full py-1 pl-5 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`op` + id}
            id={`${id}`}
            value="2"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">Cukup Puas</p>
        </div>
        <div className="flex items-center w-full py-1 pl-5 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`op` + id}
            id={`${id}`}
            value="3"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">Biasa Aja</p>
        </div>
        <div className="flex items-center w-full py-1 pl-5 m-1 ml-0 space-x-2 border-2 cursor-pointer border-gray-100 rounded-xl bg-gray-50">
          <input
            onChange={onChange}
            type="radio"
            name={`op` + id}
            id={`${id}`}
            value="4"
            className="w-6 h-6 bg-black"
          />
          <p className="ml-6 text-gray-500">Tidak Puas</p>
        </div>
      </div>
    </>
  );
};

export default FormSurveiDetailItem;
