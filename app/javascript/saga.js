import { quotesSaga } from 'bundles/quotes'

export default function* rootSaga() {
  yield* quotesSaga()
}
