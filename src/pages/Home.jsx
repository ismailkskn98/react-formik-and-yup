import FormButton from '../components/FormButton';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateSchema } from '../schemas/HomeSchema';

// başlangıç değerleri
const initialValues = {
  email: '',
  age: '',
  password: '',
  confirmPassword: '',
};

//f orm items
const form = [
  {
    id: 'email',
    name: 'email',
    type: 'email',
    placeHolder: 'Email adresinizi giriniz',
    label: 'Email',
    component: 'div',
  },
  {
    id: 'age',
    name: 'age',
    type: 'number',
    placeHolder: 'Yaşınızı giriniz',
    label: 'Yaş',
    component: 'div',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeHolder: 'Şifrenizi Giriniz',
    label: 'Şifre',
    component: 'div',
  },
  {
    id: 'confirmPassword',
    name: 'confirmPassword',
    type: 'password',
    placeHolder: 'Şifrenizi tekrar giriniz',
    label: 'Şifre Tekrarı',
    component: 'div',
  },
];

// form submit
const onSubmit = (values, { setSubmitting, resetForm }) => {
  console.log('Form Değerleri: ', values);
  // console.log(actions);

  setTimeout(() => {
    resetForm();
    setSubmitting(false);
  }, 1500);
};

function Home() {
  return (
    <>
      {/* Formik ve Yup kullanarak oluşturduğunuz bir formun değerlerini almak için Formik'in içerisinde yer alan onSubmit fonksiyonunu kullanabilirsiniz. Bu fonksiyon, form gönderildiğinde çalışacak olan fonksiyondur. */}
      <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={onSubmit}>
        {({ isValid, isSubmitting }) => (
          <Form className="w-11/12 lg:w-3/4 xl:w-2/4 2xl:w-1/4 mx-auto flex flex-col items-center gap-2 shadow-lg shadow-cyan-500/50 rounded-sm px-2 lg:px-5 py-3 lg:py-5">
            <h1 className="w-full text-center text-3xl lg:text-5xl font-bold mt-5 lg:mt-8 mb-5">
              Kayıt Ol
            </h1>
            {/* <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" /> */}
            {/* <ErrorMessage> bileşeni, Formik kütüphanesinde bir form alanının doğrulama hatası durumunda gösterilecek hata mesajını işler. */}
            {/* name="email": Bu, hata mesajının hangi form alanına ait olduğunu belirtir. Yani, bu alan adı, Field bileşeni içindeki name özelliği ile aynı olmalıdır. */}
            {/* component="div": Bu, hata mesajının hangi HTML öğesi içinde gösterileceğini belirtir. Yani, hata mesajını bir <div> içinde göstermek istiyorsak component="div" olarak belirtiriz. Başka bir örnek olarak component="span" kullanabiliriz. Bu, stil veya yapısal tercihlere bağlı olarak değişebilir. */}
            {/* </div> */}
            {/* form items */}
            {form.map((item, i) => (
              <div className="w-11/12 lg:min-w-96 flex flex-col gap-2 pb-3 lg:pb-5 relative" key={i}>
                <label className="text-sm lg:text-base font-bold" htmlFor={item.id}>
                  {item.label}
                </label>
                <Field
                  className="px-3 py-2 text-gray-600 text-sm outline-none tracking-wider rounded-sm"
                  type={item.type}
                  id={item.id}
                  // name => initialValues'te tanımladığınız isimle aynı olmalıdır
                  name={item.name}
                  placeholder={item.placeHolder}
                />
                <ErrorMessage
                  className="text-sm text-red-500 absolute top-0 right-0"
                  name={item.name}
                  component={item.component}
                />
              </div>
            ))}
            <FormButton
              buttonText={'Kaydet'}
              submitText={'Kaydediliyor'}
              isSubmitting={isSubmitting}
              isValid={isValid}
              link={'/portal'}
              linkText={'Portala Git'}
            />
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Home;
