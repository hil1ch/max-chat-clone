import { UIInput } from "../ui/UIInput";
import { UIButton } from "../ui/UIButton";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { IInputsForm } from "../../types/forms";

interface IInstanceForm {
  register: UseFormRegister<IInputsForm>;
  errors: FieldErrors<IInputsForm>;
  validateInput: (value: string) => boolean;
}

export const InstanceForm = ({
  register,
  errors,
  validateInput,
}: IInstanceForm) => {
  return (
    <>
      <UIInput
        type="text"
        placeholder="idInstance"
        variant="formInput"
        error={Boolean(errors.idInstance)}
        {...register("idInstance", {
          required: "Введите idInstance",
          validate: validateInput,
        })}
      />
      <UIInput
        type="text"
        placeholder="apiTokenInstance"
        variant="formInput"
        error={Boolean(errors.apiTokenInstance)}
        {...register("apiTokenInstance", {
          required: "Введите apiTokenInstance",
          validate: validateInput,
        })}
      />
      <UIButton type="submit" variant="primary">
        Продолжить
      </UIButton>
    </>
  );
};
