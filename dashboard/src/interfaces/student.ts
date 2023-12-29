export interface Student {
  name: {
    first: string;
    last: string;
  };
  email: string;
  room: number;
  emergency: {
    blood_type: string;
    contact: string;
    address: string;
  };
}
