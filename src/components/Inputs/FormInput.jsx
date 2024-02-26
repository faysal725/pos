export default function FormInput({
  type = "text",
  value = "",
  placeholder = "Input Something",
  changedValue,
  label = "something",
  errorMsg = "",
}) {
  const ErrorComponent = () => {
    return <p className="text-xs text-red-500 pt-1">{errorMsg}</p>;
  };
  return (
    <div>
      <label
        htmlFor={label}
        className="block  font-medium leading-6 text-gray-900 uppercase"
      >
        
      </label>
      <div className="mt-2">
        <input
          onChange={(e) => changedValue(e.target.value)}
          type={type}
          name={label}
          id={label}
          className="block w-full  border-b border-b-slate-300  text-gray-900 shadow-sm ring-0 outline-none ring-inset ring-gray-300 placeholder:text-gray-400  text-lg sm:leading-6 "
          placeholder={label}
        />
        {errorMsg !== "" ? ErrorComponent() : <></>}

        {/* <CheckIcon className="h-5 w-5 text-black" /> */}
      </div>
    </div>
  );
}
