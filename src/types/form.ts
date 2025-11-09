export interface LoginFormFields {
  email: string;
  password: string;
}

export interface RegisterFormFields extends LoginFormFields {
  fullName: string;
  confirmPassword: string;
}
