export interface IUser {
  username: string
  password: string
}

export interface userInfo {
  id?: number
  username?: string
  token?: string
  avatar?: string
}

export interface IPageParams {
  offset: number
  limit: number
}
