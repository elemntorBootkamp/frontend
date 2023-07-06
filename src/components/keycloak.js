import Keycloak from 'keycloak-js';
const keycloak = new Keycloak({
	url: 'http://localhost:8080/',
	realm: 'REACT',
	clientId: 'react-app',
	// publicKey:'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmQmO9rTAvQh/YWBVj2ZzQtbXqWxiOWgQpjwGoZM7eB6gB5OxVVJ2gWJzhSUmXuRXitD4LS51d9WxI987M8uv3MN1cOKJbdD/1vqGTwNh9uMmAS4vK0WUjg5B4WK4bUtALge7ljFQyzAAK1elaZLom0Xx1FSMAbqbd8UzrJwjGlLujiFHPq6l2KhS/d219+egMqE7AzN8hsiDlUKb7KZaopP4K8sWMZQ5GRwMU9GnGkZQmLcAAlfJH+VCQbNe9/DrWnkdkIx+xqTgCFpj9XzQ5jfDbA1g5bz7gabqJscMb6T3NsRijqpEBTYF23SqvuYcXbCsiCCRt2I/aLOdwtFpNQIDAQAB'
});
export default keycloak;