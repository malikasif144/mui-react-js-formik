import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("This is required"),
      lastName: Yup.string().required("This is required"),
      phone: Yup.string().required("This is required"),
      message: Yup.string().required("This is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted", values);
    },
  });
  return (
    <div>
      <Typography variant="h4" mt={6} mb={6}>
        Contact US
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          label="First Name"
          variant="outlined"
          type="text"
          onChange={formik.handleChange}
          name="firstName"
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.firstName && formik.errors.firstName}
          sx={{ width: "300px", m: 1 }}
        />
        <TextField
          label="Last Name"
          variant="outlined"
          type="text"
          onChange={formik.handleChange}
          name="lastName"
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.lastName && formik.errors.lastName}
          sx={{ width: "300px", m: 1 }}
        />
        <TextField
          label="Phone Number"
          variant="outlined"
          type="number"
          onChange={formik.handleChange}
          name="phone"
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.phone && formik.errors.phone}
          sx={{ width: "300px", m: 1 }}
        />
        <TextField
          label="Message"
          variant="outlined"
          type="text"
          onChange={formik.handleChange}
          name="message"
          error={formik.touched.message && Boolean(formik.errors.message)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.message && formik.errors.message}
          rows={4}
          multiline
          fullWidth
          sx={{ m: 1 }}
        />
        <Button size="large" variant="contained" type="submit" sx={{ m: 1 }}>
          Send
        </Button>
      </Box>
    </div>
  );
};

export default ContactUs;
