import Debug "mo:core/Debug";
import Types "../types/submissions";
import Common "../types/common";
import List "mo:core/List";

module {
  public type State = {
    volunteers : List.List<Types.VolunteerSubmission>;
    donations : List.List<Types.DonationSubmission>;
    contacts : List.List<Types.ContactSubmission>;
    counter : { var nextId : Common.SubmissionId };
  };

  public func addVolunteer(
    state : State,
    name : Text,
    phone : Text,
    email : Text,
    skills : Text,
    availability : Text,
    message : Text,
    now : Common.Timestamp,
  ) : Types.SubmissionResult {
    ignore (state, name, phone, email, skills, availability, message, now);
    Debug.todo();
  };

  public func addDonation(
    state : State,
    name : Text,
    email : Text,
    phone : Text,
    donationType : Text,
    amount : ?Text,
    message : Text,
    now : Common.Timestamp,
  ) : Types.SubmissionResult {
    ignore (state, name, email, phone, donationType, amount, message, now);
    Debug.todo();
  };

  public func addContact(
    state : State,
    name : Text,
    email : Text,
    subject : Text,
    message : Text,
    phone : ?Text,
    now : Common.Timestamp,
  ) : Types.SubmissionResult {
    ignore (state, name, email, subject, message, phone, now);
    Debug.todo();
  };

  public func getAllVolunteers(state : State) : [Types.VolunteerSubmission] {
    ignore state;
    Debug.todo();
  };

  public func getAllDonations(state : State) : [Types.DonationSubmission] {
    ignore state;
    Debug.todo();
  };

  public func getAllContacts(state : State) : [Types.ContactSubmission] {
    ignore state;
    Debug.todo();
  };
};
