import LinkRenderer from "./components/LinkRenderer";

export const colDefs = [
  { field: "state", },
  {
    field: "deadlineInPerson",
    cellDataType: 'dateString',
  },
  {
    field: "deadlineByMail",
    cellDataType: 'dateString',
  },
  {
    field: "deadlineOnline",
    cellDataType: 'dateString',
  },
  { field: "electionDayRegistration", },
  {
    field: "onlineRegistrationLink",
    cellRenderer: LinkRenderer,
    headerName: 'Online Registration via archive.org',
  },
  {
    field: "description",
    width: 500,
  },
];

export const DEADLINES_API = 'http://localhost:3000/api/deadlines'
