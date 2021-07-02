import { Subjects } from './subjects'

export interface UserCreatedEvent {
  subject: Subjects.TicketCreated
  data: {
    id: number
    uuid: string
    username: string
  }
}
