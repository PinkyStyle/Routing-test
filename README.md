# Routing-test
Prueba técnica para Front Mobile Developer en Routing

## Dependencias Necesarias para la ejecución del proyecto

A continuación se presentan las distintas dependencias que se requieren instalar para poder ejecutar el programa de prueba.

Primero que nada, debe de contar con [Node.js](https://nodejs.org/en/download/) y [Expo CLI](https://docs.expo.dev/get-started/installation/) instalados en su sistema:

Luego, debe de instalar las siguientes dependencias:
### React Navigation
```
npm install @react-navigation/native
npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install @react-navigation/native-stack

```
### Firebase
```
npx expo install firebase

```

### Otros
```
npm install @react-navigation/bottom-tabs
npx expo install react-native-maps

```
## Tecnologías utilizadas
Además de la utilización de React Native y Expo, se utilizó Firebase como Backend.
Primero, tenemos Firebase Authentication, el cual permitió la creación del Login/Logout, además de dar una pequeña capa de seguridad. Por otro lado, se utilizó Realtime Database para almacenar los datos de los usuarios. Dichos datos se obtuvieron mediante peticiones directamente a la base de datos de Realtime Database metiante [Fetch API](https://reactnative.dev/docs/network).
Por último, se utilizo [react-native-maps](https://github.com/react-native-maps/react-native-maps) para generar la vista del mapa en la aplicacíon. Dicho componente interactúa con Google Maps.

## Detalles a tener en cuenta
- Solo existen 2 usuarios en el sistema. A continuación estan los datos para acceder al sistema.
  - email: Admin@gmail.com , password: 12345678
  - email: Matias@gmail.com , password: 12345678
- En la vista de mapas existen 3 botones, los cuales representar 3 rutas distintas con 3 lugares distintos. Recomiendo hacer ZoomOut al ver las Rutas 2 y 3.
- La aplicación se testeó con Expo GO. Lamentablemente no supe como probarlo en IOS, pero teóricamente todos los componentes que usé deberian de ser utilizables tanto en Android como IOS. 
- Puede que al abrir la aplicacion aparezca una "alerta" sobre asyncStorage (Honestamente no supe como "arreglar" eso, pero todo funciona como debería).

