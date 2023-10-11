export default function User({currentUsers, openUserDetails}) {

  const cardTextStyle = {
    fontSize: "14px", // Adjust the font size as needed
  };

  const strongTextStyle = {
    fontSize: "14px", // Adjust the font size as needed
  };
  return (
    <>
      {currentUsers.map((user) => (
        <div className="row mb-4" key={user.id}>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card-text" style={cardTextStyle}>
                      <div className="card-title">{user.company.name}</div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card-text" style={cardTextStyle}>
                      <strong style={strongTextStyle}>CONTACT</strong>
                      <div>{user.name}</div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card-text" style={cardTextStyle}>
                      <strong style={strongTextStyle}>CITY</strong>
                      <div>{user.address.city}</div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="card-text" style={cardTextStyle}>
                      <strong style={strongTextStyle}>WEBSITE</strong>
                      <div>{user.website}</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card-text" style={cardTextStyle}>
                      <button
                        onClick={() => openUserDetails(user)}
                        className="btn btn-primary btn-sm"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
