import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useAppSelector } from "../hooks/redux";
import { useActions } from "../hooks/actions";
import { Field, useFormik, Formik } from "formik";
import * as yup from "yup";
import { FormControl, Grid, Input, InputLabel } from "@mui/material";

export type IInitialValues = {
  name: string;
  email: string;
  number: number;
  password: string;
  confirmPassword: string;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const { isModalOpen, database } = useAppSelector((state) => state.data);
  const { closeModal, addUserInfoToDV, setIsLoginedTrue } = useActions();

  const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "min 3 chars")
      .max(20, "20 charecters or less")
      .required("required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    number: yup
      .number()
      .integer("number must be an integer")
      .positive("number must be positive")
      .required("number is required"),
    password: yup.string().required("Required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const initialValues: IInitialValues = {
    name: "",
    email: "",
    number: 1,
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = (values: IInitialValues) => {
    console.log("handleSubmit");

    const formData = {
      name: values.name,
      email: values.email,
      number: values.number,
      password: "",
      confirmPassword: "",
    };
    const hasEmailMatch = database.some((user) =>
      user.email.includes(formData.email)
    );

    if (!hasEmailMatch) {
      addUserInfoToDV({ email: formData.email, password: formData.password });
      setIsLoginedTrue();
      closeModal();
      formik.resetForm();
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  return (
    <Modal
      open={isModalOpen}
      onClose={() => closeModal()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          onSubmit={() => {}}
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  error={formik.touched.name && Boolean(formik.errors.name)}
                >
                  <InputLabel htmlFor="name">name</InputLabel>
                  <Field
                    name="name"
                    value={formik.values.name}
                    type="name"
                    as={Input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.name && formik.touched.name && (
                    <div style={{ color: "red" }}>{formik.errors.name}</div>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  error={formik.touched.email && Boolean(formik.errors.email)}
                >
                  <InputLabel htmlFor="email">email</InputLabel>
                  <Field
                    name="email"
                    value={formik.values.email}
                    type="email"
                    as={Input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.email && formik.touched.email && (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  error={formik.touched.number && Boolean(formik.errors.number)}
                >
                  <InputLabel htmlFor="number">number</InputLabel>
                  <Field
                    name="number"
                    value={formik.values.number}
                    type="number"
                    as={Input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.number && formik.touched.number && (
                    <div style={{ color: "red" }}>{formik.errors.number}</div>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                >
                  <InputLabel htmlFor="password">password</InputLabel>
                  <Field
                    name="password"
                    value={formik.values.password}
                    type="password"
                    as={Input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl
                  fullWidth
                  error={
                    formik.touched.confirmPassword &&
                    Boolean(formik.errors.confirmPassword)
                  }
                >
                  <InputLabel htmlFor="confirmPassword">
                    confirmPassword
                  </InputLabel>
                  <Field
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    type="password"
                    as={Input}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.errors.confirmPassword &&
                    formik.touched.confirmPassword && (
                      <div style={{ color: "red" }}>
                        {formik.errors.confirmPassword}
                      </div>
                    )}
                </FormControl>
              </Grid>

              <Button
                variant="contained"
                type="submit"
                style={{ marginTop: 20 }}
              >
                Регистрация
              </Button>
            </Grid>
          </form>
        </Formik>
      </Box>
    </Modal>
  );
}
