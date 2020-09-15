import dbConnect from '../../../utils/dbConnect'
import Usr from '../../../models/Usr'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const usrs = await Usr.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: usrs })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const usr = await Usr.create(req.body) /* create a new model in the database */
                res.status(201).json({ success: true, data: usr })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
