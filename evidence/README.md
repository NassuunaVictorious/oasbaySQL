Secure Version
The login endpoint was updated to use parameterized queries with placeholders (?). User input is passed separately from the SQL statement, preventing it from being interpreted as SQL code.

Input Validation
Frontend Validation

The login form includes basic validation such as:

Required fields
Maximum input length
Character restrictions using HTML attributes
Backend Validation

Input is validated before any database query is executed. Validation includes:

Rejecting empty input
Limiting maximum length
Allowing only valid characters
Rejecting invalid requests before accessing the database
Evidence

The evidence folder contains:

SQL injection payload used during testing.
Screenshot of the attack result.
Screenshot of the secure parameterized query.
Screenshot demonstrating frontend and backend validation.