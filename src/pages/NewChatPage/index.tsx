import { useState } from "react";

import { UIForm } from "../../components/ui/UIForm";
import { PhoneForm } from "../../components/PhoneForm";
import { InstanceForm } from "../../components/InstanceForm";

import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { IInputsForm } from "../../types/forms";

// import { useNavigate } from "react-router";

export const NewChatPage = () => {
  const [isPhoneForm, setIsPhoneForm] = useState(false);
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputsForm>();

  const validateInput = (value: string) => {
    return value.trim().length > 0;
  };

  const onSubmit: SubmitHandler<IInputsForm> = (data) => {
    if (!isPhoneForm) {
      setIsPhoneForm(true);
      return;
    }

    console.log(data);
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
      <UIForm onSubmit={handleSubmit(onSubmit)}>
        {isPhoneForm ? (
          <PhoneForm
            setIsPhoneForm={setIsPhoneForm}
            register={register}
            errors={errors}
            validateInput={validateInput}
          />
        ) : (
          <InstanceForm
            register={register}
            errors={errors}
            validateInput={validateInput}
          />
        )}
      </UIForm>
    </div>
  );
};
