import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

export default function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate(); // Initialiser useNavigate

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null); // Réinitialiser l'erreur lors de l'envoi du formulaire
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Rediriger après l'inscription réussie
            navigate('/chats'); // Changez '/dashboard' par la route souhaitée
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                setError("Cette adresse e-mail est déjà associée à un compte.");
            } else {
                setError("Erreur d'inscription : " + error.message);
            }
        }        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSignup} className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">S'inscrire</h2>
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
                    S'inscrire
                </button>
                {error && <p className="text-red-500 mt-4">{error}</p>} {/* Afficher l'erreur si présente */}
            </form>
        </div>
    );
}
