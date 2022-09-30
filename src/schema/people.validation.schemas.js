import { query } from 'express-validator'
import { SORT_OPTIONS } from '../models/sortOptions.js'

export const peopleSchema = [
  query('sortBy').optional().isIn(Object.keys(SORT_OPTIONS).map((key) => SORT_OPTIONS[key]))
]