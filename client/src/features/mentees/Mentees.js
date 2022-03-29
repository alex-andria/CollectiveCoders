import MenteeList from "./MenteeList";

function Mentees({mentees, setMenteeData}) {

  return (
    <div className="App">
      <h1>Mentees Page</h1>
      <MenteeList mentees={mentees} setMenteeData={setMenteeData} />
    </div>
  );
}

export default Mentees;