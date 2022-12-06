import { Profiles } from '@lens-protocol/react-native-lens-ui-kit'

export default function ViewFollowing({
  route
}) {
  return (
    <Profiles
      query={{
        name: 'getFollowing',
        ethereumAddress: route.params.ethereumAddress
      }}
    />
  )
}
