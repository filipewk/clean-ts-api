import { SaveSurveyResultRepository } from '@/data/protocols/db/survey-result/save-survey-result-repository'
import { LoadSurveyResultRepository } from '@/data/protocols/db/survey-result/load-survey-result-repository'
import { SurveyResultModel, SaveSurveyResultParams } from '@/data/usecases/survey-result/save-survey-result/db-save-survey-result-protocols'
import { mockSurveyResultModel } from '@/domain/mocks'

export const mockSaveSurveyResultRepository = (): SaveSurveyResultRepository => {
  class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
    async save (data: SaveSurveyResultParams): Promise<void> {
      return null
    }
  }
  return new SaveSurveyResultRepositoryStub()
}

export const mockLoadSurveyResultRepository = (): LoadSurveyResultRepository => {
  class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
    async loadBySurveyId (surveyId: string): Promise<SurveyResultModel> {
      return mockSurveyResultModel()
    }
  }
  return new LoadSurveyResultRepositoryStub()
}
