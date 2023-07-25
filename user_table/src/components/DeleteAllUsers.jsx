import React from 'react';
import { styled } from 'styled-components';
import { clearAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from 'react-redux';

const DeleteAllUsers = () => {

  const dispatch = useDispatch();

  const deleteUsers = () => {
    dispatch(clearAllUsers());
  }

  return (
    <Wrapper>
      <button className='btn clear-btn' onClick={() => deleteUsers()}>Clear All Users</button>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background: linear-gradient(135deg, #7f6de3 0%, #11aaf1 100%);
    margin-top: 2rem;
  }
`;

export default DeleteAllUsers;