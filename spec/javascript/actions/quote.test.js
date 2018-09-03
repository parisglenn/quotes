import * as actions from '../../../app/javascript/bundles/quotes'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const step = 1
    const expectedAction = {
      type: 'quotes/navigateQuote',
      payload: step,
    }
    expect(actions.navigateQuote(step)).toEqual(expectedAction)
  })
})
