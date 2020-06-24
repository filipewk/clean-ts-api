import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import { hash } from 'bcrypt'

let accountCollection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      app.post('/api/signup', (req, res) => {
        res.send()
      })
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Filipe',
          email: 'filipewk@gmail.com',
          password: '123456',
          passwordConfirmation: '123456'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123456', 12)
      await accountCollection.insertOne({
        email: 'filipewk@gmail.com',
        password
      })
      await request(app)
        .post('/api/login')
        .send({
          email: 'filipewk@gmail.com',
          password: '123456'
        })
        .expect(200)
    })
  })
})
