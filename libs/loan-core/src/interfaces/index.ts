export interface LoanLead {
  fullName: string;
  email: string;
  birth_data: Date;
  cpf: number;
  phone_number: number;
  loan_amount: number;
}

export interface LoanSimulate {
  total_loan_amount: number;
  number_of_installments: number;
  input_value: number;
  income: number;
  form_of_payment: string;
  agency: number;
  account_number: string;
  account_number_digit: string;
}
