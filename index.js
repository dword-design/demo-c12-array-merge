import { loadConfig } from 'c12'

console.log((await loadConfig({})).config.plugins)
