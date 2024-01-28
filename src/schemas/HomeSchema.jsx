import * as Yup from 'yup';

/*
* .string(): Bu alanının bir string olması gerektiğini belirtir.

* .required('zorunludur'): Bu, alanının boş olamayacağını belirtir. Eğer kullanıcı bu alanı doldurmazsa, 'zorunludur' şeklinde bir hata mesajı üretir.

* .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor'): Bu kısım, 'confirmPassword' değerini başka bir alanla karşılaştırarak eşleşip eşleşmediğini kontrol eder. 

*[Yup.ref('password'), null] ifadesi, confirmPassword değerini, password alanıyla eşleştirmesi gerektiğini belirtir. İki şifre alanının eşleşmemesi durumunda, 'Şifreler eşleşmiyor' şeklinde bir hata mesajı üretir.
*/

export const validateSchema = Yup.object({
  email: Yup.string().email('*Geçerli bir email adresi girin').required('*Email zorunludur'),
  age: Yup.number()
    .integer('*Yaş alanı tam sayi olmalıdır')
    .min(13, 'Yaşınız en az 13 olmalıdır')
    .max(110, 'Gerçek yaşınızı giriniz')
    .required('*Yaş zorunludur'),
  password: Yup.string()
    .min(6, '*En az 6 karakter girin')
    .max(16, '*En fazla 16 karakter girebilirsin')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'En az bir büyük harf ve bir sayı girin')
    .required('*Şifre zorunludur'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], '*Şifreler eşleşmiyor')
    .required('*Şifre tekrarı zorunludur'),
});
