import { User } from "../models/user";

export const userTypes = ["User", "Admin"]

export const users: User[] = [
    {
        id: "p1",
        name: "Person 1",
        creationDate: new Date("01/10/2020"),
        type: "User"
    },
    {
        id: "p2",
        name: "Person 2",
        creationDate: new Date("02/10/2020"),
        type: "Admin"
    },
    {
        id: "p3",
        name: "Person 3",
        creationDate: new Date("03/10/2019"),
        type: "User"
    },
    {
        id: "p4",
        name: "Person 4",
        creationDate: new Date("04/10/2018"),
        type: "Admin"
    },
    {
        id: "p5",
        name: "Person 5",
        creationDate: new Date("12/19/2020"),
        type: "User"
    },
    {
        id: "p6",
        name: "Person 6",
        creationDate: new Date("05/05/2021"),
        type: "User"
    },
    {
        id: "p7",
        name: "Person 7",
        creationDate: new Date("01/01/2021"),
        type: "User"
    },
    {
        id: "p8",
        name: "Person 8",
        creationDate: new Date("01/05/2022"),
        type: "User"
    },
    {
        id: "p9",
        name: "Person 9",
        creationDate: new Date("12/12/2022"),
        type: "User"
    },
    {
        id: "p10",
        name: "Person 10",
        creationDate: new Date("01/01/2023"),
        type: "User"
    },
];