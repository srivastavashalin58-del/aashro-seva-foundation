import List "mo:core/List";

module {
  type OldActor = {};

  type VolunteerSubmission = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    skills : Text;
    availability : Text;
    message : Text;
    submittedAt : Int;
  };

  type DonationSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    donationType : Text;
    amount : ?Text;
    message : Text;
    submittedAt : Int;
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    phone : ?Text;
    submittedAt : Int;
  };

  type NewActor = {
    volunteers : List.List<VolunteerSubmission>;
    donations : List.List<DonationSubmission>;
    contacts : List.List<ContactSubmission>;
    counter : { var nextId : Nat };
  };

  public func migration(_ : OldActor) : NewActor {
    {
      volunteers = List.empty<VolunteerSubmission>();
      donations = List.empty<DonationSubmission>();
      contacts = List.empty<ContactSubmission>();
      counter = { var nextId = 0 };
    };
  };
};
