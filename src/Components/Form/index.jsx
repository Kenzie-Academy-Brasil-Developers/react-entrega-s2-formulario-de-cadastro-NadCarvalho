import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../Components/Input"
import Button from '@material-ui/core/Button';

const Form = ({handleLogin}) => {
  const schema = yup.object().shape({
    name: yup.string()
    .min(3, "Mínimo de 3 caracteres")
      .matches(/^[aA-zZ\s]+$/, "O nome deve conter apenas letras")
      .required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .required("Senha obrigatória")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha deve conter ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      ),
    passwordConfirm: yup.string().required("Senha obrigatória").oneOf([yup.ref("password")], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleMyForm = (data) => {
    handleLogin(data.name);
    //mandar pro backend
  };

  return (
    <form onSubmit={handleSubmit(handleMyForm)}>
      <div>
        <Input 
          formHook={register("name")}
          label={"Name"}
          error={errors.name}
          helperText={errors.name?.message}
        />
      </div>
      <div>
        <Input 
          formHook={register("email")}
          label={"Email"}
          error={errors.email}
          helperText={errors.email?.message}
        />
      </div>
      <div>
        <Input
          formHook={register("password")}
          label={"Password"}
          type={"password"}
          error={errors.password}
          helperText={errors.password?.message}
        />
      </div>
      <div>
        <Input
          formHook={register("passwordConfirm")}
          label={"Password Confirm"}
          type={"password"}
          error={errors.passwordConfirm}
          helperText={errors.passwordConfirm?.message}
        />
      </div>
      <div>
        <Button type="submit" variant="contained">Cadastrar</Button>
      </div>
    </form>
  );
};

export default Form;