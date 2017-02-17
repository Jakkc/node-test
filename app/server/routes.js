import express from 'express';
const routes = express();

routes.get('/', (req,res) => {
	res.render('home', {
		name: 'Jack'
	})
})

// routes.get('/users', (req,res) => {
// 	pg.connect(conString,(err,client,done) => {
// 		if(err) return next(err)
// 		client.query('SELECT name,age FROM users;',[],(err,result) => {
// 			done()
// 			if(err) return next(err)
// 			res.render('users', {
// 				rows: result.rows
// 			})
// 		})
// 	})
// })

export default routes;