export default function handler(req, res) {
    const endDate = new Date(ProcessingInstruction.env.SUBSCRIPTION_END_DATE)
    const today = new Date()
    const isActive = today <= endDate

    res.json({ active: isActive})
}