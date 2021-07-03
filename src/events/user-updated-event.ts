import { Subjects } from './subjects'

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated
  data: {
    id: number
    username: string
    mobileNumber: string
    isParticipant: boolean
    roles: string[]
    status: string
    profileImage: string
  }
}
