import Contacts from '../../models/contactsModel';
import connectMongo from '../../utils/functions/connectMongo';

/**
 * 
 * @param {import('next').NextApiRequest} req 
 * @param {import('next').NextApiResponse} res 
 */

export default async function handler(req, res) {
    console.log("Connecting with DB")
    try {

        // connecting with monogDB
        await connectMongo();
        console.log("Successfuly conneted with DB");

        // Getting all contacts emails
        const contacts = await Contacts.find({ userId: req.query.userId }).sort({ createdAt: -1 });
        let emails = [];
        if (contacts.length) { emails = contacts.map(e => e.email) };
        res.status(200).json(emails);
    } catch (err) {
        // if server catches any error
        res.status(500).json({ success: false, message: err.message });
    }

}