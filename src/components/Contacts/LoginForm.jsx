import { userLoginThunk } from 'redux/thunks';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const err = useSelector(state => state.auth.error);

  const submitHandler = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      userLoginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    !err && setTimeout(() => navigate('/contacts'), 500);
  };

  return (
    <div >
      <h2 >Enter your account</h2>
      <form onSubmit={submitHandler}>
        <label >
          E-mail
          <input type="email" name="email"/>
        </label>
        <label >
          Password
          <input type="password" name="password"/>
        </label>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};