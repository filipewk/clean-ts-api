import { Controller, HttpRequest, HttpResponse, Validation } from './add-survey-controller-protocols'
import { badRequest } from '../../../helpers/http/http-helper'

export class AddSurveyController implements Controller {
  constructor (
    private readonly valitadtion: Validation
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.valitadtion.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
  }
}
