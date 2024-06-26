-- Get the names of all the students from a single cohort
SELECT id, name
  FROM students
  WHERE cohort_id = 1q
  ORDER BY name;
