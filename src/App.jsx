import RouterContainer from './components/RouterContainer';
import './app.scss';

/*
* Formik ve Yup, React tabanlı web uygulamalarında form yönetimi ve doğrulama işlemlerini kolaylaştırmak için kullanılan kütüphanelerdir.

? Formik:
Formik, React uygulamalarında form yönetimini kolaylaştırmak için kullanılan bir form kütüphanesidir.
Formik, form durumu, değerler, gönderim işlemleri gibi işlemleri daha organize bir şekilde yönetmeyi sağlar.
Ayrıca, formunun durumu, gönderim işlemi gibi olaylar için React Hooks API'lerini kullanır.

?Yup:
Yup, JavaScript tabanlı bir nesne doğrulama (validation) kütüphanesidir.
Formların kullanıcı tarafından doğru bir şekilde doldurulup doldurulmadığını kontrol etmek için kullanılır.
Özellikle form verilerinin geçerliliğini kontrol etmek amacıyla kullanılır.
*/

function App() {
  return (
    <>
      <RouterContainer />
    </>
  );
}

export default App;
