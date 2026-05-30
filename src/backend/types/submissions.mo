import Common "common";

module {
  public type VolunteerSubmission = {
    id : Common.SubmissionId;
    name : Text;
    phone : Text;
    email : Text;
    skills : Text;
    availability : Text;
    message : Text;
    submittedAt : Common.Timestamp;
  };

  public type DonationSubmission = {
    id : Common.SubmissionId;
    name : Text;
    email : Text;
    phone : Text;
    donationType : Text;
    amount : ?Text;
    message : Text;
    submittedAt : Common.Timestamp;
  };

  public type ContactSubmission = {
    id : Common.SubmissionId;
    name : Text;
    email : Text;
    subject : Text;
    message : Text;
    phone : ?Text;
    submittedAt : Common.Timestamp;
  };

  public type SubmissionResult = {
    id : Common.SubmissionId;
    success : Bool;
    message : Text;
  };
};
