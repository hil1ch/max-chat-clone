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
    <div className="rounded-3xl bg-white max-w-145 w-full flex flex-col gap-7 items-center py-8 border border-solid border-[#0000001a] shadow-[0_4px_24px_#00000014]">
      <img
        src="https://web.max.ru/_app/immutable/assets/authLogo.CnGYimnD.png"
        className="max-w-9 w-full object-cover"
      />
      <h3 className="text-xl leading-5.5 font-semibold max-w-76 w-full">
        {isPhoneForm
          ? "Введите номер телефона получателя"
          : "С какими учетными данными хотите войти?"}
      </h3>
      <UIForm onSubmit={handleSubmit}>
        {isPhoneForm ? (
          <PhoneForm setIsPhoneForm={setIsPhoneForm} />
        ) : (
          <>
            <UIInput type="text" placeholder="idInstance" />
            <UIInput type="text" placeholder="apiTokenInstance" />
            <UIButton type="submit" variant="primary">
              Продолжить
            </UIButton>
          </>
        )}
      </UIForm>
    </div>
  );
};
