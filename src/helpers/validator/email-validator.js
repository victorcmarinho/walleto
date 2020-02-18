import emailValidator from 'email-validator'

export default function EmailValidator(email) {
  return emailValidator.validate(email)
}