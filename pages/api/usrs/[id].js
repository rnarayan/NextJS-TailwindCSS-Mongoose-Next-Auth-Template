import dbConnect from '../../../utils/dbConnect'
import Usr from '../../../models/Usr'

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const usr = await Usr.findById(id)
                if (!usr) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: usr })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const usr = await Usr.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })
                if (!usr) {return res.status(400).json({ success: false })}
                res.status(200).json({ success: true, data: usr })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedUsr = await Usr.deleteOne({ _id: id })
                if (!deletedUsr) {return res.status(400).json({ success: false })}
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
