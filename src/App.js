import "./App.css";
import contactsJSON from "./contacts.json";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(0, 5));
  let contactsArray = [...contacts];

  const addRandomContacts = () => {
    const randomContacts =
      contactsJSON[Math.floor(Math.random() * contactsJSON.length)];
    
    setContacts([...contacts, randomContacts]);
  };

  const sortByPopularity = () => {
    contactsArray.sort(function (a, b) {
      return b.popularity - a.popularity;
    });

    setContacts(contactsArray);
  };

  const sortByName = () => {
    contactsArray.sort((a, b) => a.name.localeCompare(b.name));
    setContacts(contactsArray);
  };

  const deleteContacts = (contactsId) => {
    const contactsNoDeleted = contactsArray.filter((contact) => {
      return contact.id !== contactsId;
    });
    setContacts(contactsNoDeleted);
  };

  return (
    <div className="tableCelebrity">
      <div className="tableDiv">
        <h1>IronContacts</h1>
        <div>
          <button onClick={addRandomContacts} className="btn">
            Add Random Contact
          </button>
          <button onClick={sortByPopularity} className="btn">
            Sort by popularity
          </button>
          <button onClick={sortByName} className="btn btn-danger">
            Sort by name
          </button>
        </div>

        <th> Picture </th>
        <th> Name </th>
        <th> Popularity </th>
        <th> Won Oscar</th>
        <th> Won Emmy</th>

        {contacts.map((celebrity) => {
          return (
            <table>
              <img
                src={celebrity.pictureUrl}
                width="100px"
                height="120px"
                alt="celebrity"
              />
              <td>{celebrity.name}</td>
              <td>{Number(celebrity.popularity).toFixed(2)}</td>
              <td>{celebrity.wonOscar ? "🏆" : ""}</td>
              <td>{celebrity.wonEmmy ? "🏆" : ""}</td>
              <button
                onClick={() => {
                  deleteContacts(celebrity.id);
                }}
                className="btn btn-danger"
              >
                Delete
              </button>
            </table>
          );
        })}
      </div>
    </div>
  );
}

export default App;
