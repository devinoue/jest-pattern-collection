/**
 * 本来はDomain層に置く
 */
import User from './User'

export default interface IRepository {
  callApi(): Promise<User[]>
}
