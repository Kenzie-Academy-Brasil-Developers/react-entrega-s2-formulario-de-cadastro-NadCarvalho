import React from 'react';
import Form from '../../Components/Form'
import Card from '../../Components/Card'

const FormSignUp = ({ handleLogin }) => {
  return (
    <Card>
      <Form handleLogin={handleLogin} />
    </Card>
  )
}

export default FormSignUp;