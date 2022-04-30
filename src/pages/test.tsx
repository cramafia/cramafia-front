import type { NextPage } from 'next'
import { Button } from 'react-bootstrap'
import { nanoid } from 'nanoid'

import { usersApi } from 'src/services/usersApi/users.api'
import { Page } from '../layouts/Page'

const Test: NextPage = () => {
  const { data: users } = usersApi.useGetAllUsersQuery()
  const [createUser, { data }] = usersApi.useCreateUserMutation()

  const handleCreate = () => {
    createUser({
      username: nanoid(),
      password: '123321',
    })
  }

  return (
    <Page>
      <Button onClick={handleCreate}>Create User</Button>
      <div>
        {users?.map(({ username, _id }) => (
          <div key={_id}>{username}</div>
        ))}
      </div>
    </Page>
  )
}

export default Test
