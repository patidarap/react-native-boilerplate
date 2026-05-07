import {UserTypes} from '@apptypes';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface ProfileState {
  userData: UserTypes;
  isLogIn: boolean;
}

const initialState: ProfileState = {
  userData: {
    _id: '',
    user_name: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    user_type: 0,
    created_at: '',
    __v: 0,
    token: '',
    resetToken: '',
    device_info: '',
    device_os_version: '',
    device_type: '',
  },
  isLogIn: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserTypes>) => {
      state.userData = action.payload;
      state.isLogIn = true;
    },
    userReset: state => {
      state.isLogIn = false;
      state.userData = initialState.userData;
    },
  },
});

export const {setUserData, userReset} = profileSlice.actions;

export default profileSlice.reducer;
