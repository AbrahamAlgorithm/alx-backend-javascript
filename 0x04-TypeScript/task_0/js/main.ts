export interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const Mustapha: Student = {
    firstName: "Mustapha",
    lastName: "Oyebamiji",
    age: 25,
    location: "Nigeria"
}

const Muideen: Student = {
    firstName: "Muideen",
    lastName: "Bello",
    age: 99,
    location: "Saudi Arabia"
}
const studentsList: Array<Student> = [Mustapha, Muideen]

export const Table = (studentsList: Array<Student>) => {
    const table = document.createElement('table')
    const header = document.createElement('tr')
    table.insertAdjacentElement("beforeend", header)
    header.insertAdjacentHTML("beforeend", "<th>Firstname</th>")
    header.insertAdjacentHTML("beforeend", "<th>Location</th>")

    for (const std of studentsList) {
        const tr = document.createElement('tr')
        tr.insertAdjacentHTML("beforeend", `<td>${std.firstName}</td>`)
        tr.insertAdjacentHTML("beforeend", `<td>${std.location}</td>`)
        table.insertAdjacentElement("beforeend", tr)
    }
    document.body.insertAdjacentElement("beforeend", table)
}

Table(studentsList)
