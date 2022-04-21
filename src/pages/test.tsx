import type { NextPage } from 'next'
import { Button } from 'react-bootstrap'
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'

import { stateType } from 'src/redux/store'
import { usersApi } from '@/api/usersApi/users.api'
import { Page } from '../layouts/Page'

const Test: NextPage = () => {
  const { activeUsers } = useSelector((state: stateType) => state.socket)
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
      <div>Active Users: {activeUsers}</div>
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
