import { UIButton } from "../ui/UIButton";
import { UIInput } from "../ui/UIInput";

interface IPhoneForm {
  setIsPhoneForm: (isPhoneForm: boolean) => void;
}

export const PhoneForm = ({ setIsPhoneForm }: IPhoneForm) => {
  return (
    <>
      <UIInput type="tel" placeholder="Номер телефона" />
      <UIButton type="submit" variant="primary">
        Создать чат
      </UIButton>
      <UIButton
        type="button"
        variant="outline"
        classname=" text-[#007aff]"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          setIsPhoneForm(false);
        }}
      >
        Назад
      </UIButton>
    </>
  );
};
