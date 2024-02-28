import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Instant-Gaming - Achetez vos jeux moins chères",
    description: "Développé par Drayef Mohamed Amin en React et NextJS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
