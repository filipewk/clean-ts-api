import { AccountModel } from '@/domain/models/account'
import { AddAccountParams } from '@/domain/usecases/account/add-account'
import { AuthenticationParams } from '@/domain/usecases/account/authentication'

export const mockAddAccountParams = (): AddAccountParams => ({
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password'
})

export const mockAddAccountWithTokenParams = (): AddAccountParams => Object.assign({}, mockAddAccountParams(), {
  accessToken: 'any_token'
})

export const mockAddAccountWithTokenAndRoleParams = (): AddAccountParams => Object.assign({}, mockAddAccountWithTokenParams(), {
  role: 'admin'
})

export const mockAccountModel = (): AccountModel => Object.assign({}, mockAddAccountParams(), {
  id: 'any_id',
  password: 'hashed_password'
})

export const mockAuthentication = (): AuthenticationParams => ({
  email: 'any_email@mail.com',
  password: 'any_password'
})
