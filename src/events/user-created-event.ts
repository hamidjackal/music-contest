import { Subjects } from './subjects'

export interface UserCreatedEvent {
  subject: Subjects.UserCreated
  data: {
    id: number
    uuid: string
    username: string
    mobileNumber: string
    isParticipant: boolean
    roles: string[]
    status: string
    profileImage: string
  }
}
