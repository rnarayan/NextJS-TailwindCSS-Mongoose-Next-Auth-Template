import Landing from "../components/landing"
import dbConnect from "../utils/dbConnect"
import Pet from "../models/Pet"
import { useSession } from "next-auth/client"
import AccessDenied from '../components/accessdenied'
import AuthenticatedHome from '../components/authenticatedhome'

export default function Index({ pets }) {
  const [session, loading] = useSession()
  if (loading) return null
  
  return (
    <>
      {!session && <Landing/>}
      {!loading && !session && <AccessDenied/>}
      {session && <AuthenticatedHome pets={pets} />}
    </>
  )
}


/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Pet.find({});
  const pets = result.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    return pet;
  });

  return { props: { pets: pets } };
}


