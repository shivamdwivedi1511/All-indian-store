import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { Jumbotron, Button, Input, Label } from "reactstrap";
import * as Yup from "yup";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { FormGroup, FormText } from "reactstrap";
import RichTextEditor from "../RichTextEditor/RichTextEditor";

const MyInput = ({ field, form, ...props }: any) => {
  return <Input {...field} {...props} />;
};

const MyTextEditor = ({ field, form, ...props }: any) => {
  return (
    <div>
      <RichTextEditor {...field} {...props} />
    </div>
  );
};
const MyCheckBox = ({ field, form, ...props }: any) => {
  return (
    <FormGroup className="custom-checkbox">
      <Label>
        <Input type="checkbox" {...field} {...props} /> <span>Common Data</span>
      </Label>
    </FormGroup>
  );
};

const SignupSchema = Yup.object().shape({
  subject: Yup.string().required("Required"),
  difficulty: Yup.string().required("Required"),
  topic: Yup.string().required("Required"),
  qstype: Yup.string().required("Required"),
});

const MyForm = () => (
  <>
    <h1 className="main-heading">Add Question</h1>
    <Breadcrumb className="custom-breadcrumb">
      <BreadcrumbItem>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Add question</BreadcrumbItem>
    </Breadcrumb>
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
          <div className="row">
            <div className="col-sm-6">
              <FormGroup>
                <Label>
                  Subject <span className="star">*</span>
                </Label>
                <Field as="select" name="subject" className="form-control">
                  <option value="English">English</option>
                  <option value="Maths">Maths</option>
                  <option value="Science">Science</option>
                  <option value="Computer">Computer</option>
                  <option value="Arts">Arts</option>
                </Field>
                <span className="error-text">
                  <ErrorMessage name="subject" />
                </span>
              </FormGroup>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <Label>
                  Difficulty <span className="star">*</span>
                </Label>
                <Field as="select" name="difficulty" className="form-control">
                  <option value="easy">easy</option>
                  <option value="medium">medium</option>
                  <option value="hard">hard</option>
                </Field>
                <span className="error-text">
                  <ErrorMessage name="difficulty" />
                </span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <Label>
                  Topic <span className="star">*</span>
                </Label>
                <Field
                  name="topic"
                  placeholder="Enter the topic name"
                  component={MyInput}
                />
                <span className="error-text">
                  <ErrorMessage name="topic" />
                </span>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="form-group">
                <Label>
                  Question type <span className="star">*</span>
                </Label>
                <Field as="select" name="qstype" className="form-control">
                  <option value="mcq">mcq</option>
                  <option value="description">description</option>
                  <option value="blue">Blue</option>
                </Field>
                <span className="error-text">
                  <ErrorMessage name="qstype" />
                </span>
              </div>
            </div>
          </div>
          <div role="group" aria-labelledby="checkbox-group">
            <Field
              type="checkbox"
              name="toggle"
              id="toggle"
              component={MyCheckBox}
            />
            {props.values.toggle && (
              <Field
                name="common"
                placeholder="common"
                component={MyTextEditor}
              />
            )}
          </div>
          <div className="text-right">
            <Button color="primary">Submit</Button>{" "}
          </div>
        </Form>
      )}
    </Formik>
  </>
);

export default function CourseForm() {
  return <div className="form-wrapper"> {MyForm()}</div>;
}
