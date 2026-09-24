import { useState } from "react";

import { UIButton } from "../../components/ui/UIButton";
import { UIForm } from "../../components/ui/UIForm";
import { UIInput } from "../../components/ui/UIInput";
import { PhoneForm } from "../../components/PhoneForm";

export const NewChatPage = () => {
  const [isPhoneForm, setIsPhoneForm] = useState(false);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isPhoneForm) {
      setIsPhoneForm(true);
    }
  };

  return (
    <div className="rounded-3xl bg-surface max-w-145 w-full flex flex-col gap-7 items-center py-8 border border-solid border-border-card shadow-auth-card">
      <img
        src="https://web.max.ru/_app/immutable/assets/authLogo.CnGYimnD.png"
        className="max-w-9 w-full object-cover"
      />
      <h3 className="text-xl font-semibold max-w-76 w-full">
        {isPhoneForm
          ? "Введите номер телефона получателя"
          : "С какими учетными данными хотите войти?"}
      </h3>
      <UIForm onSubmit={handleSubmit}>
        {isPhoneForm ? (
          <PhoneForm setIsPhoneForm={setIsPhoneForm} />
        ) : (
          <>
            <UIInput type="text" placeholder="idInstance" variant="formInput" />
            <UIInput
              type="text"
              placeholder="apiTokenInstance"
              variant="formInput"
            />
            <UIButton type="submit" variant="primary">
              Продолжить
            </UIButton>
          </>
        )}
      </UIForm>
    </div>
  );
};
