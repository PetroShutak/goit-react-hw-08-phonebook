import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import avatar from 'images/avatar-default-user.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // console.log(user);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <img src={avatar} alt="" width="32" height="32" style={{
        borderRadius: '50%',
      }} />
      <p>{user.name}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
