import rawDNA from '../dna/dna-metadata.json'
import { flow, pick, defaults, map, keys, filter } from 'lodash/fp'

export const META_SECTION_NAME = '__META__'

const { name, description } = rawDNA

export function parseZomes (dna) {
  return flow(
    keys,
    map(key => ({ name: key, ...dna.zomes[key] })),
    filter(zome => zome.name !== META_SECTION_NAME),
    map(pick(['name', 'description', 'fn_declarations'])),
    map(defaults({fn_declarations: [], description: ''}))
  )(dna.zomes)
}

const zomes = parseZomes(rawDNA)

export {
  rawDNA,
  name,
  description,
  zomes
}
