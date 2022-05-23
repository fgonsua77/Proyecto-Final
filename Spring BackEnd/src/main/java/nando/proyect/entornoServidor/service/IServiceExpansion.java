package nando.proyect.entornoServidor.service;

import java.util.List;


import nando.proyect.entornoServidor.model.Expansion;
public interface IServiceExpansion {
    List<Expansion> encontrarTodasLasExpansiones();
    void guardarExpansion(Expansion expansion);
    Expansion encontrarUnaExpansionPorId(Integer id);
    List<Expansion> encontrarExpansionesPorIddeJuego(Integer idJuego);
}
