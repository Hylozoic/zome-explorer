import rawDNA from '../dna.json'
import { pick } from 'lodash/fp'

console.log('rawDNA', rawDNA)

const { name, description } = rawDNA

const zomes = 
  Object.keys(rawDNA.zomes).map(key => ({ name: key, ...rawDNA.zomes[key] }))
  .map(pick(['name', 'description', 'fn_declarations']))

export {
  rawDNA,
  name,
  description,
  zomes
}
