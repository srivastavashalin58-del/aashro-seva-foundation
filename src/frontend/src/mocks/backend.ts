import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getContacts: async () => [
    {
      id: BigInt(1),
      subject: "Inquiry about volunteering",
      name: "Ramesh Patel",
      submittedAt: BigInt(1716700000000000000),
      email: "ramesh.patel@example.com",
      message: "I would like to know more about volunteer opportunities.",
      phone: "+91 98765 43210",
    },
  ],
  getDonations: async () => [
    {
      id: BigInt(1),
      donationType: "Financial Support",
      name: "Meena Shah",
      submittedAt: BigInt(1716700000000000000),
      email: "meena.shah@example.com",
      message: "Happy to support this wonderful cause.",
      phone: "+91 91234 56789",
      amount: "5000",
    },
  ],
  getVolunteers: async () => [
    {
      id: BigInt(1),
      name: "Kavita Desai",
      submittedAt: BigInt(1716700000000000000),
      email: "kavita.desai@example.com",
      availability: "Weekends",
      message: "I want to spend time with elderly residents.",
      phone: "+91 99887 76655",
      skills: "Healthcare, Cooking",
    },
  ],
  submitContact: async (_name, _email, _subject, _message, _phone) => ({
    id: BigInt(1),
    message: "Your message has been submitted successfully. We will get back to you soon.",
    success: true,
  }),
  submitDonation: async (_name, _email, _phone, _donationType, _amount, _message) => ({
    id: BigInt(1),
    message: "Thank you for your generous donation! Your contribution will make a difference.",
    success: true,
  }),
  submitVolunteer: async (_name, _phone, _email, _skills, _availability, _message) => ({
    id: BigInt(1),
    message: "Thank you for registering as a volunteer! We will contact you shortly.",
    success: true,
  }),
};
