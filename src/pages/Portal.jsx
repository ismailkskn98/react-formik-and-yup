import { Formik, Form } from 'formik';
import { validateSchema } from '../schemas/PortalSchema';
import CustomInput from '../components/CustomInput';
import CustomSelect from '../components/CustomSelect';
import CustomCheckbox from '../components/CustomCheckbox';
import FormButton from '../components/FormButton';

// üniversilerler (select => options)
const universities = [
  { value: '', label: 'Lütfen Üniversitenizi Seçiniz', disabled: true },
  { value: 'sivasCumhuriyetUniversitesi', label: 'Sivas Cumhuriyet Üniversitesi' },
  { value: 'samsun19MayisUniversitesi', label: 'Samsun 19 Mayıs Üniversitesi' },
  { value: 'cukurovaUniversitesi', label: 'Çukurova Üniversitesi' },
];

// başlangıç değerleri
const initialValues = {
  username: '',
  universities: '',
  toggle: false,
};

// form submit olduğunda
const onSubmit = (values, { resetForm }) => {
  console.log('form bilgileri: ', values);
  setTimeout(() => {
    resetForm();
  }, 1500);
};

function Portal() {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={onSubmit}
        validateOnChange={true}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="w-11/12 lg:w-3/4 xl:w-2/4 2xl:w-1/4 mx-auto flex flex-col items-center gap-2 shadow-lg shadow-cyan-500/50 rounded-sm px-2 lg:px-5 py-3 lg:py-5">
            <h1 className="w-full text-center text-3xl lg:text-5xl font-bold mt-5 lg:mt-8 mb-5">
              Giriş Yap
            </h1>
            <CustomInput
              label="Kullanıcı Adı"
              name="username"
              type="text"
              placeholder="Kullanıcı adınızı giriniz"
            />
            <CustomSelect label="Okulunuz" name="universities">
              {universities.map((item, i) => (
                <option key={i} value={item.value}>
                  {item.label}
                </option>
              ))}
            </CustomSelect>
            <CustomCheckbox label={'Kullanım şartlarını kabul ediyorum.'} type="checkbox" name="toggle" />

            {/* submit & link */}
            <FormButton
              buttonText={'Giriş Yap'}
              submitText={'Giriş Yapılıyor'}
              isSubmitting={isSubmitting}
              isValid={isValid}
              link={'/'}
              linkText={'Anasayfaya Git'}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Portal;
