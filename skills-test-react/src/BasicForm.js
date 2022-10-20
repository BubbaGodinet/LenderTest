import React from 'react';
// import ReactDOM from 'react-dom';
import { Formik, Field, Form, FieldArray, ErrorMessage} from 'formik';
import { Button, Divider, Container, TextField, ButtonGroup} from '@mui/material';

const BasicForm = () => {

const initialValues = {
  todos: [
    {
      todo: '',
    }
  ]
}

  return (
  <div>
    <h1>TODO</h1>
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 400));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({values}) => (
      <Form>
              <FieldArray name="todos">
            {({ insert, remove, push }) => (
              <div>
                {values.todos.length > 0 &&
                  values.todos.map((todo, index) => (
                    <>
                    <Container className="row" key={index} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                      <Container className="col" sx={{marginTop: '1.2vw'}}>
                        <TextField
                          sx={{width: '100%'}}
                          name={`todos.${index}.todo`}
                          placeholder="Add Todo"
                          type="text"
                        />
                        <ErrorMessage
                          name={`todos.${index}.todo`}
                          component="div"
                          className="field-error"
                        />
                      </Container>
                      <div className="col">
                      </div>
                      <Container sx={{display: 'flex', gap: '3.472vw', justifyContent: 'center'}}>
                        <Button
                          sx={{marginBottom: '1.2vw', marginTop: '1.2vw', borderRadius: '3.472vw', backgroundColor: '#16BDF2', color: 'white', '&:hover': {color: 'white', backgroundColor: '#204EE6'}}}
                          type="button"
                          className="secondary"
                          onClick={() => push({ todo: '' })}
                        >
                          Add Todo
                        </Button>
                        <Button
                        sx={{marginBottom: '1.2vw', marginLeft: '0.694vw', marginTop: '1.2vw', borderRadius: '3.472vw', backgroundColor: '#FF3336', color: 'white', '&:hover': {color: 'white', backgroundColor: '#99080A'}}}
                          type="button"
                          className="secondary"
                          onClick={() => remove(index)}
                        >
                          Delete
                        </Button>
                        </Container>
                    </Container>
                    <Divider/>
                    </>
                  ))}
              </div>
            )}
          </FieldArray>
      </Form>
      )}
    </Formik>
  </div>
  )
}

export default BasicForm
