import mongoose from 'mongoose'
import config from '../config/config'

export default async function connectDB () {
  await mongoose.connect(config.URI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.error(err))
}
