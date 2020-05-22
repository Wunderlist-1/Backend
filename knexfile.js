module.exports = {
	// development: {
		client: "sqlite3",
		connection: {
			filename: "./data/todos-dev.db3",
		},
		useNullAsDefault: true,
		migrations: {
			directory: "./data/migrations",
		},
		seeds: {
			directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
          conn.run("PRAGMA foreign_keys = ON", done)
      }
	  }
	}

	// testing: {
	// 	client: "sqlite3",
	// 	connection: {
	// 		filename: "./data/todos-test.db3",
	// 	},
	// 	useNullAsDefault: true,
	// 	migrations: {
	// 		directory: "./data/migrations",
	// 	},
	// 	seeds: {
	// 		directory: "./data/seeds",
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //         conn.run("PRAGMA foreign_keys = ON", done)
  //     }
	//   }
  // },
  
  // production: {
	// 	client: "sqlite3",
	// 	connection: {
	// 		filename: "./data/todos-dev.db3",
	// 	},
	// 	useNullAsDefault: true,
	// 	migrations: {
	// 		directory: "./data/migrations",
	// 	},
	// 	seeds: {
	// 		directory: "./data/seeds",
  //   },
  //   pool: {
  //     afterCreate: (conn, done) => {
  //         conn.run("PRAGMA foreign_keys = ON", done)
  //     }
	//   }
  // }
// }