
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignupThunk } from 'redux/thunks';


export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
        userSignupThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    navigate('/contacts');
  };

  return (
    <div>
      <h2>Sign in our App</h2>
      <form onSubmit={submitHandler}>
        <label >
          Name
          <input
            type="text"
            name="name"
            placeholder="John Johnsen"
          />
        </label>
        <label >
          E-mail
          <input
            type="email"
            name="email"
            placeholder="Johnsen1990@gmail.com"
          />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit" >
          Register
        </button>
      </form>
    </div>
  );
};