import { Subjects } from './subjects'

export interface UserUpdatedEvent {
  subject: Subjects.UserUpdated
  data: {
    id: number
    uuid: string
    username: string
  }
}
