import List "mo:core/List";
import SubmissionsApi "mixins/submissions-api";
import SubmissionsLib "lib/submissions";
import Types "types/submissions";

actor {
  let volunteers : List.List<Types.VolunteerSubmission>;
  let donations : List.List<Types.DonationSubmission>;
  let contacts : List.List<Types.ContactSubmission>;
  let counter : { var nextId : Nat };

  transient let state : SubmissionsLib.State = { volunteers; donations; contacts; counter };

  include SubmissionsApi(state);
};

