import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";

import NavDrawer from "../../../layout/NavDrawer";

import { users } from "../../../__mocks__/users";

export const getStaticPaths = async () => {
  const data = users;

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = users.find((u) => u.id.toString() === id);

  return {
    props: { user: data },
  };
};

const lengthRegEx = /(?=.{6,})/;

const domains = [
  { label: "MD Software & Design", id: 1 },
  { label: "MD Software & Design", id: 2 },
  { label: "eWheel", id: 6 },
  { label: "43_Dujin Domain", id: 43 },
  { label: "Dujin Domain", id: 45 },
  { label: "MV domain", id: 47 },
  { label: "Dujin Domain 2", id: 49 },
  { label: "51_Dujin Domain 3", id: 51 },
];

const userRoles = [
  { label: "MD Admin", id: 1 },
  { label: "Account Manager", id: 25 },
  { label: "Backoffice - User", id: 42 },
  { label: "Client - Admin", id: 40 },
  { label: "External Technician", id: 35 },
  { label: "IZ test", id: 6 },
];

const UserForm = ({ user }) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  const handleSave = () => {};

  const handleSaveAndClose = () => {
    handleSave();
    handleClose();
  };

  const formik = useFormik({
    initialValues: {
      domain: user.domain.id,
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      role: user.userRole.id,
      stret: user.street,
      country: user.country,
      city: user.city,
      street: user.street,
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("First name is required"),
      lastname: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      username: Yup.string()
        .matches(lengthRegEx, "Must contain 6 characters!")
        .required("Required!"),
      city: Yup.string().max(255).required("City is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
      <Grid container justify="center" spacing={1}>
        <Grid item md={6}>
          <Card
            sx={{
              m: 2,
              height: 1,
            }}
          >
            <CardHeader
              title="User details"
              sx={{
                color: "primary.main",
                boxShadow: "0px 0px 1px grey",
              }}
            />
            <CardContent>
              <Grid item container spacing={1} justify="center">
                <Grid item xs={12} sm={6} md={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="select-domain-label">Domain</InputLabel>
                    <Select
                      labelId="select-domain-label"
                      id="select-domain"
                      label="Domain"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.domain}
                      name="domain"
                    >
                      {domains.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    error={Boolean(
                      formik.touched.firstname && formik.errors.firstname
                    )}
                    helperText={
                      formik.touched.firstname && formik.errors.firstname
                    }
                    label="First Name"
                    fullWidth
                    variant="outlined"
                    name="firstname"
                    value={formik.values.firstname}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    error={Boolean(
                      formik.touched.lastname && formik.errors.lastname
                    )}
                    helperText={
                      formik.touched.lastname && formik.errors.lastname
                    }
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    name="lastname"
                    value={formik.values.lastname}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={12}>
                  <TextField
                    error={Boolean(
                      formik.touched.street && formik.errors.street
                    )}
                    helperText={formik.touched.email && formik.errors.email}
                    label="Street"
                    variant="outlined"
                    fullWidth
                    name="street"
                    value={formik.values.street}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    error={Boolean(formik.touched.city && formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    label="City"
                    variant="outlined"
                    fullWidth
                    name="city"
                    value={formik.values.city}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    error={Boolean(
                      formik.touched.country && formik.errors.country
                    )}
                    helperText={formik.touched.country && formik.errors.country}
                    label="Country"
                    variant="outlined"
                    fullWidth
                    name="country"
                    value={formik.values.country}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={12}>
                  <TextField
                    error={Boolean(formik.touched.email && formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    name="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    error={Boolean(
                      formik.touched.username && formik.errors.username
                    )}
                    helperText={
                      formik.touched.username && formik.errors.username
                    }
                    label="Username"
                    variant="outlined"
                    fullWidth
                    name="username"
                    value={formik.values.username}
                    type="username"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="select-role-label">Role</InputLabel>
                    <Select
                      labelId="select-role-label"
                      id="select-role"
                      label="Role"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.role}
                      name="role"
                    >
                      {userRoles.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions sx={{ justifyContent: "flex-end", mr: 1 }}>
              <Button variant="contained" onClick={handleClose}>
                Close
              </Button>
              <Button
                disabled={formik.isSubmitting}
                variant="contained"
                type="Submit"
                // onClick={handleSaveAndClose}
              >
                Save & Close
              </Button>
              <Button
                disabled={formik.isSubmitting}
                variant="contained"
                type="Submit"
                // onClick={handleSave}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

const User = ({ user }) => {
  return (
    <>
      <Head>
        <title>eWheel2 | Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography variant="h3" color="primary.main" margin={2}>
        User
      </Typography>
      <UserForm user={user} />
    </>
  );
};

User.Layout = NavDrawer;

export default User;
