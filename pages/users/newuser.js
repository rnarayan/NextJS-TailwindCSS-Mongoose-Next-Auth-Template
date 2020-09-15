import Form from '../../components/newUserForm'

const NewUsr = () => {
  const usrForm = {
    name: '',
    owner_name: '',
    species: '',
    age: 0,
    poddy_trained: false,
    diet: [],
    image_url: '',
    likes: [],
    dislikes: [],
  }

  return <Form formId="add-usr-form" usrForm={usrForm} />
}

export default NewUsr
