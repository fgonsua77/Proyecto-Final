# Proyecto DAW con React y Spring Boot
Este proyecto trata sobre desplegar una página de web de venta de Cartas de Juegos de Cartas Coleccionables a.k.a TCG (Trading Card Game)

## Requisitos
| **Programa**               | **Versión** |
|----------------------------|-------------|
| Java                       | _11_        |
| Git                        | _2.35.1_    |
| Spring Tools 4 For Eclipse | _4.14.0_    |
| Visual Studio Code         | _1.65_      |
| XAMPP                      | _8.1.2_     |

## Contenidos
El proyecto se divide en tres partes fundamentales
- Base de Datos de MySQL
- Back End usando Spring Framework
- Front End usando React JS
## Desarrollo
La base sigue esta estructura:

![Diagrama Entidad Relación (Cartas)](https://res.cloudinary.com/dm8cjf50e/image/upload/v1647456756/tcgmarket/image_z1bcop.png)
![Diagrama Entidad Relación (Usuarios)](https://res.cloudinary.com/dm8cjf50e/image/upload/v1647457087/tcgmarket/image_1_gsax4y.png)

### El Back End usa:
 - MVC (Modelo Vista Controlador) para poder administrar y manejar más fácilmente los datos
 - APIRest para proporcionar los datos de forma segura y anónima
 - Spring Security a través de JWT (JSON Web Token)

El APIRest usa los métodos básicos para manejar los datos:
~~~
public interface IServiceCarta {
    List<Carta> encontrarTodas();
    void guardarCarta(Carta carta);
    Carta encontrarUnaCartaPorId(Integer id);
    List<Carta> encontrarCartasPorLineadeNombre(String nombre);
    List<Carta> encontrarCartasPorJuego(String juego);
    List<Carta> encontrarCartasDestacadas();
}
~~~

Y para verificar al usuario, hago un consulta contra la base de datos y tras confirmarlo, generará un JWT y se lo devolvera al Cliente:
~~~
@PostMapping("/login")
    public ResponseEntity<?> signin(@RequestBody Usuarios usuario, HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        System.out.println(usuario);
        Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
        String access_token = JWT.create()
                .withSubject(usuario.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 10 * 60 * 1000))
                .withIssuer(request.getRequestURL().toString())
                .withClaim("perfiles", true)
                .sign(algorithm);
        String refreshToken = JWT.create()
                .withSubject(usuario.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 30 * 60 * 1000))
                .withIssuer(request.getRequestURL().toString())
                .sign(algorithm);
        Map<String, String> map = new HashMap<>();
        map.put("access_token", access_token);
        map.put("refresh_token", refreshToken);
        response.setContentType("application/json");
        return ResponseEntity.ok(map);
    }
~~~

### El Front End usa:
- React-Hooks para inicializar y manejar datos
- React-Redux para manejar las autorizaciones con el JWT
- React-Router-Dom para manejar las rutas del cliente
- Axios para manejar las peticiones HTTP del servidor
- react-bootstrap para implementar elementos de diseño adaptados especialmente a React

### El Front End implementa:
- Una página principal donde se mostrara un menú de navegación para irse a las páginas de *Registrarse* e *Iniciar Sesión* y mostrará los productos destacados empáginados en 4 en 4 con un menú de control entre páginas pero no se podrán agregar a carro hasta que se inicie la sesión.
  - Cuando se inicie sesión, el menú de navegación cambiará y nos dejará ir al *carrito*, a la *lista de productos* y *cerrar la sesión*.
  - Si se ha iniciado sesión, en el despliegue de productos destacados, nos dejará agregar los productos al carrito.
  - Al darle al botón de cerrar sesión
- En la lista de productos tendremos el *despliegue* de todos los productos empáginado igual que el anterior y la *barra de busqueda*.
  - La barra de busqueda buscará por nombre y empáginara el resultado.
  - Si damos click encima de las imágenes iremos a los detalles del producto donde al igual que la páginacion de la página principal, no podrá añadir al carrito y además los links del rastro de migas de pan donde se describe el camino para el usuario no funcionará si no has iniciado sesión.
- En la página de *Inicio de sesión* veremos un formulario donde introduciremos el usuario y la contraseña junto a un botón de reset del formulario y tendremos el botón de iniciar sesión que enviara la petición POST al servidor para verificarla y aceptarla. Una vez aceptada, te envia a la página principal, donde verás que el menú de navegación ha cambiado.
- En la página de *Registro de usuario* veremos un formulario donde introduciremos el email, nombre, nombre de usuario y contraseña, un botón de reset del formulario  y el botón de registro donde envia la petición al servidor y si la verifica, te envia a la página principal

## Para iniciar el proyecto:
- Importa la base de datos a tu servidor MYSQL
- Se debe encender la aplicación de Spring abriendolo en el Spring Tools e iniciandolo en el menú de Spring Boot
- Despues iremos a la carpeta de tcg-market, abrimos el git bash y usamos el comando `npm start`
- Y ya esta! La aplicación esta iniciada y lista para usar
