import { parseZomes, META_SECTION_NAME } from './parsedDNA'

it('defaults to empty arrays', () => {
  const dna = {
    zomes: {
      empty_zome: {}
    }
  }

  const zomes = parseZomes(dna)

  expect(zomes[0].fn_declarations).toEqual([])
  expect(zomes[0].name).toEqual('empty_zome')
  expect(zomes[0].description).toEqual('')
})

it('removes __META__ zome', () => {
  const dna = {
    zomes: {
      empty_zome: {},
      [META_SECTION_NAME]: {}
    }
  }

  const zomes = parseZomes(dna)

  expect(zomes.length).toEqual(1)
  expect(zomes[0].name).toEqual('empty_zome')
})