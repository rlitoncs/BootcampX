const { Pool } = require("pg");

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "bootcampx",
});

const cohort = process.argv[2];

pool.query(
  `SELECT
 DISTINCT teachers.name AS teachers,
 cohorts.name AS cohort
 FROM teachers
  JOIN assistance_requests
    ON teacher_id = teachers.id
  JOIN students
    ON student_id = students.id
  JOIN cohorts
    ON cohort_id = cohorts.id
  WHERE cohorts.name = '${cohort}'
  ORDER BY teachers.name;`
)
.then((res) => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teachers} `);
  });
  pool.end();
})
.catch((err) => console.error("query error", err.stack));