export interface formVals {
  user: string;
  password: string;
}

export interface mockData {
  progression: boolean;
  details: string;
  date: string;
}

export interface UserAction {
  auth0Id: string | undefined;
  email: string | undefined;
  token: string;
}
