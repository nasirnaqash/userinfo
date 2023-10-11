export default function UserDetail({ selectedUser, closeUserDetails }) {
  const cardTextStyle = {
    fontSize: "14px", // Adjust the font size as needed
  };

  const strongTextStyle = {
    fontSize: "14px", // Adjust the font size as needed
  };
  return (
    <>
      {selectedUser && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body">
                {/* --- */}
                <div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card-text" style={cardTextStyle}>
                          <div className="card-title">
                            {selectedUser.company.name}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="card-text" style={cardTextStyle}>
                          <strong style={strongTextStyle}>CONTACT</strong>
                          <div>{selectedUser.name}</div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="card-text" style={cardTextStyle}>
                          <strong style={strongTextStyle}>CITY</strong>
                          <div>{selectedUser.address.city}</div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="card-text" style={cardTextStyle}>
                          <strong style={strongTextStyle}>WEBSITE</strong>
                          <div>{selectedUser.website}</div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card-text" style={cardTextStyle}>
                          <button
                            onClick={() => closeUserDetails()}
                            className="btn btn-primary btn-sm"
                          >
                            Hide Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* --- */}
                <div className="card mt-4">
                  <div className="container mt-3">
                    <div className="my-2">
                      <div>
                        <strong>Description</strong>
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis dicta corrupti quas unde beatae neque ullam
                        cupiditate consequuntur perferendis temporibus dolore
                        doloremque ipsam, minus, atque libero nihil quos, ab
                        porro!
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mt-1">
                          <div>
                            <strong>Contact Person</strong>
                          </div>
                          <p>{selectedUser.name}</p>
                        </div>
                        <div className="my-1">
                          <div>
                            <strong>Designation</strong>
                          </div>
                          <div>Proprietor</div>
                        </div>
                        <div className="my-1">
                          <div>
                            <strong>Email</strong>
                          </div>
                          <div>{selectedUser.email}</div>
                        </div>
                        <div className="my-1">
                          <div>
                            <strong>Phone</strong>
                          </div>
                          <div>{selectedUser.phone}</div>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="my-1">
                          <div>
                            <strong>Address</strong>
                          </div>
                          <div>
                            {selectedUser.address.street +
                              " " +
                              selectedUser.address.suite +
                              " " +
                              selectedUser.address.city +
                              " " +
                              selectedUser.address.zipcode}
                          </div>
                        </div>
                        <div className="my-1">
                          <strong>City</strong>
                          <div>{selectedUser.address.city}</div>
                        </div>
                        <div className="my-1">
                          <strong>State</strong>
                          <div>{"Washington DC"}</div>
                        </div>
                        <div className="my-1">
                          <strong>Country</strong>
                          <div>{"US"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
