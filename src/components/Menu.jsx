import React from 'react';
import {useState} from 'react';
import './Menu.css';

const Form = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isRegistrationSuccessful, setRegistrationSuccessful] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    email: '',
    comments: '',
  });

  const myForm = (e) => {
    e.preventDefault();
    setRegistrationSuccessful(true);
    setFormData({
      name: '',
      surname: '',
      phoneNumber: '',
      email: '',
      comments: '',
    });

    setButtonDisabled(true);
  };

  const myData = (e) => {
    let phoneNumber = e.target.value;

    if (phoneNumber.length <= 13) {

      if (phoneNumber.startsWith('994')) {
        setButtonDisabled(false);
      } else {
        setButtonDisabled(true);
      }
    } else {
 
      setButtonDisabled(true);
    }

    setFormData({ ...formData, phoneNumber });
  };
  

  return (
    <div className='main-form'>
      <form onSubmit={myForm}>
        <input type='text' placeholder='Name' required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
        <input type='text' placeholder='Surname' required value={formData.surname} onChange={(e) => setFormData({ ...formData, surname: e.target.value })}/>
        <input type='number' placeholder='Telephone Number' required value={formData.phoneNumber} onChange={(e) => myData(e)} maxLength={13} />
        <input type='email' placeholder='Email' required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
        <textarea type='text' placeholder='Comments' required value={formData.comments} onChange={(e) => setFormData({ ...formData, comments: e.target.value })} />
        <button className='send-btn' disabled={isButtonDisabled}>
          Send
        </button>
      </form>
      {isRegistrationSuccessful && <p>Registration successful! </p>}
    </div>
  );
};

export default Form;