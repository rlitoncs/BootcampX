-- Get all students without a Github username and Order by cohort_id
SELECT id, name, email, cohort_id
  FROM students
  WHERE github IS NULL
  ORDER BY cohort_id;