import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Jumbotron, Button, Input, Label } from "reactstrap";
import * as Yup from "yup";

const MyInput = ({ field, form, ...props }: any) => {
  return <Input {...field} {...props} />;
};

const MyTextArea = ({ field, form, ...props }: any) => {
  return <textarea {...field} {...props} />;
};

const SignupSchema = Yup.object().shape({
  subject: Yup.string().required("Required"),
  difficulty: Yup.string().required("Required"),
  topic: Yup.string().required("Required"),
  qstype: Yup.string().required("Required"),
});

const MyForm = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        subject: "",
        difficulty: "",
        topic: "",
        qstype: "",
        toggle: false,
        common: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          {console.log(">>>>>>", props)}
          <Label>Subject</Label>
          <Field as="select" name="subject">
            <option value="English">English</option>
            <option value="Maths">Maths</option>
            <option value="Science">Science</option>
            <option value="Computer">Computer</option>
            <option value="Arts">Arts</option>
          </Field>
          <ErrorMessage name="subject" />
          <Label>Difficulty</Label>

          <Field as="select" name="difficulty">
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </Field>
          <ErrorMessage name="difficulty" />
          <Label>Topic</Label>
          <Field
            name="topic"
            placeholder="Enter the topic name"
            component={MyInput}
          />
          <ErrorMessage name="topic" />
          <Label>Question type</Label>

          <Field as="select" name="qstype">
            <option value="mcq">mcq</option>
            <option value="description">description</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="qstype" />
          <Label>Common data</Label>

          <div role="group" aria-labelledby="checkbox-group">
            <Field type="checkbox" name="toggle" />
            {props.values.toggle && (
              <Field
                name="common"
                placeholder="common"
                component={MyTextArea}
              />
            )}
          </div>

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  </div>
);

export default function CourseForm() {
  return <Jumbotron> {MyForm()}</Jumbotron>;
}
