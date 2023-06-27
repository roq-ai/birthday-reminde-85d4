import * as yup from 'yup';

export const familyMemberValidationSchema = yup.object().shape({
  name: yup.string().required(),
  birthday: yup.date().required(),
  user_id: yup.string().nullable(),
});
