import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface VolunteerSubmission {
    id: SubmissionId;
    name: string;
    submittedAt: Timestamp;
    email: string;
    availability: string;
    message: string;
    phone: string;
    skills: string;
}
export interface DonationSubmission {
    id: SubmissionId;
    donationType: string;
    name: string;
    submittedAt: Timestamp;
    email: string;
    message: string;
    phone: string;
    amount?: string;
}
export type Timestamp = bigint;
export interface SubmissionResult {
    id: SubmissionId;
    message: string;
    success: boolean;
}
export interface ContactSubmission {
    id: SubmissionId;
    subject: string;
    name: string;
    submittedAt: Timestamp;
    email: string;
    message: string;
    phone?: string;
}
export type SubmissionId = bigint;
export interface backendInterface {
    getContacts(): Promise<Array<ContactSubmission>>;
    getDonations(): Promise<Array<DonationSubmission>>;
    getVolunteers(): Promise<Array<VolunteerSubmission>>;
    submitContact(name: string, email: string, subject: string, message: string, phone: string | null): Promise<SubmissionResult>;
    submitDonation(name: string, email: string, phone: string, donationType: string, amount: string | null, message: string): Promise<SubmissionResult>;
    submitVolunteer(name: string, phone: string, email: string, skills: string, availability: string, message: string): Promise<SubmissionResult>;
}
