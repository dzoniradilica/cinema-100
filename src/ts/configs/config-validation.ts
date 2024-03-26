export interface ConfigElements {
  [prop: string]: {
    required: boolean;
    maxLength: number;
    minLength: number;
    email?: boolean;
    matching?: string;
    existUsername?: boolean;
  };
}

export const configEl: ConfigElements = {
  registrationUsername: {
    required: true,
    maxLength: 10,
    minLength: 5,
    existUsername: true,
  },

  registrationEmail: {
    required: true,
    minLength: 5,
    maxLength: 50,
    email: true,
  },

  registrationPassword: {
    required: true,
    minLength: 5,
    maxLength: 20,
    matching: 'registrationRepeatPassword',
  },

  registrationRepeatPassword: {
    required: true,
    minLength: 5,
    maxLength: 20,
    matching: 'registrationPassword',
  },
};
