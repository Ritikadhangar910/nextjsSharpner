"use client";
import Link from "next/link";
function List() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      <h3>this is Mentor list</h3>
      {details.map((item) => (
        <div key={item.id}>
          <Link href={`/list/${item.id}`}>{item.name}</Link>
        </div>
      ))}
    </>
  );
}
export default List;
