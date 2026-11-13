import StudentProfileCard from './StudentProfileCard';

function App() {
  return (
    <div className="app-container">
      <h1>Student Directory</h1>
      <div className="cards-container">
        <StudentProfileCard
          name="Kahlen Ong"
          studentId="202699471"
          major="Computer Engineering"
          year={1}
          gpa={4.1}
        />
        <StudentProfileCard
          name="Aale Aaditi"
          studentId="202537195"
          major="Computer Engineering"
          year={2}
          gpa={4.0}
        />
        <StudentProfileCard
          name="Shrestha Puja"
          studentId="202537250"
          major="Computer Engineering"
          year={2}
          gpa={4.1}
        />
      </div>
    </div>
  );
}

export default App;
