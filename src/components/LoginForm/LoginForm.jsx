import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import { Field, Form, Formik } from "formik";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (e, { resetForm }) => {
    const data = { email: e.email, password: e.password };
    dispatch(logIn(data));
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={css.form}>
        <label className={css.label}>
          Email <br />
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password <br />
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
