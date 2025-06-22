import { NextRequest } from 'next/server';
import sequelize from '../../db/sequelize';
import VoterRegistrationDeadline from '../../models/voter-registration-deadline';

export async function GET(request: NextRequest) {
  try {
    await sequelize.authenticate();
    const deadlines = await VoterRegistrationDeadline.findAll()

    return new Response(
      JSON.stringify(deadlines),
      {
        headers: { "Content-Type": "application/json", },
      },
    );
  } catch(error) {
    console.error(error);

    return new Response(
      JSON.stringify({ message: 'Something went wrong' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json', },
      }
    );
  }
}
