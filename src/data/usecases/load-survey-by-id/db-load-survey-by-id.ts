import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-idrepository'
import { SurveyModel } from '@/domain/models/survey'
import { LoadSurveysById } from '@/domain/usecases/load-surveys-by-id'

export class DbLoadSurveyById implements LoadSurveysById {
  constructor (
    private readonly loadSurveyByIdRepository: LoadSurveyByIdRepository
  ) {}

  async loadById (id: string): Promise<SurveyModel> {
    await this.loadSurveyByIdRepository.loadById(id)
    return null
  }
}
