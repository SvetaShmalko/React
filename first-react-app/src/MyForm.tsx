import React from 'react'
import { TextField, Button } from '@material-ui/core'
//import { makeStyles } from '@material-ui/core/styles';
import { Form, Formik, Field } from "formik";

interface Values {
    name: string;
    age: number;
    email?: string
}

interface Props {
    onSubmit: (values: Values) => void
}

const MyForm: React.FC<Props> = ({ onSubmit }) => {
  //  const classes = useStyles();
    return (
        <Formik initialValues={{ name: '', age: 0, email: '' }} onSubmit={(values: Values) => {
            onSubmit(values)
        }}
        >

            <div>
                <TextField
                    required
                    id="outlined-required"
                    label="Name"
                    placeholder='name'
                    helperText="Enter your name"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    id="outlined-required"
                    label="E-mail"
                    placeholder='e-mail'
                    helperText="Enter your e-mail"
                    variant="outlined"
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-number"
                    label="Age"
                    placeholder='26'
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText="Enter your age"
                    variant="outlined"
                />
            </div>

            <input type="submit" value="submit" />
            <Button variant="outlined" color="primary">
                submit
      </Button>

        </Formik>
    )
}

export default MyForm