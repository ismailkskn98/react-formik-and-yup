import { useField } from 'formik';

// eslint-disable-next-line react/prop-types
function CustomInput({ label, ...props }) {
  const [field, { error, touched }] = useField(props);

  //   console.log(field);
  //   console.log(error, touched);
  return (
    <>
      <div className="w-11/12 lg:min-w-96 flex flex-col gap-2 pb-3 lg:pb-5 relative">
        <label className="font-bold text-sm lg:text-base" htmlFor={field.name}>
          {label}
        </label>
        <select
          {...field}
          {...props}
          id={field.name}
          className={`text-gray-700 border border-transparent px-3 py-2 text-sm tracking-wider outline-none ${
            error && touched && 'input-error'
          }`}
        />
        {error && <div className="text-sm text-red-500 absolute top-0 right-0">{error}</div>}
      </div>
    </>
  );
}

export default CustomInput;
