import React, { useState } from "react";

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [counter, setCounter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.InputName.value;
    const lastName = e.target.elements.InputLastName.value;
    const phone = e.target.elements.InputPhone.value;

    const newContact = {
      id: counter,
      name,
      lastName,
      phone,
    };

    setContacts([...contacts, newContact]);
    setCounter(counter + 1);

    e.target.reset();
  };

  return (
    <div className="main center-row">
      <div className="w-75 mt-3 p-2">
        <div className="row">
          <div className="col contactBox">
            <div className="addContact">
              <form className="form text-center" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="InputName"></label>
                  <input type="text" className="form-control" id="InputName" placeholder="Name" />
                  <label htmlFor="InputLastName"></label>
                  <input type="text" className="form-control" id="InputLastName" placeholder="Last Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="InputPhone"></label>
                  <input type="text" className="form-control" id="InputPhone" placeholder="Phone Number" />
                </div>
                <br />
                <br />
                <button type="submit" className="btn btn-primary">Add</button>
                <br />
                <br />
                <br />
              </form>
            </div>
          </div>
          <div className="col">
            {/* Sağ tarafın diğer içeriği */}
          </div>
          <div className="col">
            <div id="accordion">
              {contacts.map((contact) => (
                <div key={contact.id} className="card mb-1">
                  <div className="card-header">
                    <a href={`#collapse${contact.id}`} className="card-link" data-bs-toggle="collapse">
                      {contact.name} {contact.lastName}
                    </a>
                  </div>
                  <div id={`collapse${contact.id}`} className={`collapse ${contact.id === counter - 1 ? "show" : ""}`} data-parent="#accordion">
                    <div className="card-body">
                      <p>{contact.phone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
