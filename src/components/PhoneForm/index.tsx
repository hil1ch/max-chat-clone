import { UIButton } from "../ui/UIButton";
import { UIInput } from "../ui/UIInput";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { IInputsForm } from "../../types/forms";

interface IPhoneForm {
  setIsPhoneForm: (isPhoneForm: boolean) => void;
  register: UseFormRegister<IInputsForm>;
  errors: FieldErrors<IInputsForm>;
  validateInput: (value: string) => boolean;
}

export const PhoneForm = ({
  setIsPhoneForm,
  register,
  errors,
  validateInput,
}: IPhoneForm) => {
  return (
    <>
      <UIInput
        type="tel"
        placeholder="+7 123 456 78 90"
        variant="formInput"
        error={Boolean(errors.phone)}
        {...register("phone", {
          required: "Введите номер телефона",
          validate: validateInput,
          pattern: {
            value: /^\+7(?: \d{3} \d{3} \d{2} \d{2}|\d{10})$/,
            message:
              "Введите номер в формате +7 123 456 78 90 или +71234567890",
          },
        })}
      />
      <UIButton type="submit" variant="primary">
        Создать чат
      </UIButton>
      <UIButton
        type="button"
        variant="outline"
        classname="text-action-primary"
        onClick={(event) => {
          event.stopPropagation();
          setIsPhoneForm(false);
        }}
      >
        Назад
      </UIButton>
    </>
  );
};
