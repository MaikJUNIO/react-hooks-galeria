<h1>🔌 API REST – Galería de Fotos (JSON Server)</h1>

<p>
API REST simulada creada con <strong>JSON Server</strong>, utilizada por el frontend en React
para la gestión y visualización de fotografías.
</p>

<p>
Esta API forma parte del proyecto <strong>React Hooks Galería</strong> y se encuentra en una
<strong>rama independiente</strong> para mantener una separación clara entre frontend y backend.
</p>

<hr />

<h2>🚀 Tecnologías utilizadas</h2>
<ul>
  <li>Node.js</li>
  <li>JSON Server</li>
  <li>JavaScript</li>
</ul>

<hr />

<h2>📂 Estructura del proyecto</h2>

<pre>
api/
 ├── fotos.json
 ├── package.json
 └── package-lock.json
</pre>

<hr />

<h2>⚙️ Instalación y uso</h2>

<h3>1️⃣ Clonar el repositorio</h3>
<pre>
git clone https://github.com/MaikJUNIO/react-hooks-galeria.git
</pre>

<h3>2️⃣ Cambiar a la rama de la API</h3>
<pre>
git checkout api-json-server
</pre>

<h3>3️⃣ Instalar dependencias</h3>
<pre>
npm install
</pre>

<h3>4️⃣ Iniciar la API</h3>
<pre>
npx json-server fotos.json --port 3000
</pre>

<hr />

<h2>🌐 Endpoints disponibles</h2>

<h3>Obtener todas las fotos</h3>
<pre>
GET http://localhost:3000/fotos
</pre>

<hr />

<h2>🔗 Integración con el Frontend</h2>

<p>
El frontend desarrollado en <strong>React</strong> consume esta API mediante peticiones HTTP
(<code>fetch</code>) utilizando <code>useEffect</code>.
</p>

<p>
<strong>⚠️ Importante:</strong><br />
La API debe estar ejecutándose antes de iniciar el frontend para que la aplicación
funcione correctamente.
</p>

<hr />

<h2>🧠 Notas técnicas</h2>
<ul>
  <li>Simula un backend real para desarrollo frontend</li>
  <li>Permite una arquitectura desacoplada (frontend / backend)</li>
  <li>Ideal para prácticas con consumo de APIs REST</li>
  <li>Facilita pruebas locales sin necesidad de un servidor real</li>
</ul>

<hr />

<h2>📌 Rama principal del proyecto</h2>

<p>
👉 El frontend en React se encuentra en la rama <strong>main</strong>
</p>

<hr />

<p>
<em>
Proyecto desarrollado con fines educativos y demostrativos de buenas prácticas
en React y consumo de APIs REST.
</em>
</p>
