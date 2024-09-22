export default function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Here you would implement your logic to validate the username and password
        const storedUsername = process.env.USERNAME; // Replace with your logic
        const storedPassword = process.env.PASSWORD; // Replace with your logic

        if (username === storedUsername && password === storedPassword) {
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
