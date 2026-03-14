import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Home from "../pages/index";

describe("Pruebas de aceptación", () => {
  test("flujo de registro exitoso y login correcto", () => {
    render(<Home />);

    // Mostrar formulario de registro
    fireEvent.click(screen.getByText("Mostrar Registro"));

    // Registrar un usuario
    fireEvent.change(screen.getByPlaceholderText("Nuevo Usuario"), { target: { value: "juan" } });
    fireEvent.change(screen.getByPlaceholderText("Nueva Contraseña"), { target: { value: "1234" } });
    fireEvent.change(screen.getByPlaceholderText("Nombre Completo"), { target: { value: "Juan Pérez" } });
    fireEvent.change(screen.getByPlaceholderText("Correo"), { target: { value: "juan@test.com" } });
    fireEvent.change(screen.getByPlaceholderText("Teléfono"), { target: { value: "123456" } });
    fireEvent.change(screen.getByPlaceholderText("Dirección"), { target: { value: "Calle 123" } });
    fireEvent.click(screen.getByText("Registrarse"));

    // Login con el usuario recién creado
    fireEvent.change(screen.getByPlaceholderText("Usuario"), { target: { value: "juan" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "1234" } });
    fireEvent.click(screen.getByText("Iniciar Sesión"));

    // Verificamos mensaje final
    expect(screen.getByText(/Login exitoso/)).toBeInTheDocument();
  });

  test("login incorrecto muestra mensaje de error", () => {
    render(<Home />);

    fireEvent.change(screen.getByPlaceholderText("Usuario"), { target: { value: "admin" } });
    fireEvent.change(screen.getByPlaceholderText("Contraseña"), { target: { value: "wrong" } });
    fireEvent.click(screen.getByText("Iniciar Sesión"));

    expect(screen.getByText("Usuario o contraseña incorrectos")).toBeInTheDocument();
  });

  test("registro duplicado muestra mensaje de error", () => {
    render(<Home />);

    fireEvent.click(screen.getByText("Mostrar Registro"));

    // Primer registro
    fireEvent.change(screen.getByPlaceholderText("Nuevo Usuario"), { target: { value: "juan" } });
    fireEvent.change(screen.getByPlaceholderText("Nueva Contraseña"), { target: { value: "1234" } });
    fireEvent.change(screen.getByPlaceholderText("Nombre Completo"), { target: { value: "Juan Pérez" } });
    fireEvent.change(screen.getByPlaceholderText("Correo"), { target: { value: "juan@test.com" } });
    fireEvent.change(screen.getByPlaceholderText("Teléfono"), { target: { value: "123456" } });
    fireEvent.change(screen.getByPlaceholderText("Dirección"), { target: { value: "Calle 123" } });
    fireEvent.click(screen.getByText("Registrarse"));

    // Intento duplicado
    fireEvent.click(screen.getByText("Mostrar Registro"));
    fireEvent.change(screen.getByPlaceholderText("Nuevo Usuario"), { target: { value: "juan" } });
    fireEvent.change(screen.getByPlaceholderText("Nueva Contraseña"), { target: { value: "abcd" } });
    fireEvent.change(screen.getByPlaceholderText("Nombre Completo"), { target: { value: "Juan Pérez" } });
    fireEvent.change(screen.getByPlaceholderText("Correo"), { target: { value: "juan@test.com" } });
    fireEvent.change(screen.getByPlaceholderText("Teléfono"), { target: { value: "123456" } });
    fireEvent.change(screen.getByPlaceholderText("Dirección"), { target: { value: "Calle 123" } });
    fireEvent.click(screen.getByText("Registrarse"));

    expect(screen.getByText("Usuario ya existe")).toBeInTheDocument();
  });

  test("registro con campos vacíos muestra mensaje de error", () => {
    render(<Home />);

    fireEvent.click(screen.getByText("Mostrar Registro"));

    // Intento de registro con campos vacíos
    fireEvent.click(screen.getByText("Registrarse"));

    expect(screen.getByText("Por favor, completa todos los campos")).toBeInTheDocument();
  });
});
