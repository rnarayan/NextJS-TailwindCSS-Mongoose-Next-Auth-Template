import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../../utils/dbConnect'
import Usr from '../../../models/Usr'

/* Allows you to view Usr card info and delete Usr card*/
const UsrPage = ({ usr }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')

  const handleDelete = async () => {
    const usrID = router.query.id

    try {
      await fetch(`/api/usrs/${usrID}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the User.')
    }
  }

  return (
    <div key={usr._id}>
      <div className="card">
        <img src={usr.image_url} />
        <h5 className="pet-name">{usr.name}</h5>
        <div className="main-content">
          <p className="pet-name">{usr.name}</p>
          <p className="owner">Owner: {usr.owner_name}</p>

          {/* Extra Pet Info: Likes and Dislikes */}
          <div className="likes info">
            <p className="label">Likes</p>
            <ul>
              {usr.likes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>
          <div className="dislikes info">
            <p className="label">Dislikes</p>
            <ul>
              {usr.dislikes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>

          <div className="btn-container">
            <Link href="/users/[id]/edit" as={`/users/${usr._id}/edit`}>
              <button className="btn edit">Edit</button>
            </Link>
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export async function getServerSideProps({ params }) {
  await dbConnect()

  const usr = await Usr.findById(params.id).lean()
  usr._id = usr._id.toString()
  return { props: { usr } }
}

export default UsrPage
