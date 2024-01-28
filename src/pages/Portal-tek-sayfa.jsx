import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateSchema } from '../schemas/PortalSchema';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';

// başlangıç değerleri
const initialValues = {
  username: '',
  universities: '',
  toggle: false,
};

// üniversilerler (select => options)
const universities = [
  { value: '', label: 'Lütfen Üniversitenizi Seçiniz', disabled: true },
  { value: 'sivasCumhuriyetUniversitesi', label: 'Sivas Cumhuriyet Üniversitesi' },
  { value: 'samsun19MayisUniversitesi', label: 'Samsun 19 Mayıs Üniversitesi' },
  { value: 'cukurovaUniversitesi', label: 'Çukurova Üniversitesi' },
];

// form submit olduğunda
const onSubmit = (values, { setSubmitting, resetForm }) => {
  console.log('form bilgileri: ', values);
  setTimeout(() => {
    resetForm();
    setSubmitting(false);
  }, 1500);
};

function Portal() {
  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={onSubmit}>
        {({ errors, touched, isValid, isSubmitting }) => (
          <Form className="w-11/12 lg:w-3/4 xl:w-2/4 2xl:w-1/4 mx-auto flex flex-col items-center gap-2 shadow-lg shadow-cyan-500/50 rounded-sm px-2 lg:px-5 py-3 lg:py-5">
            <h1 className="w-full text-center text-3xl lg:text-5xl font-bold mt-5 lg:mt-8 mb-5">
              Giriş Yap
            </h1>
            {/* username */}
            <div className="w-11/12 lg:min-w-96 flex flex-col gap-2 pb-3 lg:pb-5 relative">
              <label className="font-bold text-sm lg:text-base" htmlFor="username">
                Kullanıcı Adı
              </label>
              <Field
                className={`px-3 py-2 border border-solid border-gray-100 text-gray-600 text-sm outline-none tracking-wider rounded-sm ${
                  errors.username && touched.username && 'input-error'
                }`}
                type="text"
                name="username"
                id="username"
                placeholder="Kullanıcı adınızı giriniz"
              />
              <ErrorMessage
                className="text-sm text-red-500 absolute top-0 right-0"
                name="username"
                component={'div'}
              />
            </div>
            {/* select => üniversite */}
            <div className="w-11/12 lg:min-w-96 flex flex-col gap-2 pb-3 lg:pb-5 relative">
              <label className="font-bold text-sm lg:text-base" htmlFor="universities">
                Okulunuz
              </label>
              <Field
                name="universities"
                id="universities"
                as="select"
                className={`text-gray-700 px-3 py-2 text-sm tracking-wider outline-none ${
                  errors.universities && touched.universities && 'input-error'
                }`}
              >
                {universities.map((item, i) => (
                  <option key={i} value={item.value} disabled={item.disabled}>
                    {item.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                className="text-sm text-red-500 absolute top-0 right-0"
                name="universities"
                component={'div'}
              />
            </div>
            {/* checkbox */}
            <div className="w-11/12 lg:min-w-96 flex flex-col gap-2 pb-3 lg:pb-5 relative">
              <label className="flex items-center gap-2">
                <Field className="w-4 h-4 accent-cyan-500" type="checkbox" name="toggle" />
                <p className={`${errors.toggle && touched.toggle && 'underline decoration-red-500'}`}>
                  Kullanım şartlarını kabul ediyorum.
                </p>
              </label>
              <ErrorMessage
                className="text-sm text-red-500 absolute top-0 right-0"
                name="toggle"
                component={'div'}
              />
            </div>
            {/* links */}
            <div className="w-11/12 lg:min-w-96 mb-3 flex justify-between items-center">
              <Link
                className="block underline text-base lg:text-lg hover:text-cyan-500/50 transition-all"
                to="/"
              >
                Anasayfaya Git
              </Link>
              <button
                className={`border-none text-base lg:text-lg py-1 px-5 lg:px-7 transition-all ${
                  isValid
                    ? 'bg-cyan-500/50 text-white hover:bg-white hover:text-cyan-500/50'
                    : 'bg-white text-gray-500'
                }`}
                type="submit"
                disabled={!isValid}
              >
                {isSubmitting ? (
                  <p className="flex gap-1 items-center">
                    Giriş Yapılıyor
                    <SyncLoader className="transition-all" color="white" size={5} />
                  </p>
                ) : (
                  'Giriş Yap'
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Portal;
