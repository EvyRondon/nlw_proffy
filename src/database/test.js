const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados

    proffyValue = {
        name: 'Mayk Brito',
        avatar: "https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4",
        whatsapp: "8975645321",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em lab. e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20",
        //proffy_id: vira pelao banco de dados
    }

    classScheduleValues = [
        {
            //class_id://virá pelo BD
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            //class_id://virá pelo BD
            weekday: 0,
            time_from: 520,
            time_to: 1220
        },
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //Consultar os dados

    const selectedProffys = await db.all("SELECT * FROM proffys")

    // console.log(selectedProffys);

    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `);

    // console.log(selectedClassesAndProffys);

    // o horario que a pessoa trabalha, por exemplo, é das 8 - 18h
    // o hor. do time_from (8h) precisa ser antes ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= 420
        AND class_schedule.time_to > 1300
    `);

    console.log(selectClassesSchedules);
})