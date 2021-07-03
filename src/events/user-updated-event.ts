import { Subjects } from './subjects'

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated
  data: {
    uuid: string
    username: string
    mobileNumber: string
    isParticipant: boolean
    roles: string[]
    status: string
    profileImage: string
    version: number
  }
}
