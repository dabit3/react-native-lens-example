import { Profile } from '@lens-protocol/react-native-lens-ui-kit'
import { StyleSheet, Dimensions, View } from 'react-native'

const { width } = Dimensions.get('window')

export default function ProfileView({
  route, navigation
}) {
  return (
    <View style={{
      backgroundColor: black,
      flex: 1
    }}>
      <Profile
        headerStyles={headerStyles}
        publicationStyles={publicationStyles}
        profile={route.params.profile}
        iconColor={whiteText}
        onFollowingPress={
          profile => {
            console.log("PROFILE:::: ", profile)
            navigation.push("ViewFollowing", {
              ethereumAddress: profile.ownedBy
            })
          }
        }
        onProfileImagePress={
          publication => {
            navigation.push("ViewProfile", {
              profile: publication.profile,
            })
          }
        }
        onCommentPress={
          publication => {
            const publicationId = publication.mirrorOf ? publication.mirrorOf.id : publication.id
            navigation.push('ViewComments', {
              publicationId
            })
          }
        }
      />
    </View>
  )
}

const whiteText =  'rgba(255, 255, 255, .87)'
const black = '#121212'

const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: '#121212'
  },
  blankHeader: {
    height: 120,
  },
  headerImage: {
    width: '100%',
    height: 120
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: -50,
    marginLeft: 25
  },
  userDetails: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  name: {
    fontWeight: '600',
    fontSize: 20,
    color: whiteText
  },
  handle: {
    fontSize: 14,
    color: whiteText,
    color: '#CF6679'
  },
  bio: {
    marginTop: 10,
    color: 'rgba(0, 0, 0, .5)',
    color: whiteText
  },
  profileStats: {
    flexDirection: 'row',
    marginTop: 15,
    color: whiteText
  },
  statsData: {
    fontWeight: '600',
    fontSize: 16,
    color: whiteText
  },
  statsHeader: {
    marginLeft: 3,
    opacity: .7,
    color: whiteText
  },
  profileFollowingData: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileFollowerData: {
    marginLeft: 15,
    flexDirection: 'row',
    alignItems: 'center'
  }
})


const publicationStyles = StyleSheet.create({
  publicationWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, .05)',
    padding: 20,
    backgroundColor: black
  },
  publicationContainer: {
    flexDirection: 'row',
  },
  missingAvatarPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, .4)'
  },
  smallAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postContentContainer: {
    flexShrink: 1,
    paddingLeft: 15
  },
  postText: {
    flexShrink: 1,
    marginTop: 7,
    marginBottom: 5,
    color: whiteText
  },
  metadataImage: {
    marginTop: 10,
    flex: 1,
    width: width - 100,
    height: width - 100,
  },
  statsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    paddingLeft: 20,
  },
  statsDetailContainer: {
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center'
  },
  statsDetailText: {
    marginLeft: 10,
    fontSize: 12,
    color: whiteText
  },
  postOwnerDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  postOwnerName: {
    fontWeight: '600',
    color: whiteText
  },
  postOwnerHandle: {
    marginLeft: 4,
    color: 'rgba(0, 0, 0, .5)',
    color: whiteText
  },
  timestamp: {
    marginLeft: 4,
    color: 'rgba(0, 0, 0, .5)',
    fontSize: 12,
    fontWeight: '600',
    color: whiteText
  },
  activityIndicatorContainer: {
    height: 60,
    justifyContent: 'center',
    marginBottom: 10,
  },
  mirrorContainer: {
    flexDirection: 'row'
  },
  mirrorText: {
    fontWeight: '600',
    color: 'rgba(0, 0, 0, .6)',
    fontSize: 12,
    marginBottom: 7,
    marginLeft: 5,
    color: whiteText
  }
})