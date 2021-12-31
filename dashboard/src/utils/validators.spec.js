import {
  validateEmptyAndLength3,
  validateEmptyAndEmail
} from './validators'

describe('Validators urils', () => {
  it('should give an error with empty payload', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })
  it('should give an error with less then 3 character payload', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })
  it('should returns true when input a correct param', () => {
    expect(validateEmptyAndLength3('senhavalida')).toBe(true)
  })

  it('should give an error with empty payload', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })
  it('should give an error input an invalid e-mail', () => {
    expect(validateEmptyAndEmail('lucas@mail')).toBe('*Este campo precisa ser um e-mail')
  })
  it('returns true when input a correct e-mail', () => {
    expect(validateEmptyAndEmail('igor@igor.me')).toBe(true)
  })
})
