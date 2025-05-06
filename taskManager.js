//importamos el metodo file system de node para poder leer y escribir
import fs from 'fs';

//indicamos la ruta donde se guardara
const filePath = './tasks.json'

if (!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify([]))

    const getTasks = ()=>{
        try{
            const data = fs.readFileSync(filePath, "utf8")
            return data ? JSON.parse(data): []
        }catch (error){
            console.error("Error reading tasks", error)
            return[]
        }
    }

    const saveTasks = (tasks) =>{
        fs.writeFileSync(filePath, JSON.stringify (tasks, null, 2))
    }
    export const addTask = (title) =>{
        const tasks = getTasks()
        tasks.push({id: tasks.length + 1, title, status: 'not done'})
        saveTasks(tasks)
        console.log(`task added: "${title}"`)
    }

    export const updateTask = (id,  title) =>{
        const tasks = getTasks()
        const task = tasks.find((t) => t.id == id)

        if (task){
            task.title = title
            saveTasks(tasks)
            console.log(`task update: "${title}"`)
        }else console.log('task not found')
    }

    export const deleteTask = (id)=>{
        const tasks = getTasks().filter((t) => t.id != id)
        saveTasks(tasks)
        console.log(`Task deleted: id ${id}`)
    }

    export const markTask =(id, status)=>{
        const tasks= getTasks()
        const task = tasks.find((t)=> t.id == id)
        if(task){
            task.status = status
            saveTasks(tasks)
            console.log(`task status update: "${status}"`)
        }else console.log('task not found')
    }

    export const listTasks =(filter) =>{
        const tasks = getTasks().filter((t) => (filter ? t.status === filter: true))
        console.log(tasks.length ? tasks : 'no task found')
    }