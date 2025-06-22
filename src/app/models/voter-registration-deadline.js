'use strict';
import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/sequelize';

class VoterRegistrationDeadline extends Model {
}
VoterRegistrationDeadline.init({
  state: {
    field: 'State',
    type: DataTypes.STRING,
    primaryKey: true,
  },
  deadlineInPerson: {
    field: 'DeadlineInPerson',
    type: DataTypes.STRING,
  },
  deadlineByMail: {
    field: 'DeadlineByMail',
    type: DataTypes.STRING,
  },
  deadlineOnline: {
    field: 'DeadlineOnline',
    type: DataTypes.STRING,
  },
  electionDayRegistration: {
    field: 'ElectionDayRegistration',
    type: DataTypes.STRING,
  },
  onlineRegistrationLink: {
    field: 'OnlineRegistrationLink',
    type: DataTypes.STRING,
  },
  description: {
    field: 'Description',
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  tableName: 'voter_registration_deadlines',
  timestamps: false,
});

export default VoterRegistrationDeadline;
