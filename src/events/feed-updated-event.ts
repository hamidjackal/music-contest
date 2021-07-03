import { Subjects } from './subjects'

export interface FeedUpdatedEvent {
  subject: Subjects.FeedUpdated
  data: {
    id: number
    uuid: string
  }
}
