-- Select all rollover students.
SELECT 
  students.name,
  cohorts.name ,
  students.start_date AS students_start_date, 
  cohorts.start_date AS cohorts_start_date
 FROM students JOIN cohorts ON cohort_id = cohorts.id
 WHERE students.start_date <> cohorts.start_date
 ORDER BY cohorts_start_date;