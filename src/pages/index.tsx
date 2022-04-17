import type { NextPage } from 'next'
import { Page } from '../layouts/Page'
import { Main } from '../components/Main'
import { usersApi } from 'src/api/usersApi/users.api'

const Home: NextPage = () => {
  return (
    <Page>
      <Main />
    </Page>
  )
}

export default Home
