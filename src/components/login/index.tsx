import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { Link } from 'react-router-dom'; // Import Link for navigation

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Redirection après connexion réussie
        } catch (error) {
            console.error("Erreur de connexion :", error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Connexion</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mot de passe"
                    required
                    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring focus:ring-indigo-300"
                />
                <button
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded transition duration-200"
                >
                    Connexion
                </button>
                <p className="mt-4 text-center">
                    Pas encore de compte?{' '}
                    <Link to="/signup" className="text-indigo-500 hover:underline">
                        S'inscrire
                    </Link>
                </p>
            </form>
        </div>
    );
}
