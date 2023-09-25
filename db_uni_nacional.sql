CREATE TABLE subjects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    code VARCHAR(10),
    professor VARCHAR(100)
);
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    date_of_birth DATE,
    identification_number VARCHAR(20),
    address VARCHAR(255),
    email VARCHAR(100),
    password VARCHAR(255),
    username VARCHAR(50) UNIQUE NOT NULL,
);

CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    student_id INT,
    subject_id INT,
    enrollment_date DATE,
    status VARCHAR(20),
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id)
);
ALTER TABLE enrollments
ADD COLUMN score NUMERIC(5, 2);

CREATE TABLE prerequisites (
    prerequisite_id SERIAL PRIMARY KEY,
    main_subject_id INT,
    required_subject_id INT,
    additional_note TEXT,
    FOREIGN KEY (main_subject_id) REFERENCES subjects(id),
    FOREIGN KEY (required_subject_id) REFERENCES subjects(id)
);
/*CREATE TABLE scores (
  score_id SERIAL PRIMARY KEY,
  enrollment_id INT REFERENCES enrollments(id),
  score_value NUMERIC(5, 2),
  completion_date DATE
);*/
