export interface Bug {
    name: string,
    status: string,
    project_id: number,
    date: Date,
    created_at: Date,
    updated_at?: Date
}