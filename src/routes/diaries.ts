import express from 'express' // EsModules pero luego se compila como commonJS
import * as diaryService from '../services/diaryService'
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addDiaryEntry = diaryService.addDiary(newDiaryEntry)
    res.json(addDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(+req.params.id)
  res.send(diary)
})

export default router
