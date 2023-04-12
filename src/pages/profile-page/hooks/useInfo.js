import { useContext, useEffect } from 'react';
import { UserContext } from '../../../store';
import { Validations } from '../../../modules/validation';

import { useFetch, useInput, useToggle, useValidatedInput } from '../../../hooks';

export const useInfo = () => {
  const [isEdit, switchEdit] = useToggle(false);

  const { userStore } = useContext(UserContext);
  const family = useInput('');
  const name = useInput('');
  const father = useInput('');
  const email = useInput('');
  const password = useValidatedInput('', new Validations().setMinLength(6).isRequired());
  const city = useInput('');

  const [doFetch, isLoading, error] = useFetch(async () => {
    const data = await userStore.getMe();
    family.setValue(data.family);
    name.setValue(data.name);
    father.setValue(data.father);
    email.setValue(data.email);
    password.setValue(data.password);
    city.setValue(data.city);
  });
  useEffect(() => { doFetch() }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await userStore.updateMe({
      family: family.value,
      name: name.value,
      father: father.value,
      email: email.value,
      password: password.value,
      city: city.value
    });
    switchEdit();
  };

  const { setValue: svfam, ...familyData } = { ...family };
  const { setValue: svn, ...nameData } = { ...name };
  const { setValue: svfat, ...fatherData } = { ...father };
  const { setValue: sve, ...emailData } = { ...email };
  const { isValid: ivp, setValue: svp, ...passwordData } = { ...password };
  const { setValue: svc, ...cityData } = { ...city };
  return {
    edit: { isEdit, switchEdit },
    family: { ...familyData },
    name: { ...nameData },
    father: { ...fatherData },
    email: { ...emailData },
    password: { ...passwordData },
    city: { ...cityData },
    onSubmit
  };
};