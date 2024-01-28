import * as Yup from 'yup';

// form validate
export const validateSchema = Yup.object({
  username: Yup.string().min(3, '*En az 3 karakter girin').required('*Kullanıcı Adı zorunludur'),
  universities: Yup.string()
    .oneOf(
      ['sivasCumhuriyetUniversitesi', 'samsun19MayisUniversitesi', 'cukurovaUniversitesi'],
      'Geçerli bir üniversite seçiniz'
    )
    .required('*Bu alan zorunludur'),
  toggle: Yup.bool().oneOf([true], '*Bu alan zorunludur'),
});
