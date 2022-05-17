package nando.proyect.entornoServidor.service;

import java.util.List;

import nando.proyect.entornoServidor.model.Juego;
public interface IServiceJuego {
    Juego encontrarUnaJuegoPorId(Integer id);
    void guardarJuego(Juego juego);
    List<Juego> encontrarTodas();
    void borrarJuego(Juego juego);
    
}
