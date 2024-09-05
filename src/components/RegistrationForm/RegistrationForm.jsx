import { useDispatch } from "react-redux";
import css from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import { Field, Form, Formik } from "formik";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
    name: "",
  };

  const handleSubmit = (e, { resetForm }) => {
    const data = { email: e.email, password: e.password, name: e.name };
    dispatch(register(data));
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <Form className={css.form}>
        <label className={css.label}>
          Name <br />
          <Field type="text" name="name" />
        </label>
        <label className={css.label}>
          Email <br />
          <Field type="email" name="email" />
        </label>
        <label className={css.label}>
          Password <br />
          <Field type="password" name="password" />
        </label>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
