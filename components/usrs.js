import Link from "next/link"

const Usrs = ({ usrs }) => {

    return (
        <>
            {PageTitle}
            {/* Create a card for each user */}
            {usrs.map((usr) => (
                <div key={usr._id}>

                    <div className="card">
                        <img src={usr.image_url} />
                        <h5 className="pet-name">{usr.name}</h5>
                        <div className="main-content">
                            <p className="pet-name">{usr.name}</p>
                            <p className="owner">Owner: {usr.owner_name}</p>

                            {/* Extra User Info: Likes and Dislikes */}
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
                                <Link href="/users/[id]" as={`/users/${usr._id}`}>
                                    <button className="btn view">View</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

const PageTitle = <div>
    <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">User Management</h1>
    </div>
</div>

export default Usrs