const express = require('express')
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const knex = require('knex')

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'antartica',
        database: 'PetLove'
    }

})

db.select('*').from('users').then(data => {
    console.log(data)
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

const BD = db.select('*').from('users').then(data => {
    return(data)
})
app.get('/', (req, res) => {

    res.send(BD)
})

app.post('/signin', (req, res) => {

    db.select('email', 'hash').from('login')
        .where('email', '=', req.body.USER_EMAIL)
        .then(data => {
            // Load hash from your password DB.
            const isValid = bcrypt.compareSync(req.body.USER_PASSWORD, data[0].hash);
            console.log(isValid)

            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', req.body.USER_EMAIL)
                    .then(user => {
                        res.json(user[0])
                        console.log(req.body.USER_EMAIL, user[0])
                    })
                    .catch(err => res.status(400).json('unable to get user'))
            } else {
                res.status(400).json('wrong credentials')
            }
        })
        .catch(err => res.status(400).json('wrong credentials'))
})

app.post('/register', (req, res) => {
    const { USER_NAME, USER_EMAIL, USER_BIRTHDAY, USER_PASSWORD } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(USER_PASSWORD, salt);
    // Store hash in your password DB.
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: USER_EMAIL,
        })
            .into('login')
            .returning('email')
            .then(loginEmail => {
                return trx('users')
                    .returning('*')
                    .insert({
                        email: loginEmail[0],
                        name: USER_NAME,
                        birthday: USER_BIRTHDAY,
                        joined: new Date()
                    }).then(user => {
                        res.json(user[0])
                    })
            })
            .then(trx.commit)
            .catch(trx.rollback)

    })
        .catch(err => res.status(400).json('unable to register '+err))
})

app.listen(3001, () => {
    console.log('app is running on port 3001')
})
