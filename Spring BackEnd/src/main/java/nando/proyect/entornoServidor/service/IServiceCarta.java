package nando.proyect.entornoServidor.service;

import java.util.List;

import nando.proyect.entornoServidor.model.Carta;

public interface IServiceCarta {
    List<Carta> encontrarTodas();
    void guardarCarta(Carta carta);
    Carta encontrarUnaCartaPorId(Integer id);
    List<Carta> encontrarCartasPorLineadeNombre(String nombre);
    List<Carta> encontrarCartasPorJuego(String juego);
}
