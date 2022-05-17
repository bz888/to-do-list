import path from 'path'
import dotenv from 'dotenv'

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, '../../../.env') })

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  // NODE_ENV: string | undefined;
  // PORT: number | undefined;
  URI: string | undefined;
}

interface Config {
  // NODE_ENV: string;
  // PORT: number;
  URI: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    // NODE_ENV: process.env.NODE_ENV,
    // PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    URI: process.env.URI
  }
}

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`)
    }
  }
  return config as Config
}

const config = getConfig()

const sanitizedConfig = getSanitzedConfig(config)

export default sanitizedConfig
