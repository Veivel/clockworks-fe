export type EVENT_TYPE = {
    id: string
    title: string
    use_whitelist: boolean
    author_username: string
}

export type TAG_TYPE = {
    event_id: string
    username: string
    period: string // need parsing
    tag_type: number
}

export type USER_TYPE = {
    username: string
    created_at: string // need parsing
    email: string
    password: string // encrypted
}

export type TIME_TYPE = {
    weekday: string
    hour: number
    minute: number
}