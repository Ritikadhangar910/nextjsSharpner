"use client";
function Mentor({ params }) {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  let user = details.filter((item) => {
    return item.id === +params.mentor;
  });
  return (
    <>
      <h1>this is mentor page</h1>
      <h2>{user[0].role}</h2>
    </>
  );
}
export default Mentor;
