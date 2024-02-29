import games from "@/database/games";

export default function handler(req, res) {
    res.status(200).json(games);
}
