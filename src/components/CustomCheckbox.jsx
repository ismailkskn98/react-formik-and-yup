import { useField } from 'formik';

// eslint-disable-next-line react/prop-types
function CustomInput({ label, ...props }) {
  const [field, { error, touched }] = useField(props);

  //   console.log(field);
  //   console.log(error, touched);
  return (
    <>
      <div className="w-11/12 lg:min-w-96 flex flex-col gap-2 pb-3 lg:pb-5 relative">
        <label className="flex items-center gap-2" htmlFor={field.name}>
          <input id={field.name} {...field} {...props} />
          <p className={`${error && touched && 'underline decoration-red-500'}`}>{label}</p>
        </label>
        {error && <div className="text-sm text-red-500 absolute top-0 right-0">{error}</div>}
      </div>
    </>
  );
}

export default CustomInput;
