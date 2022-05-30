package nando.proyect.entornoServidor.service;

import java.util.List;

import org.springframework.data.domain.Sort;

import nando.proyect.entornoServidor.model.Expansion;
public interface IServiceExpansion {
    List<Expansion> encontrarTodasLasExpansiones();
    void guardarExpansion(Expansion expansion);
    Expansion encontrarUnaExpansionPorId(Integer id);
    List<Expansion> encontrarExpansionesPorFechaDeSalida(Sort sort);
}
