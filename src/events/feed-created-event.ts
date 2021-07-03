import { Subjects } from './subjects'

export interface FeedCreatedEvent {
  subject: Subjects.FeedCreated
  data: {
    id: number
    uuid: string
  }
}
