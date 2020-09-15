import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '../../../components/newUserForm'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditUsr = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: usr, error } = useSWR(id ? `/api/usrs/${id}` : null, fetcher)

  if (error) return <p>Failed to load</p>
  if (!usr) return <p>Loading...</p>

  const usrForm = {
    name: usr.name,
    owner_name: usr.owner_name,
    species: usr.species,
    age: usr.age,
    poddy_trained: usr.poddy_trained,
    diet: usr.diet,
    image_url: usr.image_url,
    likes: usr.likes,
    dislikes: usr.dislikes,
  }

  return <Form formId="edit-usr-form" usrForm={usrForm} forNewUsr={false} />
}

export default EditUsr
