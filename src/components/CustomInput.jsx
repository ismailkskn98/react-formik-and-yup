import { useField } from 'formik';

/*
useField hook'u, Formik'in form elemanları için sağladığı bir kancadır. Bu hook, form elemanının durumunu ve değerini yönetir. field ve meta değişkenleri, form elemanının durumunu ve diğer bilgilerini içerir.

field değişkeni, form elemanının Formik tarafından beklenen özelliklerini içerir. Bu özellikler, form elemanının değeri, ismi, onChange işlevi gibi bilgileri içerir. Bu sayede, form elemanınızı Formik ile senkronize edebilirsiniz.

meta değişkeni, form elemanının doğrulama durumu ile ilgili bilgileri içerir. Bu bilgileri kullanarak, form elemanının doğrulama hatası olup olmadığını kontrol edebilir ve gerekirse hata mesajlarını gösterebilirsiniz.
*/

// eslint-disable-next-line react/prop-types
function CustomInput({ label, ...props }) {
  //   const [field, meta] = useField(props); // burada props ile aldığımız değerleri field ve meta ile paylaşıyoruz
  const [field, { error, touched }] = useField(props); // burada props ile aldığımız değerleri field ve meta ile paylaşıyoruz

  // console.log(field);
  //   console.log(meta);
  //   console.log(error, touched);
  return (
    <>
      <div className="w-11/12 lg:min-w-96 flex flex-col gap-2 pb-3 lg:pb-5 relative">
        <label className="font-bold text-sm lg:text-base" htmlFor={field.name}>
          {label}
        </label>
        {/* field => value, onChange, onBlur */}
        {/* props => name, type, placeholder */}
        <input
          {...field}
          {...props}
          id={field.name}
          className={`px-3 py-2 border border-solid border-gray-100 text-gray-600 text-sm outline-none tracking-wider rounded-sm ${
            error && touched && 'input-error'
          }`}
        />
        {error && <div className="text-sm text-red-500 absolute top-0 right-0">{error}</div>}
      </div>
    </>
  );
}

export default CustomInput;
