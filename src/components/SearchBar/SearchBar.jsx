import { Field, Formik, Form } from "formik";
import { CiSearch } from "react-icons/ci";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          onSearch(values.query);
          actions.resetForm();
        }}
      >
        <Form>
          <button type="submit" className={css.button}>
            <CiSearch />
          </button>
          <Field
            autoComplete="off"
            autoFocus
            type="text"
            name="query"
            placeholder="Search images and photos"
            className={css.input}
          />
        </Form>
      </Formik>
    </header>
  );
}
