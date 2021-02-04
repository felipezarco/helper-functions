
import fn from './index'

test('it chooses one and return correct value', async () => {
  
  const name = 'felipe'
  
  const value = fn.one(name, {
    felipe: 'Felipe Zarco',
    larissa: 'Larissa Zarco'
  })

  expect(value).toBe('Felipe Zarco')
  
})


test('it chooses one and return undefined if no matches', async () => {
  
  const name = 'gustavo'
  
  const value = fn.one(name, {
    felipe: 'Felipe Zarco',
    larissa: 'Larissa Zarco'
  })

  expect(value).toBe(undefined)
  
})
