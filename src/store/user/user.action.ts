import { User } from "firebase/auth";
import { USER_ACTION_TYPES } from "./user.types";
import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer/reducer";
import { UserData, AdditionalInformation } from "../../utils/firebase/firebase";

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  {
    email: string;
    password: string;
    displayName: string;
  }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export const checkUserSession = withMatcher(() =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const setCurrentUser = withMatcher((user: UserData) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher((email: string, password: string) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher((user: UserData & { id: string }) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher((error: Error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation) =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher((error: Error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(() =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher((error: Error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);
