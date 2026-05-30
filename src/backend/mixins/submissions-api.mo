import Debug "mo:core/Debug";
import Lib "../lib/submissions";
import Types "../types/submissions";
import Time "mo:core/Time";

mixin (state : Lib.State) {
  public func submitVolunteer(
    name : Text,
    phone : Text,
    email : Text,
    skills : Text,
    availability : Text,
    message : Text,
  ) : async Types.SubmissionResult {
    ignore (name, phone, email, skills, availability, message);
    Debug.todo();
  };

  public func submitDonation(
    name : Text,
    email : Text,
    phone : Text,
    donationType : Text,
    amount : ?Text,
    message : Text,
  ) : async Types.SubmissionResult {
    ignore (name, email, phone, donationType, amount, message);
    Debug.todo();
  };

  public func submitContact(
    name : Text,
    email : Text,
    subject : Text,
    message : Text,
    phone : ?Text,
  ) : async Types.SubmissionResult {
    ignore (name, email, subject, message, phone);
    Debug.todo();
  };

  public query func getVolunteers() : async [Types.VolunteerSubmission] {
    ignore state;
    Debug.todo();
  };

  public query func getDonations() : async [Types.DonationSubmission] {
    ignore state;
    Debug.todo();
  };

  public query func getContacts() : async [Types.ContactSubmission] {
    ignore state;
    Debug.todo();
  };
};
