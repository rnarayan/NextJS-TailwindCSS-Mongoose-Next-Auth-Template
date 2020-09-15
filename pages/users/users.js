import Landing from "../../components/landing"
import dbConnect from "../../utils/dbConnect"
import Usr from "../../models/Usr"
import Usrs from "../../components/usrs"
import { useSession } from "next-auth/client"

export default function Index({ usrs }) {
    const [session, loading] = useSession()
    if (loading) return null

    return (
        <>
            {/* {!session && <Landing />}
            {!loading && !session && <AccessDenied />}
            {session && <AuthenticatedHome pets={pets} />} */}
            <Usrs usrs={usrs} />
        </>
    )
}


/* Retrieves pet(s) data from mongodb database */
export async function getServerSideProps() {
    await dbConnect();

    /* find all the data in our database */
    const result = await Usr.find({});
    const usrs = result.map((doc) => {
        const usr = doc.toObject();
        usr._id = usr._id.toString();
        return usr;
    });

    return { props: { usrs: usrs } };
}


