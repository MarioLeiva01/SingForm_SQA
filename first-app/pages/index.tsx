import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState<{ 
    username: string; 
    password: string; 
    fullName: string; 
    email: string; 
    phone: string; 
    address: string 
  }[]>([]);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [showRegister, setShowRegister] = useState(false); // Nuevo estado para mostrar/ocultar registro

  const handleLogin = () => {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      setMessage('¡Login exitoso!');
      setTimeout(() => setMessage(`¡Login exitoso! Detalles: ${user.fullName}, ${user.email}, ${user.phone}, ${user.address}`), 0);
    } else {
      setMessage('Usuario o contraseña incorrectos');
    }
  };

  const handleRegister = () => {
    if (newUsername && newPassword && fullName && email && phone && address) {
      if (users.some(u => u.username === newUsername)) {
        setMessage('Usuario ya existe');
      } else {
        setUsers([...users, { username: newUsername, password: newPassword, fullName, email, phone, address }]);
        setMessage('¡Usuario registrado con éxito!');
        setNewUsername('');
        setNewPassword('');
        setFullName('');
        setEmail('');
        setPhone('');
        setAddress('');
        setShowRegister(false); // Ocultar el formulario después de registrar
      }
    } else {
      setMessage('Por favor, completa todos los campos');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-black">Login</h1>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-black"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 text-black"
        >
          Iniciar Sesión
        </button>

        {showRegister ? (
          <>
            <h2 className="text-xl font-semibold mt-6 mb-4 text-center text-black">Registro</h2>
            <input
              type="text"
              placeholder="Nuevo Usuario"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-black"
            />
            <input
              type="password"
              placeholder="Nueva Contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-black"
            />
            <input
              type="text"
              placeholder="Nombre Completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-black"
            />
            <input
              type="email"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-black"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-black"
            />
            <input
              type="text"
              placeholder="Dirección"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full p-2 mb-4 border rounded text-black"
            />
            <button
              onClick={handleRegister}
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 text-black"
            >
              Registrarse
            </button>
          </>
        ) : (
          <button
            onClick={() => setShowRegister(true)}
            className="w-full bg-gray-500 text-white p-2 rounded mt-4 hover:bg-gray-600 text-black"
          >
            Mostrar Registro
          </button>
        )}

        <p className="mt-4 text-center text-black">{message}</p>
      </div>
    </div>
  );
}