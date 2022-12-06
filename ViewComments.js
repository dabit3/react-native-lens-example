import { Feed } from '@lens-protocol/react-native-lens-ui-kit'

export default function ViewComments({
  route
}) {
  return (
    <Feed
      query={{
        name: 'getComments',
        publicationId: route.params.publicationId,
      }}
    />
  )
}
