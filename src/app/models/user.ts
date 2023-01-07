export interface User {
    id: string,
    name: string,
    creationDate: Date,
    type: "User" | "Admin"
}
